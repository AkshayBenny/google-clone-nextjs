import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function ImageResults({ data }) {
 
  return (
    <>
      <div className='grid grid-cols-1 pb-6 px-4 space-x-2 space-y-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {data.items?.map((item, index) => {
          return (
            <a
              key={index}
              className='group cursor-pointer px-2 py-1   transition'
              href={item.image.contextLink}
            >
              <img
                className='w-full group-hover:shadow-sm mb-2 h-60 object-contain'
                src={item.link}
                alt={item.title}
              />
              <h2 className='text-xl text-gray-800 truncate font-normal group-hover:underline transition'>
                {item.title}
              </h2>
              <p className='text-gray-500 group-hover:underline truncate transition'>
                {item.displayLink}
              </p>
            </a>
          );
        })}
      </div>
      <PaginationButtons />
    </>
  );
}
