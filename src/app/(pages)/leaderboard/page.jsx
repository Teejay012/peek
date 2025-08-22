"use client"; 

import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Card } from '@/components/ui/Card';

export default function LeaderboardPage() {
  const [activeTab, setActiveTab] = useState("daily");

  // Sample leaderboard data
  const leaderboardData = [
    { id: 1, username: "MemoryMaster", score: 9850, avatar: "https://i.pravatar.cc/150?img=10" },
    { id: 2, username: "BrainNinja", score: 9720, avatar: "https://i.pravatar.cc/150?img=11" },
    { id: 3, username: "RecallKing", score: 9500, avatar: "https://i.pravatar.cc/150?img=12" },
    { id: 4, username: "MindHacker", score: 9100, avatar: "https://i.pravatar.cc/150?img=13" },
    { id: 5, username: "TileFlip", score: 8900, avatar: "https://i.pravatar.cc/150?img=14" },
    { id: 6, username: "HexMaster", score: 8750, avatar: "https://i.pravatar.cc/150?img=15" },
    { id: 7, username: "PatternPro", score: 8600, avatar: "https://i.pravatar.cc/150?img=16" },
    { id: 8, username: "MemoryQueen", score: 8400, avatar: "https://i.pravatar.cc/150?img=17" },
    { id: 9, username: "PeekGenius", score: 8200, avatar: "https://i.pravatar.cc/150?img=18" },
    { id: 10, username: "BrainWizard", score: 8000, avatar: "https://i.pravatar.cc/150?img=19" },
  ];

  return (
    <Layout>
      <div className="pb-20">
        <h1 className="text-2xl font-bold mb-6">Leaderboard</h1>

        {/* Tab navigation */}
        <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
          {["daily", "weekly", "monthly"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded-md text-center transition-colors ${
                activeTab === tab
                  ? "bg-white shadow-sm text-teal-500 font-medium"
                  : "text-gray-500"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Top 3 winners */}
        <div className="flex justify-center items-end mb-8">
          {/* 2nd place */}
          <div className="flex flex-col items-center mx-2">
            <div className="w-16 h-16 rounded-full border-4 border-gray-300 overflow-hidden">
              <img src={leaderboardData[1].avatar} alt={leaderboardData[1].username} className="w-full h-full object-cover" />
            </div>
            <div className="bg-gray-300 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-2">2</div>
            <p className="text-sm font-medium mt-1">{leaderboardData[1].username}</p>
            <p className="text-xs text-gray-500">{leaderboardData[1].score}</p>
          </div>

          {/* 1st place */}
          <div className="flex flex-col items-center mx-2">
            <div className="w-20 h-20 rounded-full border-4 border-yellow-400 overflow-hidden">
              <img src={leaderboardData[0].avatar} alt={leaderboardData[0].username} className="w-full h-full object-cover" />
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mt-2">1</div>
            <p className="text-sm font-bold mt-1">{leaderboardData[0].username}</p>
            <p className="text-xs text-gray-500">{leaderboardData[0].score}</p>
          </div>

          {/* 3rd place */}
          <div className="flex flex-col items-center mx-2">
            <div className="w-16 h-16 rounded-full border-4 border-orange-400 overflow-hidden">
              <img src={leaderboardData[2].avatar} alt={leaderboardData[2].username} className="w-full h-full object-cover" />
            </div>
            <div className="bg-orange-400 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mt-2">3</div>
            <p className="text-sm font-medium mt-1">{leaderboardData[2].username}</p>
            <p className="text-xs text-gray-500">{leaderboardData[2].score}</p>
          </div>
        </div>

        {/* Rest of leaderboard */}
        <Card>
          <h2 className="text-lg font-medium mb-4">Rankings</h2>
          <div className="space-y-3">
            {leaderboardData.slice(3).map((player, index) => (
              <div key={player.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
                <div className="w-8 h-8 flex items-center justify-center font-medium text-gray-500">{index + 4}</div>
                <div className="w-10 h-10 rounded-full overflow-hidden mx-3">
                  <img src={player.avatar} alt={player.username} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <p className="font-medium">{player.username}</p>
                </div>
                <div className="text-teal-500 font-medium">{player.score}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </Layout>
  );
}
