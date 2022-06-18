import { collection, onSnapshot } from 'firebase/firestore';
import React from 'react';
import { Post } from '../Post';
import { TweetBox } from '../TweetBox';
import { db } from '@/lib/firebase/firebase';
import type { Post as PostType } from '@/lib/firebase/types/post';

interface FeedProps {}

export const Feed: React.FC<FeedProps> = () => {
  const [posts, setPosts] = React.useState<PostType[]>([]);

  React.useEffect(() => {
    const unsub = onSnapshot(collection(db, 'posts'), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostType[]);
    });

    return unsub;
  }, []);

  return (
    <div className='flex flex-col w-96 flex-auto min-h-fit'>
      <div className='sticky top-0 bg-white z-10 py-4 px-5'>
        <h2 className='text-3xl font-extrabold'>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      {posts.map((post) => (
        <Post
          key={post.id}
          displayName={post.displayName}
          username={post.username}
          image={post.image}
          avatar={post.avatar}
          text={post.text}
        />
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
