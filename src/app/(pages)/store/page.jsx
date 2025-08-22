import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { EyeIcon, ClockIcon, LightbulbIcon, PauseIcon, CrownIcon, CoinsIcon } from 'lucide-react';

export default function StorePage() {
  return <Layout>
      <div className="pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Store</h1>
          <div className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full flex items-center">
            <CoinsIcon size={16} className="mr-1" />
            <span className="font-medium">2,450</span>
          </div>
        </div>
        {/* VIP Membership */}
        <Card className="mb-6 bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 overflow-hidden relative">
          <div className="absolute top-0 right-0 bg-yellow-400 text-white text-xs py-1 px-3 rounded-bl-lg">
            BEST VALUE
          </div>
          <div className="flex items-center mb-4">
            <CrownIcon size={24} className="text-yellow-500 mr-2" />
            <h2 className="text-xl font-bold">VIP Membership</h2>
          </div>
          <div className="mb-4">
            <ul className="space-y-2">
              <li className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></div>
                Unlimited hints & reveals
              </li>
              <li className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></div>
                Double coins from games
              </li>
              <li className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></div>
                Exclusive golden hexagon tiles
              </li>
              <li className="flex items-center text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mr-2"></div>
                Ad-free experience
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <span className="text-gray-500 text-sm line-through">$9.99</span>
              <span className="text-xl font-bold ml-2">$4.99</span>
              <span className="text-gray-500 text-xs">/month</span>
            </div>
            <Button variant="primary">Subscribe</Button>
          </div>
        </Card>
        {/* Power-ups */}
        <h2 className="text-xl font-bold mb-4">Power-ups</h2>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-3">
                <EyeIcon size={32} className="text-teal-500" />
              </div>
              <h3 className="font-bold mb-1">Reveal</h3>
              <p className="text-xs text-gray-500 mb-3">
                Instantly reveal a tile's number
              </p>
              <div className="mt-auto w-full flex justify-between items-center">
                <div className="flex items-center text-yellow-700">
                  <CoinsIcon size={16} className="mr-1" />
                  <span className="font-medium">150</span>
                </div>
                <Button size="sm" variant="outline">
                  Buy
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <ClockIcon size={32} className="text-purple-500" />
              </div>
              <h3 className="font-bold mb-1">Time Boost</h3>
              <p className="text-xs text-gray-500 mb-3">
                Add 15 seconds to the timer
              </p>
              <div className="mt-auto w-full flex justify-between items-center">
                <div className="flex items-center text-yellow-700">
                  <CoinsIcon size={16} className="mr-1" />
                  <span className="font-medium">100</span>
                </div>
                <Button size="sm" variant="outline">
                  Buy
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <LightbulbIcon size={32} className="text-orange-500" />
              </div>
              <h3 className="font-bold mb-1">Hint</h3>
              <p className="text-xs text-gray-500 mb-3">
                Highlight a correct tile
              </p>
              <div className="mt-auto w-full flex justify-between items-center">
                <div className="flex items-center text-yellow-700">
                  <CoinsIcon size={16} className="mr-1" />
                  <span className="font-medium">200</span>
                </div>
                <Button size="sm" variant="outline">
                  Buy
                </Button>
              </div>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <PauseIcon size={32} className="text-blue-500" />
              </div>
              <h3 className="font-bold mb-1">Freeze</h3>
              <p className="text-xs text-gray-500 mb-3">
                Pause the timer for 5 seconds
              </p>
              <div className="mt-auto w-full flex justify-between items-center">
                <div className="flex items-center text-yellow-700">
                  <CoinsIcon size={16} className="mr-1" />
                  <span className="font-medium">250</span>
                </div>
                <Button size="sm" variant="outline">
                  Buy
                </Button>
              </div>
            </div>
          </Card>
        </div>
        {/* Coin packages */}
        <h2 className="text-xl font-bold mb-4">Get More Coins</h2>
        <div className="grid grid-cols-3 gap-3">
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="text-yellow-500 font-bold text-lg mb-1">500</div>
              <div className="text-xs text-gray-500 mb-2">coins</div>
              <Button size="sm" variant="outline" fullWidth>
                $0.99
              </Button>
            </div>
          </Card>
          <Card className="border-2 border-yellow-300">
            <div className="flex flex-col items-center text-center">
              <div className="text-yellow-500 font-bold text-lg mb-1">
                1,500
              </div>
              <div className="text-xs text-gray-500 mb-2">coins</div>
              <div className="bg-yellow-100 text-yellow-700 text-xs px-2 py-0.5 rounded-full mb-2">
                BEST VALUE
              </div>
              <Button size="sm" variant="primary" fullWidth>
                $1.99
              </Button>
            </div>
          </Card>
          <Card>
            <div className="flex flex-col items-center text-center">
              <div className="text-yellow-500 font-bold text-lg mb-1">
                3,000
              </div>
              <div className="text-xs text-gray-500 mb-2">coins</div>
              <Button size="sm" variant="outline" fullWidth>
                $3.99
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </Layout>;
};
