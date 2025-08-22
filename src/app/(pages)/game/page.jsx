"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { HexagonTile } from "@/components/ui/HexagonTile";
import { Card } from "@/components/ui/Card";
import { EyeIcon, ClockIcon, LightbulbIcon, PauseIcon } from "lucide-react";

export default function GamePage() {
  const [gamePhase, setGamePhase] = useState("countdown"); // "countdown" | "memorize" | "recall"
  const [countdown, setCountdown] = useState(3);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(60);

  // Sample game grid data
  const gridSize = 4;
  const tiles = Array.from({ length: gridSize * gridSize }, (_, i) => ({
    id: i,
    number: Math.floor(Math.random() * 9) + 1,
    letter: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
    flipped: false,
  }));

  const [gameGrid, setGameGrid] = useState(tiles);

  // Handle countdown and phase changes
  useEffect(() => {
    let timer;

    if (gamePhase === "countdown" && countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else if (gamePhase === "countdown" && countdown === 0) {
      setGamePhase("memorize");
      setCountdown(5);
    } else if (gamePhase === "memorize" && countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else if (gamePhase === "memorize" && countdown === 0) {
      setGamePhase("recall");
    } else if (gamePhase === "recall") {
      timer = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(timer);
    };
  }, [gamePhase, countdown]);

  // Handle tile click during recall phase
  const handleTileClick = (id) => {
    if (gamePhase !== "recall") return;

    setGameGrid((prev) =>
      prev.map((tile) =>
        tile.id === id ? { ...tile, flipped: !tile.flipped } : tile
      )
    );

    // Example scoring logic
    setScore((s) => s + 10);
  };

  // Render content based on game phase
  const renderTileContent = (tile) => {
    if (gamePhase === "countdown") {
      return null;
    } else if (gamePhase === "memorize") {
      return (
        <span className="text-white font-bold text-xl">{tile.number}</span>
      );
    } else {
      return tile.flipped ? (
        <span className="text-white font-bold text-xl">{tile.number}</span>
      ) : (
        <span className="text-white font-bold text-xl">{tile.letter}</span>
      );
    }
  };

  return (
    <Layout>
      <div className="pb-24">
        {/* Game header */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-purple-100 text-purple-700 py-1 px-4 rounded-full font-medium">
            Score: {score}
          </div>
          <div className="bg-orange-100 text-orange-700 py-1 px-4 rounded-full font-medium flex items-center">
            <ClockIcon size={16} className="mr-1" />
            {time}s
          </div>
        </div>

        {/* Countdown overlay */}
        {gamePhase === "countdown" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="text-white text-6xl font-bold animate-pulse">
              {countdown}
            </div>
          </div>
        )}

        {/* Game instruction */}
        <div className="mb-6 text-center">
          {gamePhase === "memorize" && (
            <div className="text-lg font-medium">
              Memorize the numbers! ({countdown}s)
            </div>
          )}
          {gamePhase === "recall" && (
            <div className="text-lg font-medium">
              Find the tile with number{" "}
              <span className="text-teal-500 font-bold">3</span>
            </div>
          )}
        </div>

        {/* Hexagon grid */}
        <div className="flex justify-center mb-8">
          <div className="grid grid-cols-4 gap-1">
            {gameGrid.map((tile) => (
              <HexagonTile
                key={tile.id}
                content={renderTileContent(tile)}
                flipped={tile.flipped}
                onClick={() => handleTileClick(tile.id)}
                color={tile.id % 2 === 0 ? "#2DD4BF" : "#A78BFA"}
              />
            ))}
          </div>
        </div>

        {/* Power-ups */}
        {gamePhase === "recall" && (
          <Card>
            <h3 className="text-lg font-medium mb-3">Power-ups</h3>
            <div className="grid grid-cols-4 gap-2">
              <button className="flex flex-col items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <EyeIcon size={24} className="text-teal-500 mb-1" />
                <span className="text-xs">Reveal</span>
              </button>
              <button className="flex flex-col items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <ClockIcon size={24} className="text-purple-500 mb-1" />
                <span className="text-xs">+10s</span>
              </button>
              <button className="flex flex-col items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <LightbulbIcon size={24} className="text-orange-500 mb-1" />
                <span className="text-xs">Hint</span>
              </button>
              <button className="flex flex-col items-center p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                <PauseIcon size={24} className="text-blue-500 mb-1" />
                <span className="text-xs">Freeze</span>
              </button>
            </div>
          </Card>
        )}
      </div>
    </Layout>
  );
};
