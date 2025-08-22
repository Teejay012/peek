"use client";
import React from "react";
import { Card } from "@/components/ui/Card";
import { PlayIcon, ZapIcon, BookOpenIcon } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: <PlayIcon className="text-teal-500" size={28} />,
      title: "Quick Play",
      desc: "Jump straight into a game in seconds.",
    },
    {
      icon: <ZapIcon className="text-orange-500" size={28} />,
      title: "Power-Ups",
      desc: "Boost your gameplay with special abilities.",
    },
    {
      icon: <BookOpenIcon className="text-purple-500" size={28} />,
      title: "Learn & Master",
      desc: "Sharpen your memory skills and track progress.",
    },
  ];

  return (
    <div className="grid gap-6 mt-16 z-10">
      {features.map((f, idx) => (
        <Card
          key={idx}
          className="flex items-start gap-4 p-4 hover:shadow-lg transition-shadow"
        >
          <div>{f.icon}</div>
          <div>
            <h3 className="font-semibold">{f.title}</h3>
            <p className="text-sm text-gray-600">{f.desc}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};
