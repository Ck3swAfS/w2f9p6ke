import * as React from 'react';
import { Avatar } from '../Avatar';
import { useAuth } from '@/lib/firebase/context/AuthContext';

interface Props {}

export const TweetBox: React.FC<Props> = () => {
  const { user } = useAuth();
  return (
    <div className='pb-2.5 pr-2.5 border-b-8 border-solid border-gray-200'>
      <form className='flex flex-col'>
        <div className='flex p-5'>
          <Avatar
            src={
              user?.photoURL
                ? user.photoURL
                : 'https://user-images.githubusercontent.com/107306723/174420175-b6f652f0-733e-4f3e-bb0e-3f1ec22b3a77.png'
            }
          />
          <input className='flex-1 ml-5 text-xl border-none outline-none' type='text' placeholder="What's happening?" />
        </div>
        <button
          disabled={user === null}
          className={`block bg-sky-400 disabled:bg-gray-300 border-none rounded-3xl w-20 h-10 mt-5 ml-auto font-black text-white`}
        >
          Tweet
        </button>
      </form>
    </div>
  );
};
