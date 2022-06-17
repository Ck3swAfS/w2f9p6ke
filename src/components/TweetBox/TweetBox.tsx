import * as React from 'react';
import { Avatar } from '../Avatar/Avatar';

interface Props {}

export const TweetBox: React.FC<Props> = () => {
  return (
    <div className='pb-2.5 pr-2.5 border-b-8 border-solid border-gray-200'>
      <form className='flex flex-col'>
        <div className='flex p-5'>
          <Avatar src={'https://static.overlay-tech.com/assets/bae199c5-7547-4e59-92e4-bff13a5ab880.png'} />
          <input className='flex-1 ml-5 text-xl border-none outline-none' type='text' placeholder="What's happening?" />
        </div>
        <button className='block bg-sky-400 border-none rounded-3xl w-20 h-10 mt-5 ml-auto font-black text-white'>
          Tweet
        </button>
      </form>
    </div>
  );
};
