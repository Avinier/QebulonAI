// components/layouts/DashboardLayout.jsx
'use client'

import { useState } from 'react';
import { Settings, BarChart2, FileText, BookOpen, HelpCircle, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainPageLayout = ({ children }) => {
  const pathname = usePathname();
  
  const sidebarItems = [
    { 
      icon: <BookOpen size={20} />, 
      text: 'AI Chat Helper',
      href: '/chatbot'
    },
    { 
      icon: <FileText size={20} />, 
      text: 'Dashboard', 
      href: '/dashboard',
      isPro: true 
    },
    { 
      icon: <BarChart2 size={20} />, 
      text: 'My Projects', 
      link: '/projects',
      isPro: true 
    },
    { 
      icon: <Settings size={20} />, 
      text: 'Settings',
      href: '/settings'
    },
    { 
      icon: <HelpCircle size={20} />, 
      text: 'Updates & FAQ',
      href: '/faq'
    },
  ];

  return (
    <div className="flex h-screen bg-background font-primary">
      {/* Sidebar */}
      <div className="w-64 bg-background-dark p-4 flex flex-col">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-primary rounded-lg" />
          <span className="text-white font-secondary text-lg">MindMerge</span>
        </div>

        {/* Sidebar Items */}
        <div className="flex-1">
          {sidebarItems.map((item, index) => (
            <Link 
              key={index} 
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-background-light cursor-pointer
                ${pathname === item.href ? 'bg-background-light' : ''}`}
            >
              <span className="text-gray-400">{item.icon}</span>
              <span className="text-gray-300">{item.text}</span>
              {item.isPro && (
                <span className="ml-auto text-xs bg-primary/20 text-primary px-2 py-0.5 rounded">
                  PRO
                </span>
              )}
            </Link>
          ))}
        </div>

        {/* Logout */}
        <button 
          onClick={() => {/* Add logout logic */}}
          className="flex items-center gap-2 p-3 mt-4 cursor-pointer w-full hover:bg-background-light rounded-lg"
        >
          <LogOut size={20} className="text-gray-400" />
          <span className="text-gray-300">Log out</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </div>
  );
};