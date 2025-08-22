'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { HexagonTile } from '@/components/ui/HexagonTile';
import { PlayIcon, ZapIcon, BookOpenIcon } from 'lucide-react';
import Image from 'next/image';

const HomePage = () => {
  const router = useRouter();

  const activePlayers = [
    { id: 1, username: 'Alex', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, username: 'Jordan', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, username: 'Taylor', avatar: 'https://i.pravatar.cc/150?img=3' },
    { id: 4, username: 'Casey', avatar: 'https://i.pravatar.cc/150?img=4' },
    { id: 5, username: 'Riley', avatar: 'https://i.pravatar.cc/150?img=5' },
  ];

  return (
    <Layout>
      <div className="pb-20">
        <h1 className="text-2xl font-bold mb-6">Welcome back, Player!</h1>

        {/* Active Players */}
        <Card className="mb-6">
          <h2 className="text-lg font-medium mb-3">Players Online</h2>
          <div className="flex overflow-x-auto pb-2 -mx-2">
            {activePlayers.map((player) => (
              <div key={player.id} className="px-2 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-teal-400 relative">
                  <Image
                    src={player.avatar}
                    alt={player.username}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <span className="text-xs mt-1">{player.username}</span>
              </div>
            ))}
            <div className="px-2 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400">
                +42
              </div>
              <span className="text-xs mt-1">more</span>
            </div>
          </div>
        </Card>

        {/* Start Game */}
        <Card className="mb-6 bg-gradient-to-br from-teal-50 to-teal-100 border border-teal-200">
          <h2 className="text-xl font-bold mb-4 text-center">Start New Game</h2>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button
              className="bg-white rounded-xl py-3 px-2 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-teal-300"
              onClick={() => router.push('/game')}
            >
              <div className="text-center">
                <div className="text-lg font-medium text-teal-500">Easy</div>
                <div className="text-xs text-gray-500">4x4 Grid</div>
              </div>
            </button>
            <button
              className="bg-white rounded-xl py-3 px-2 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-teal-300"
              onClick={() => router.push('/game')}
            >
              <div className="text-center">
                <div className="text-lg font-medium text-purple-500">
                  Medium
                </div>
                <div className="text-xs text-gray-500">5x5 Grid</div>
              </div>
            </button>
            <button
              className="bg-white rounded-xl py-3 px-2 shadow-sm hover:shadow-md transition-shadow border-2 border-transparent hover:border-teal-300"
              onClick={() => router.push('/game')}
            >
              <div className="text-center">
                <div className="text-lg font-medium text-orange-500">Hard</div>
                <div className="text-xs text-gray-500">6x6 Grid</div>
              </div>
            </button>
          </div>
          <Button
            variant="primary"
            fullWidth
            icon={<PlayIcon size={18} />}
            onClick={() => router.push('/game')}
          >
            Quick Play
          </Button>
        </Card>

        {/* Shortcuts */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="flex flex-col items-center py-4 hover:shadow-lg transition-shadow cursor-pointer">
            <BookOpenIcon size={32} className="text-purple-500 mb-2" />
            <h3 className="font-medium">How to Play</h3>
          </Card>
          <Card
            className="flex flex-col items-center py-4 hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => router.push('/store')}
          >
            <ZapIcon size={32} className="text-orange-500 mb-2" />
            <h3 className="font-medium">Power-ups</h3>
          </Card>
        </div>

        {/* Decorative hexagons */}
        <div className="fixed bottom-20 -right-10 opacity-10 z-0">
          <HexagonTile size="lg" color="#A78BFA" />
        </div>
        <div className="fixed top-20 -left-10 opacity-10 z-0">
          <HexagonTile size="lg" color="#FB923C" />
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
