import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import InterviewCard from "@/components/ui/InterviewCard";
import { getCurrentUser, signOut } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";
import SignOutButton from "@/components/ui/SignOutButton";

const page = async () => {
  const user = (await getCurrentUser()) || null;
  const [userInterviews, latestInterviews] = await Promise.all([
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    getInterviewsByUserId(user?.id!),
    // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
    getLatestInterviews({ userId: user?.id! }),
  ]);
  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;
  return (
    <>
      <SignOutButton />
      <section className="card-cta">
        <div className=" flex flex-col gap-6 max-w-lg">
          <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions with AI-powered feedback. Get
            instant feedback on your answers and improve your interview skills.
          </p>
          <Button asChild className="btn-primary max-sm:w-full ">
            <Link href="/interview">Start An Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          width={400}
          height={400}
          alt="robot image"
          className="max-sm:hidden"
        />
      </section>

      <section className="flex flex-col gap-6 mt-8 max-h-[1000px]  overflow-y-auto  hide-scrollbar">
        <h2>Your Interviews</h2>
        <div className="interviews-section">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>You haven&apos;t taken any interview yet</p>
          )}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8 max-h-[1000px]  overflow-y-auto  hide-scrollbar">
        <h2 className=" cursor-pointer">
          Take An Interview From Latest Interviews Taken By Other Candidates
        </h2>
        <div className="interviews-section">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <p>There are No New Interviews</p>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
