import * as React from 'react';

interface AvaterProps {
  src: string;
}

export const Avatar: React.FC<AvaterProps> = ({ src }) => {
  return (
    <div className='w-50 h-50'>
      <img className='rounded-full' src={src} width={50} height={50} alt='user avatar' />
    </div>
  );
};
