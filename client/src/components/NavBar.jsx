import { Bell, History , User } from 'lucide-react';
import dp from '../../../server/public/images/1655342713379paul-walker-21044993-1-402.jpg'

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md p-4 w-full ml-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold dark:text-gray-100">UP Lift</div>
        <div className="flex items-center space-x-4">
          <a href="/appointments" className="text-gray-600 dark:text-gray-100 hover:text-gray-800">
            <History  className="w-6 h-6" />
          </a>
          <a href="/notifications" className="relative text-gray-600 dark:text-gray-100 hover:text-gray-800">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
          </a>
          <a href="/profile" className="flex items-center text-gray-600 dark:text-gray-100 hover:text-gray-800">
            <img src={dp} alt="avatar" className="w-8 h-8 rounded-full object-cover" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

