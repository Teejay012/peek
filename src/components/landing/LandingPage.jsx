"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { HexagonTile } from "@/components/ui/HexagonTile";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex flex-col items-center justify-center p-4">
      {/* Background hexagons */}
      <div className="fixed inset-0 overflow-hidden z-0 opacity-10">
        <div className="absolute -top-20 -left-20">
          <HexagonTile size="lg" color="#A78BFA" />
        </div>
        <div className="absolute top-1/4 -right-10">
          <HexagonTile size="lg" color="#FB923C" />
        </div>
        <div className="absolute bottom-1/3 -left-10">
          <HexagonTile size="lg" color="#2DD4BF" />
        </div>
        <div className="absolute -bottom-20 right-1/4">
          <HexagonTile size="lg" color="#FACC15" />
        </div>
      </div>

      <div className="z-10 w-full max-w-md flex flex-col items-center">
        <div className="mb-12 animate-bounce">
          <Logo size="large" />
        </div>
        <div className="w-full space-y-4">
          <Button
            variant="primary"
            size="lg"
            fullWidth
            onClick={() => router.push("/signup")}
          >
            Sign Up
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
    </div>
  );
}
