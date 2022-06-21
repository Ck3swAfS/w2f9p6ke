import * as React from 'react';

interface SidebarLinkProps {
  text: string;
  Icon: any;
  ActiveIcon: any;
  active?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ text, Icon, ActiveIcon, active = false }) => {
  return (
    <div className='hoverEffect flex items-center text-gray-700 justify-center xl:justify-start space-x-3'>
      {active ? <ActiveIcon className='h-7' /> : <Icon className='h-7' />}
      <span className={`${active && 'font-bold'} text-xl hidden xl:inline`}>{text}</span>
    </div>
  );
};

export default SidebarLink;
