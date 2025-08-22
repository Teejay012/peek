"use client";
import React from "react";
import { HexagonTile } from "@/components/ui/HexagonTile";

export const BackgroundHexagons = () => {
  return (
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
  );
};
