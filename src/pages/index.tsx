import type { NextPage } from 'next';
import * as React from 'react';
import { Feed } from '@/components/Feed';
import { Modal } from '@/components/Modal/Modal';
import { Sidebar } from '@/components/Sidebar';
import { Widgets } from '@/components/Widgets';
import { useAuth } from '@/lib/firebase/context/AuthContext';

const Home: NextPage = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (user === null) {
      setIsOpen(true);
    }
  }, [user]);
  return (
    <div className='flex h-screen overflow-y-auto max-w-screen-xl mx-auto px-2.5'>
      <Sidebar handleClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      <Feed />

      <Widgets />
    </div>
  );
};

export default Home;
