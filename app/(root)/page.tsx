import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { dummyInterview } from "@/constants";
import InterviewCard from "@/components/ui/InterviewCard";

const page = () => {
  return (
    <>
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

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interview</h2>
        <div className="interviews-section">
          {/* <p>You haven&apos;t taken any interview yet</p> */}
          {
            dummyInterview.map((interview) => (
               <InterviewCard {...interview} key={interview.id}/>
            ))
          }
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take An Interview</h2>
        <div className="interviews-section">
        {
            dummyInterview.map((interview) => (
               <InterviewCard {...interview} key={interview.id}/>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default page;
