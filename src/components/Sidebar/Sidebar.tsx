import { BookmarkIcon, HomeIcon, HashtagIcon, BellIcon, MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import React from 'react';
import SidebarOption from './SidebarOption';

interface SidebarProps {
  handleClick: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ handleClick }) => {
  return (
    <div className='flex-auto'>
      <Image src='/assets/twitter.svg' width='50' height='50' alt='Twitter Logo' />
      <SidebarOption text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={HashtagIcon} />
      <SidebarOption text='Notification' Icon={BellIcon} />
      <SidebarOption text='Message' Icon={MailIcon} />
      <SidebarOption text='Bookmark' Icon={BookmarkIcon} />

      {/* Tweet Button */}
      <button
        type='button'
        onClick={handleClick}
        className='border-none rounded-3xl bg-sky-400 hover:bg-sky-500 text-white w-40 h-10'
      >
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;
