import AuthForm from "@/components/ui/AuthForm";
import React from "react";
export async function generateMetadata() {
  return {
    title: "AI Mock Interview Platform",
    description: "Practice AI-powered mock interviews and ace your job search.",
    other: {
      "google-site-verification": "W5cIYmHjQWGx8gun7Ru9L4QGXEQD1EaQURHqDXVWrlA",
    },
  };
}
const page = () => {
  return <AuthForm type="sign-in" />;
};

export default page;
