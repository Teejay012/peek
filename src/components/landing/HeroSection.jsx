"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";

export const HeroSection = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center text-center space-y-6 z-10">
      <div className="mb-8 animate-bounce">
        <Logo size="large" />
      </div>
      <h1 className="text-3xl font-bold text-gray-800">
        Peek – Memory Game Reimagined
      </h1>
      <p className="text-gray-600 max-w-md">
        Train your brain, challenge friends, and climb the leaderboard.
        Fun, quick, and competitive.
      </p>
      <div className="w-full max-w-sm space-y-4 mt-6">
        <Button
          variant="primary"
          size="lg"
          fullWidth
          onClick={() => router.push("/signup")}
        >
          Get Started
        </Button>
        <Button
          variant="outline"
          size="lg"
          fullWidth
          onClick={() => router.push("/login")}
        >
          Login
        </Button>
      </div>
    </div>
  );
};
