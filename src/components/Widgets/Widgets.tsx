import { SearchIcon } from '@heroicons/react/outline';
import * as React from 'react';

interface WidgetsProps {}

export const Widgets: React.FC<WidgetsProps> = () => {
  return (
    <div className='flex flex-col flex-auto'>
      <div className='flex items-center bg-gray-100 p-2.5 rounded-2xl mt-2.5 ml-5'>
        <SearchIcon width='16' height='16' color='gray' />
        <input type='text' placeholder='Search...' className='border-none outline-none bg-gray-100' />
      </div>

      <div className='flex items-center bg-gray-200 mt-4 ml-5 p-2.5 rounded-2xl min-h-fit'>
        <h2 className='text-xl font-extrabold'>{"What's happening?"}</h2>
      </div>
    </div>
  );
};
