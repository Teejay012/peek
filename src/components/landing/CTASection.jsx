"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export const CTASection = () => {
  const router = useRouter();

  return (
    <div className="text-center flex justify-center flex-col mt-20 z-10">
      <h2 className="text-2xl font-bold mb-4">Ready to test your memory?</h2>
      <p className="text-gray-600 mb-6">
        Join thousands of players competing right now.
      </p>
      <Button
        variant="primary"
        size="lg"
        onClick={() => router.push("/signup")}
      >
        Play Now
      </Button>
    </div>
  );
};
