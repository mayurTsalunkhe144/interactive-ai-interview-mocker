import Agent from "@/components/ui/Agent";
import React from "react";

const page = () => {
  return (
    <div>
      <h3>Interview Generation</h3>
      <Agent userName="you" userId="user1" type="generate" />
    </div>
  );
};

export default page;
