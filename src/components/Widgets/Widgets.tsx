import { SearchIcon, BadgeCheckIcon } from '@heroicons/react/outline';
import { PuzzleIcon } from '@heroicons/react/solid';
import moment from 'moment';
import * as React from 'react';

const timeline = [
  {
    taskName: 'アニメ鑑賞',
    completedAt: 1655799291318,
  },
  {
    taskName: '英語の勉強',
    completedAt: 1655793221318,
  },
  {
    taskName: '進捗報告',
    completedAt: 1655551448131,
  },
  {
    taskName: 'プログラミングの学習',
    completedAt: 1655441448131,
  },
];

const tasks = [
  {
    username: 'anya',
    taskname: 'Puzzle',
    tags: ['Study', 'Project'],
  },
  {
    username: 'anya',
    taskname: 'Puzzle',
  },
  {
    username: 'anya home house',
    taskname: 'Puzzle',
  },
];

const colors = ['#FFD700', '#D7D7D7', '#AD8A56'];

interface WidgetsProps {}

export const Widgets: React.FC<WidgetsProps> = () => {
  const [timelineNum, setTimelineNum] = React.useState(3);
  const [taskNum, setTaskNum] = React.useState(3);

  return (
    <div className='flex flex-col flex-auto'>
      <div className='sticky top-0 flex items-center bg-gray-100 p-2.5 rounded-2xl mt-2.5 ml-5'>
        <SearchIcon width='16' height='16' color='gray' />
        <input type='text' placeholder='Search...' className='border-none outline-none bg-gray-100' />
      </div>

      {/* Timeline */}
      <div className='flex flex-col items-center bg-gray-50 mt-4 ml-5 p-2.5 rounded-2xl min-h-fit'>
        <h2 className='text-xl font-extrabold pb-4'>{'Timeline'}</h2>
        <div className='flex flex-col bg-white w-full'>
          {timeline.slice(0, timelineNum).map((task, index) => (
            <div
              key={index}
              className='flex flex-row w-full justify-start items-center p-5 space-x-2 border-b-2 border-gray-200'
            >
              <BadgeCheckIcon width='50' height='50' color={'red'} />
              <div>
                <h4 className='font-bold text-xl'>{task.taskName}</h4>
                <p>{moment(task.completedAt).fromNow()}</p>
              </div>
            </div>
          ))}
        </div>
        {timelineNum < timeline.length && (
          <div className='flex justify-end mt-2'>
            <button
              onClick={() => setTimelineNum(timelineNum + 1)}
              className='rounded-full p-2 text-sky-300 hover:bg-sky-100'
            >
              Show More
            </button>
          </div>
        )}
      </div>

      {/* Task */}
      <div className='sticky top-16 flex flex-col items-center bg-gray-50 mt-4 ml-5 p-2.5 rounded-2xl min-h-fit'>
        <h2 className='text-xl font-extrabold pb-4'>{'Priority Task'}</h2>
        <div className='flex flex-col bg-white w-full'>
          {tasks.map((task, index) => (
            <div
              key={index}
              className='flex flex-row w-full justify-start items-center p-5 space-x-2 border-b-2 border-gray-200'
            >
              <PuzzleIcon width='50' height='50' color={colors[index]} />
              <div>
                <h4 className='font-bold text-xl'>{task.taskname}</h4>
                <p>{task.username}</p>

                <div className='flex flex-row space-x-2'>
                  {task.tags?.map((tag) => (
                    <button key={tag} className=' border-gray-300 border-2 rounded-full py-1 px-2 text-[12px]'>
                      #{tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-end mt-2'>
          <button className='rounded-full p-2 text-sky-300 hover:bg-sky-100'>タスクの修正</button>
        </div>
      </div>
    </div>
  );
};
