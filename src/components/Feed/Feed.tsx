import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { AnimatePresence } from 'framer-motion';
import * as React from 'react';
import { Post } from '../Post';
import { TweetBox } from '../TweetBox';
import { db } from '@/lib/firebase/firebase';
import type { Post as PostType } from '@/lib/firebase/types/post';

interface FeedProps {}

export const Feed: React.FC<FeedProps> = () => {
  const [posts, setPosts] = React.useState<PostType[]>([]);

  React.useEffect(() => {
    const unsub = onSnapshot(query(collection(db, 'posts'), orderBy('createdAt', 'desc')), (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as PostType[]);
    });

    return unsub;
  }, []);

  return (
    <div className='xl:ml-[280px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
      <div className='sticky top-0 bg-white z-10 py-4 px-5'>
        <h2 className='text-3xl font-extrabold'>Home</h2>
      </div>

      {/* Tweet Box */}
      <TweetBox />

      <AnimatePresence>
        {posts.map((post) => (
          <Post
            key={post.id}
            displayName={post.displayName}
            username={post.username}
            image={post.image}
            avatar={post.avatar}
            text={post.text}
            createdAt={post.createdAt}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};
