"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { HexagonTile } from "@/components/ui/HexagonTile";
import { Card } from "@/components/ui/Card";
import { EyeIcon, ClockIcon, LightbulbIcon, PauseIcon } from "lucide-react";

export default function GamePage() {
  const [phase, setPhase] = useState("countdown"); // countdown | memorize | recall | end
  const [countdown, setCountdown] = useState(3);
  const [memorizeTime, setMemorizeTime] = useState(5);
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);

  // 🎲 Generate grid (honeycomb pattern [2,3,4,3,2])
  const pattern = [2, 3, 4, 3, 2];
  const totalTiles = pattern.reduce((a, b) => a + b, 0);

  const createTiles = () =>
    Array.from({ length: totalTiles }, (_, i) => ({
      id: i,
      number: Math.floor(Math.random() * 9) + 1,
      letter: String.fromCharCode(65 + Math.floor(Math.random() * 26)),
      flipped: false,
    }));

  const [tiles, setTiles] = useState(createTiles);

  // 🕒 Handle phase transitions
  useEffect(() => {
    let timer;

    if (phase === "countdown" && countdown > 0) {
      timer = setTimeout(() => setCountdown((c) => c - 1), 1000);
    } else if (phase === "countdown" && countdown === 0) {
      setPhase("memorize");
    }

    if (phase === "memorize" && memorizeTime > 0) {
      timer = setTimeout(() => setMemorizeTime((t) => t - 1), 1000);
    } else if (phase === "memorize" && memorizeTime === 0) {
      setPhase("recall");
    }

    if (phase === "recall") {
      timer = setInterval(() => {
        setTimeLeft((t) => {
          if (t <= 1) {
            clearInterval(timer);
            setPhase("end");
            return 0;
          }
          return t - 1;
        });
      }, 1000);
    }

    return () => clearTimeout(timer);
  }, [phase, countdown, memorizeTime]);

  // 🎯 Handle tile click
  const handleTileClick = (id) => {
    if (phase !== "recall") return;

    setTiles((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, flipped: !t.flipped } : t
      )
    );

    setScore((s) => s + 10);
  };

  // 🔍 Render tile content
  const renderTileContent = (tile) => {
    if (phase === "memorize") {
      return <span className="text-white font-bold text-lg">{tile.number}</span>;
    }
    if (phase === "recall") {
      return tile.flipped ? (
        <span className="text-white font-bold text-lg">{tile.number}</span>
      ) : (
        <span className="text-white font-bold text-lg">{tile.letter}</span>
      );
    }
    return null;
  };

  return (
    <Layout>
      <div className="pb-24 relative">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div className="bg-purple-100 text-purple-700 py-1 px-4 rounded-full font-medium">
            Score: {score}
          </div>
          <div className="bg-orange-100 text-orange-700 py-1 px-4 rounded-full font-medium flex items-center">
            <ClockIcon size={16} className="mr-1" />
            {timeLeft}s
          </div>
        </div>

        {/* Overlay for countdown */}
        {phase === "countdown" && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-20">
            <span className="text-white text-6xl font-bold animate-pulse">
              {countdown}
            </span>
          </div>
        )}

        {/* Instructions */}
        <div className="mb-6 text-center">
          {phase === "memorize" && (
            <p className="text-lg font-medium">
              Memorize the numbers! ({memorizeTime}s)
            </p>
          )}
          {phase === "recall" && (
            <p className="text-lg font-medium">
              Find the tile with number{" "}
              <span className="text-teal-500 font-bold">3</span>
            </p>
          )}
          {phase === "end" && (
            <p className="text-lg font-bold text-red-500">Game Over!</p>
          )}
        </div>

        {/* Honeycomb grid */}
        <div className="flex flex-col items-center gap-y">
          {pattern.reduce((rows, count, rowIndex) => {
            const start = rows.flat().length;
            const rowTiles = tiles.slice(start, start + count);

            rows.push(
              <div
                key={rowIndex}
                className={`flex justify-center gap-x-2 ${
                  rowIndex % 2 === 1 ? "" : ""
                }`}
              >
                {rowTiles.map((tile) => (
                  <HexagonTile
                  key={tile.id}
                  onClick={() => handleTileClick(tile.id)}
                  color={tile.id % 2 === 0 ? "#2DD4BF" : "#A78BFA"}
                >
                  {renderTileContent(tile)}
                </HexagonTile>
                ))}
              </div>
            );
            return rows;
          }, [])}
        </div>

        {/* Power-ups */}
        {phase === "recall" && (
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
}
