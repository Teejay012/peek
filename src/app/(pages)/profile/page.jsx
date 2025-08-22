import Layout from "@/components/layout/Layout";
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { EditIcon, AwardIcon, TrendingUpIcon, TargetIcon, ZapIcon } from 'lucide-react';

export default function ProfilePage() {
  // Sample player data
  const player = {
    username: 'MemoryChampion',
    avatar: 'https://i.pravatar.cc/150?img=33',
    level: 12,
    streak: 7,
    stats: {
      gamesPlayed: 142,
      gamesWon: 98,
      accuracy: 87,
      bestScore: 9850
    },
    powerups: {
      reveal: 5,
      timeBoost: 3,
      hint: 7,
      freeze: 2
    }
  };
  return <Layout>
      <div className="pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Profile</h1>
          <Button variant="ghost" icon={<EditIcon size={18} />}>
            Edit
          </Button>
        </div>
        {/* Profile Header */}
        <Card className="mb-6">
          <div className="flex items-center">
            <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-teal-400">
              <img src={player.avatar} alt={player.username} className="w-full h-full object-cover" />
            </div>
            <div className="ml-4">
              <h2 className="text-xl font-bold">{player.username}</h2>
              <div className="flex items-center mt-1">
                <div className="bg-purple-100 text-purple-700 text-xs py-1 px-2 rounded-full">
                  Level {player.level}
                </div>
                <div className="bg-orange-100 text-orange-700 text-xs py-1 px-2 rounded-full ml-2 flex items-center">
                  <TrendingUpIcon size={12} className="mr-1" />
                  {player.streak} day streak
                </div>
              </div>
            </div>
          </div>
          {/* Streak progress */}
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>Streak Progress</span>
              <span>{player.streak}/10 days</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-gradient-to-r from-teal-400 to-teal-500 h-2.5 rounded-full" style={{
              width: `${player.streak / 10 * 100}%`
            }}></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              Play 3 more days to earn a Reveal power-up!
            </p>
          </div>
        </Card>
        {/* Stats */}
        <Card className="mb-6">
          <div className="flex items-center mb-4">
            <AwardIcon size={20} className="text-teal-500 mr-2" />
            <h2 className="text-lg font-medium">Stats</h2>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Games Played</p>
              <p className="text-xl font-bold">{player.stats.gamesPlayed}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Games Won</p>
              <p className="text-xl font-bold">{player.stats.gamesWon}</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Accuracy</p>
              <p className="text-xl font-bold">{player.stats.accuracy}%</p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <p className="text-gray-500 text-sm">Best Score</p>
              <p className="text-xl font-bold">{player.stats.bestScore}</p>
            </div>
          </div>
        </Card>
        {/* Power-ups */}
        <Card>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <ZapIcon size={20} className="text-orange-500 mr-2" />
              <h2 className="text-lg font-medium">Power-ups</h2>
            </div>
            <Button variant="outline" size="sm">
              Get More
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center mr-3">
                <TargetIcon size={20} className="text-teal-500" />
              </div>
              <div>
                <p className="font-medium">Reveal</p>
                <p className="text-sm text-gray-500">
                  {player.powerups.reveal} remaining
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                <ZapIcon size={20} className="text-purple-500" />
              </div>
              <div>
                <p className="font-medium">Time Boost</p>
                <p className="text-sm text-gray-500">
                  {player.powerups.timeBoost} remaining
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                <ZapIcon size={20} className="text-orange-500" />
              </div>
              <div>
                <p className="font-medium">Hint</p>
                <p className="text-sm text-gray-500">
                  {player.powerups.hint} remaining
                </p>
              </div>
            </div>
            <div className="flex items-center p-3 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <ZapIcon size={20} className="text-blue-500" />
              </div>
              <div>
                <p className="font-medium">Freeze</p>
                <p className="text-sm text-gray-500">
                  {player.powerups.freeze} remaining
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>;
};