import React from 'react';
import { Bell, Check } from 'lucide-react';

const sampleNotifications = [
  {
    id: 1,
    title: 'New message from John',
    content: 'John sent you a new message on the chat.',
    date: '2023-06-15',
    read: false,
  },
  {
    id: 2,
    title: 'Event Reminder',
    content: 'Don\'t forget the team meeting at 2 PM today.',
    date: '2023-06-14',
    read: true,
  },
  {
    id: 3,
    title: 'Project Update',
    content: 'The design team has completed the new homepage layout.',
    date: '2023-06-13',
    read: false,
  },
];

function Notification() {
  const handleMarkAsRead = (id) => {
    // Implement logic to mark the notification as read
    console.log(`Marked notification ${id} as read.`);
  };

  const handleSeeAll = () => {
    // Implement logic to see all notifications
    console.log('Navigating to see all notifications.');
  };

  return (
    <div className="p-4">
        <h2 className="text-2xl text-white font-bold text-center">Notifications</h2>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl text-white font-bold">New</h2>
        <button
          className="px-4 py-2  text-white rounded hover:bg-blue-600"
          onClick={handleSeeAll}
        >
          Mark All
        </button>
      </div>
      <div className="space-y-4">
        {sampleNotifications.map((notification) => (
          <div
            key={notification.id}
            className={`flex items-center p-4 rounded-lg shadow ${
              !notification.read
                ? 'bg-blue-100 hover:bg-blue-200'
                : 'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            <div className="mr-4">
              <Bell className="text-blue-500" size={24} />
            </div>
            <div className="flex-1">
              <h3 className="font-bold">{notification.title}</h3>
              <p>{notification.content}</p>
            </div>
            <div className="text-gray-500">
              <p>{notification.date}</p>
              {!notification.read && (
                <button
                  className="text-blue-500 hover:text-blue-600"
                  onClick={() => handleMarkAsRead(notification.id)}
                >
                  <Check size={16} />
                </button>
              )}
            </div>
          </div>
        ))}
        <button
          className="px-4 py-2  text-white rounded hover:bg-blue-600 float-right"
          onClick={handleSeeAll}
        >
          See All
        </button>
      </div>
    </div>
  );
}

export default Notification;