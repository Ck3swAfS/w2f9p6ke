import type { NextPage } from 'next';
import * as React from 'react';
import Feed from '@/components/Feed/Feed';
import { Modal } from '@/components/Modal/Modal';
import Sidebar from '@/components/Sidebar/Sidebar';
import Widgets from '@/components/Widgets/Widgets';

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className='flex h-screen max-w-screen-xl mx-auto px-2.5'>
      <Sidebar handleClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      <Feed />

      <Widgets />
    </div>
  );
};

export default Home;
