import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  HomeIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/outline';
import {
  AcademicCapIcon,
  BellIcon as SolidBellIcon,
  BookmarkIcon as SolidBookmarkIcon,
  ClipboardIcon as SolidClipboardIcon,
  DotsCircleHorizontalIcon as SolidDotsCircleHorizontalIcon,
  HashtagIcon as SolidHashtagIcon,
  HomeIcon as SolidHomeIcon,
  InboxIcon as SolidInboxIcon,
  UserIcon as SolidUserIcon,
} from '@heroicons/react/solid';
import Image from 'next/image';
import * as React from 'react';
import SidebarLink from './SidebarLink';
import { useAuth } from '@/lib/firebase/context/AuthContext';

interface SidebarProps {}

export const Sidebar: React.FC<SidebarProps> = () => {
  const { user } = useAuth();

  console.log(user?.photoURL);
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
      {/* Logo */}
      <div className='hoverEffect p-0 hover:bg-blue-100 xl:px-1 flex items-center'>
        <AcademicCapIcon width='50' height='50' />
        <h2 className='text-3xl font-extrabold'>cihvupna</h2>
      </div>
      <div className='mt-4 mb-2.5 xl:items-start'>
        <SidebarLink text='Home' Icon={HomeIcon} ActiveIcon={SolidHomeIcon} active />
        <SidebarLink text='Explore' Icon={HashtagIcon} ActiveIcon={SolidHashtagIcon} />
        <SidebarLink text='Notifications' Icon={BellIcon} ActiveIcon={SolidBellIcon} />
        <SidebarLink text='Messages' Icon={InboxIcon} ActiveIcon={SolidInboxIcon} />
        <SidebarLink text='Bookmarks' Icon={BookmarkIcon} ActiveIcon={SolidBookmarkIcon} />
        <SidebarLink text='Lists' Icon={ClipboardIcon} ActiveIcon={SolidClipboardIcon} />
        <SidebarLink text='Profile' Icon={UserIcon} ActiveIcon={SolidUserIcon} />
        <SidebarLink text='More' Icon={DotsCircleHorizontalIcon} ActiveIcon={SolidDotsCircleHorizontalIcon} />
      </div>
      {/* Button */}
      <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline'>
        Tweet
      </button>
      {/* Mini-Profile */}
      <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
        {user?.photoURL && <img src={user?.photoURL} alt='user name' className='h-10 w-10 rounded-full xl:mr-2' />}
        <div className='leading-5 hidden xl:inline'>
          <h4 className='font-bold'>{user?.name}</h4>
          <p className='text-gray-500'>@{user?.id?.slice(0, 8)}...</p>
        </div>
        <DotsHorizontalIcon className='h-5 xl:ml-8 hidden xl:inline' />
      </div>
    </div>
  );
};
