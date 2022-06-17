import React from 'react';
import { Post } from '../Post/Post';
import { TweetBox } from '../TweetBox/TweetBox';

interface FeedProps {}

const Feed: React.FC<FeedProps> = () => {
  return (
    <div className='flex flex-col w-96 flex-auto'>
      <div className='sticky top-0 bg-white z-10 py-4 px-5'>
        <h2 className='text-3xl font-extrabold'>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />
      {Array(20).map((x, i) => (
        <div key={i} className=''>
          <h2 className='text-3xl font-extrabold'>Home</h2>
        </div>
      ))}

      <Post
        displayName={'Kim'}
        username='mlee1423'
        avatar='https://static.overlay-tech.com/assets/bae199c5-7547-4e59-92e4-bff13a5ab880.png'
        text="That's awesome!!!"
      />

      <Post
        displayName={'Kim'}
        username='mlee1423'
        avatar='https://static.overlay-tech.com/assets/bae199c5-7547-4e59-92e4-bff13a5ab880.png'
        text="That's awesome!!!"
      />
    </div>
  );
};

export default Feed;
