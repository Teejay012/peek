"use client";
import React from "react";
import { BackgroundHexagons } from "@/components/landing/BackgroundHexagons";
import { HeroSection } from "@/components/landing/HeroSection";
import { FeaturesSection } from "@/components/landing/FeaturesSection";
import { CTASection } from "@/components/landing/CTASection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 relative flex flex-col items-center p-6">
      <BackgroundHexagons />
      <div className="max-w-2xl w-full">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </div>
    </div>
  );
}
