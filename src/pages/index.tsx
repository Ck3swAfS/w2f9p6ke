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
    <div className='flex min-h-screen lg:max-w-screen-lg xl:max-w-screen-xl mx-auto'>
      <Sidebar />

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />

      <Feed />

      <Widgets />
    </div>
  );
};

export default Home;
