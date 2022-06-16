import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold underline'>Hello world!</h1>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Button</button>
    </div>
  );
};

export default Home;
