import { collection, addDoc } from 'firebase/firestore';
import * as React from 'react';
import { Avatar } from '../Avatar';
import { useAuth } from '@/lib/firebase/context/AuthContext';
import { db } from '@/lib/firebase/firebase';
import type { Post } from '@/lib/firebase/types/post';

interface Props {}

type PostType = Omit<Post, 'id'>;

export const TweetBox: React.FC<Props> = () => {
  const { user } = useAuth();

  const [tweetMessage, setTweetMessage] = React.useState('');
  const [tweetImage, setTweetImage] = React.useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const postData: PostType = {
      displayName: user?.name ? user.name : 'Guest',
      username: user?.id ? user.id : 'Guest',
      text: tweetMessage,
      avatar: user?.photoURL
        ? user.photoURL
        : 'https://user-images.githubusercontent.com/107306723/174420175-b6f652f0-733e-4f3e-bb0e-3f1ec22b3a77.png',
      image: tweetImage,
    };

    const collectionRef = collection(db, 'posts');
    await addDoc(collectionRef, postData);
  };

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
          <input
            className='flex-1 ml-5 text-xl border-none outline-none'
            type='text'
            placeholder="What's happening?"
            onChange={(e: any) => setTweetMessage(e.target.value)}
            value={tweetMessage}
          />
        </div>
        {/* description area */}
        <div>
          <input
            className='flex-1 ml-10 text-lg border-none outline-none text-gray-500'
            type='text'
            placeholder='Optional: Enter URL'
            onChange={(e: any) => setTweetImage(e.target.value)}
            value={tweetImage}
          />
        </div>
        <button
          disabled={user === null}
          className={`block bg-sky-400 disabled:bg-gray-300 border-none rounded-3xl w-20 h-10 mt-5 ml-auto font-bold hover:bg-sky-500 text-white`}
          onClick={handleSubmit}
        >
          Tweet
        </button>
      </form>
    </div>
  );
};
