import React from "react";
import dayjs from "dayjs";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./button";
import Link from "next/link";
import DisplayTechicons from "./DisplayTechicons";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";
const InterviewCard = async ({
  id,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && id
      ? await getFeedbackByInterviewId({ interviewId: id, userId })
      : null;

  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
  const formmatedDate = dayjs(
    feedback?.createdAt || createdAt || Date.now()
  ).format(" MMM d, YYYY");

  return (
    <div className="card-border w-[360px] max-sm:w-full min-h-96 cursor-pointer">
      <div className="card-interview">
        <div className="">
          <div className="absolute top-0 right-0 p-2 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
            <p className="badge-text">{normalizedType}</p>
          </div>
          <Image
            src={getRandomInterviewCover()}
            width={90}
            height={90}
            alt="company logo"
            className="rounded-full object-fit size-[90px]"
          />
          <h3 className="mt-5 capitalize"> {role} Interview</h3>
          <div className="flex flex-row gap-5 mt-3">
            <div className="flex flex-row gap-2 ">
              <Image
                src="/calendar.svg"
                width={22}
                height={22}
                alt="calendar icon"
              />
              <p>{formmatedDate}</p>
            </div>
            <div className="flex flex-row gap-2 items-center">
              <Image src="/star.svg" width={22} height={22} alt="clock icon" />
              <p>{feedback?.totalScore || "---"}/100</p>
            </div>
          </div>
          <p className="line-clamp-2 mt-5">
            {feedback?.finalAssessment ||
              "You haven't taken this interview yet. Take It now to improve your skills"}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <DisplayTechicons techStack={techstack} />
          <Button className="btn-primary">
            <Link
              href={feedback ? `/interview/${id}/feedback` : `/interview/${id}`}
            >
              {feedback ? "Check Feedback" : "Take Interview"}
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
