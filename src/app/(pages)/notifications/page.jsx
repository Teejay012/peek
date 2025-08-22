import Layout from '@/components/layout/Layout';
import { Card } from '@/components/ui/Card';
import { TrophyIcon, GiftIcon, CalendarIcon, BellIcon, CoinsIcon, UserPlusIcon } from 'lucide-react';

export default function NotificationsPage() {
  // Sample notifications
  const notifications = [{
    id: 1,
    type: 'tournament',
    title: 'Tournament Starting Soon!',
    message: 'The Weekly Brain Challenge begins in 2 hours.',
    time: '10 minutes ago',
    read: false,
    icon: <TrophyIcon size={20} className="text-purple-500" />
  }, {
    id: 2,
    type: 'reward',
    title: 'Daily Reward Collected',
    message: 'You received 50 coins for your daily login.',
    time: '2 hours ago',
    read: false,
    icon: <GiftIcon size={20} className="text-teal-500" />
  }, {
    id: 3,
    type: 'streak',
    title: '5-Day Streak Achieved!',
    message: "You've earned a Hint power-up for your dedication.",
    time: 'Yesterday',
    read: true,
    icon: <CalendarIcon size={20} className="text-orange-500" />
  }, {
    id: 4,
    type: 'friend',
    title: 'New Friend Request',
    message: 'BrainNinja wants to be your friend.',
    time: 'Yesterday',
    read: true,
    icon: <UserPlusIcon size={20} className="text-blue-500" />
  }, {
    id: 5,
    type: 'tournament',
    title: 'Tournament Results',
    message: 'You placed 5th in the Memory Masters Tournament.',
    time: '2 days ago',
    read: true,
    icon: <TrophyIcon size={20} className="text-purple-500" />
  }, {
    id: 6,
    type: 'reward',
    title: 'Bonus Reward',
    message: 'You received 200 coins for completing all daily challenges.',
    time: '3 days ago',
    read: true,
    icon: <CoinsIcon size={20} className="text-yellow-500" />
  }];
  return <Layout>
      <div className="pb-20">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Notifications</h1>
          <button className="text-teal-500 text-sm font-medium">
            Mark all as read
          </button>
        </div>
        {/* Notifications list */}
        <div className="space-y-3">
          {notifications.map(notification => <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-teal-400' : ''}`}>
              <div className="flex">
                <div className="mr-4">
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    {notification.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                      {notification.title}
                    </h3>
                    <span className="text-xs text-gray-500">
                      {notification.time}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {notification.message}
                  </p>
                </div>
              </div>
            </Card>)}
        </div>
        {/* Empty state (when there are no notifications) */}
        {notifications.length === 0 && <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
              <BellIcon size={32} className="text-gray-400" />
            </div>
            <h3 className="font-medium text-lg text-gray-700 mb-1">
              No notifications
            </h3>
            <p className="text-gray-500 text-sm">
              You're all caught up! Check back later for updates.
            </p>
          </div>}
      </div>
    </Layout>;
};