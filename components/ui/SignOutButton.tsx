"use client";
import React from "react";
import { Button } from "./button";
import { signOut } from "@/lib/actions/auth.action";
import { toast } from "sonner";

const SignOutButton = () => {
  const handleSignOut = async () => {
    await signOut();
    toast("Signed out Succesfully");
  };
  return (
    <div className="absolute m-4 lg:top-8.5 right-10 sm:top-0 right-0">
      <Button
        onClick={handleSignOut}
        className="btn-primary px-4 py-2 rounded-lg shadow-lg"
      >
        Sign Out
      </Button>
    </div>
  );
};

export default SignOutButton;
