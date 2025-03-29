"use server";

import { db } from "@/firebase/admin";
// import { cookies } from "next/headers";

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interview = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("userId", "==", userId)
    .get();
  return interview.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
export async function getInterviewByUserId(
  Id: string
): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(Id).get();
  return interview.data() as Interview | null;
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;
  const interview = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finilized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();
  return interview.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}
