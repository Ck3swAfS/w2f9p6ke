import React from 'react';

type Props = {
  text: string;
  Icon: any;
};

const SidebarOption: React.FC<Props> = ({ text, Icon }) => {
  return (
    <div
      className='flex flex-row items-center cursor-pointer  hover:text-blue-400 hover:rounded-3xl
    transition duration-200 hover:ease-out'
    >
      <Icon className='p-5' width='70' height='70' />
      <p className='text-xl font-extrabold mr-5'>{text}</p>
    </div>
  );
};

export default SidebarOption;
