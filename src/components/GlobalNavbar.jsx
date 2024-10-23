// components/Dashboard/GlobalNav.jsx
import Link from 'next/link';
import { Bell, HelpCircle, Settings, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const GlobalNav = () => {
  return (
    <header className="h-16 border-b border-gray-200 bg-white">
      <div className="max-w-screen-2xl mx-auto px-4 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Left section */}
          <div className="flex items-center space-x-4">
            {/* Logo/Home link */}
            <Link href="/" className="text-primary">
              <div className="w-8 h-8 bg-primary rounded-lg"></div>
            </Link>

            {/* Project selector */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 px-2 py-1.5 rounded-md hover:bg-secondary/10 cursor-pointer">
                <div className="w-5 h-5 rounded-full bg-green-500 overflow-hidden">
                  <Image 
                    src="/logo-1.jpeg"  // Replace with your avatar image
                    alt="Project avatar"
                    width={40}
                    height={40}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium">avinier's projects</span>
                <span className="px-2 py-0.5 text-xs bg-secondary/20 rounded-full">
                  Hobby
                </span>
                <ChevronDown className="w-4 h-4 text-grey" />
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="flex items-center space-x-4">
            <nav className="flex items-center space-x-4">
              <Link 
                href="/feedback" 
                className="text-text hover:text-primary text-sm"
              >
                Contact
              </Link>
              <Link 
                href="/changelog" 
                className="text-text hover:text-primary text-sm"
              >
                More
              </Link>
              <Link 
                href="/help" 
                className="text-text hover:text-primary text-sm"
              >
                Help
              </Link>
              <Link 
                href="/docs" 
                className="text-text hover:text-primary text-sm"
              >
                Docs
              </Link>
            </nav>

            <div className="flex items-center space-x-2 border-l border-border pl-4">
              <button className="relative p-2 text-secondary hover:text-primary rounded-md hover:bg-secondary/10">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
              </button>
              
              {/* Profile/Avatar */}
              <button className="w-8 h-8 rounded-full bg-green-500 overflow-hidden">
                <Image 
                  src="/logo-1.jpeg"  // Replace with your avatar image
                  alt="User avatar"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GlobalNav;