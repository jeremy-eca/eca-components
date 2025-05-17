import React from 'react';
import { TextInput } from '../TextInput/TextInput';
import { Avatar } from '../Avatar/Avatar';
import { NavigationMenu } from '../NavigationMenu/NavigationMenu';

const menuItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    link: '/dashboard',
    icon: 'fi-rr-bullseye-arrow',
    enabled: true
  },
  {
    id: 'my-work',
    label: 'My work',
    link: '/my-work',
    icon: 'fi-rr-completed',
    enabled: true
  },
  {
    id: 'moves',
    label: 'Moves',
    icon: 'fi-rr-track',
    enabled: true,
    subItems: [
      {
        id: 'cases',
        label: 'Cases',
        link: '/cases',
        enabled: true
      },
      {
        id: 'scenarios',
        label: 'Scenarios',
        link: '/scenarios',
        enabled: true
      }
    ]
  },
  {
    id: 'talent',
    label: 'Talent',
    link: '/talent',
    icon: 'fi-rr-user',
    enabled: true
  },
  {
    id: 'discovery',
    label: 'Discovery',
    link: '/discovery',
    icon: 'fi-rr-search',
    enabled: true
  },
  {
    id: 'company',
    label: 'Company',
    link: '/company',
    icon: 'fi-rr-building',
    enabled: true
  }
];

export function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      {/* Top Bar */}
      <header className="flex h-16 items-center justify-between border-b border-neutral-detail-palest bg-neutral-layer-2 px-4">
        <div className="flex items-center gap-2">
          <span className="text-neutral-body">Moves</span>
          <span className="text-neutral-detail-pale">/</span>
          <span className="text-neutral-body">Cases</span>
          <span className="text-neutral-detail-pale">/</span>
          <span className="text-neutral-body">Case ID</span>
        </div>
        
        <div className="flex items-center gap-4">
          <TextInput 
            name="search"
            placeholder="Search"
            icon="fi-rr-search"
            variant="tonal"
          />
          <button className="rounded-full p-2 hover:bg-neutral-detail-palest">
            <i className="fi fi-rr-settings flex text-neutral-detail-bold" />
          </button>
          <button className="rounded-full p-2 hover:bg-neutral-detail-palest">
            <i className="fi fi-rr-bell flex text-neutral-detail-bold" />
          </button>
          <Avatar>GM</Avatar>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Side Navigation */}
        <NavigationMenu menuItems={menuItems} url="/cases" />
        
        {/* Content Area */}
        <main className="flex-1 overflow-auto bg-neutral-layer-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}