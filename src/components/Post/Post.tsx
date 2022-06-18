import { ChatIcon, HeartIcon, RefreshIcon, UploadIcon } from '@heroicons/react/outline';
import { motion, usePresence } from 'framer-motion';
import * as React from 'react';
import { Avatar } from '../Avatar';

interface PostProps {
  displayName: string;
  username: string;
  text: string;
  image?: string;
  avatar: string;
}

export const Post: React.FC<PostProps> = ({ displayName, username, text, image = null, avatar }) => {
  const transition = { type: 'spring', stiffness: 500, damping: 50, mass: 1 };

  const [isPresent, safeToRemove] = usePresence();

  const animations = {
    layout: true,
    initial: 'out',
    animate: isPresent ? 'in' : 'out',
    variants: {
      in: { transformY: 1, opacity: 1 },
      out: { transformY: 0, opacity: 0, zIndex: -1 },
    },
    onAnimationComplete: () => !isPresent && safeToRemove(),
    transition,
  };

  return (
    <motion.div {...animations} className='flex items-start border-b-2 p-2.5'>
      <div className=''>
        <Avatar src={avatar} />
      </div>
      {/* post body */}
      <div className='flex-1 px-2.5'>
        {/* post header */}
        <div className='pb-1'>
          <h3>
            {displayName}{' '}
            <span className='text-sm text-gray-400 mb-2'>
              {'@'}
              {username}
            </span>
          </h3>
        </div>

        {/* post description */}
        <div className='mt-2'>
          <p className=''>{text}</p>
          {image && <img src={image} alt='post image' />}
        </div>
        {/* post footer */}
        <div className='flex justify-between mt-2.5'>
          <ChatIcon width='16' height='16' />
          <RefreshIcon width='16' height='16' />
          <HeartIcon width='16' height='16' />
          <UploadIcon width='16' height='16' />
        </div>
      </div>
    </motion.div>
  );
};
