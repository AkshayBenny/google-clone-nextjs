import React from 'react';
import About from './About';
import Parser from 'html-react-parser';

export default function Result({ data }) {
  const searchTime = data.searchInformation.formattedSearchTime;
  const searchResults = data.searchInformation.formattedTotalResults;
  return (
    <div className='ml-6 sm:ml-8 md:ml-12 lg:ml-24 xl:ml-36'>
      <About time={searchTime} results={searchResults} />
      {data.items.map((item, index) => {
        return (
          <div key={index} className='group py-6'>
           <a href={item.link}> <a
              href={item.link}
              className='text-black truncate text-sm font-normal cursor-pointer'
            >
              {item.formattedUrl}
            </a>
            <h2 className='font-medium truncate cursor-pointer transition text-blue-700 group-hover:underline text-2xl group'>
              {item.title}
            </h2>
            <p className='text-gray-600 text-sm'>{Parser(item.htmlSnippet)}</p></a>
          </div>
        );
      })}
    </div>
  );
}
