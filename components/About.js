import React from 'react';

export default function About({ time, results }) {
  console.log(time, results);
  return (
    <div>
      <p className='font-normal  italic text-gray-500  mt-4'>
        About {results} results ({time} seconds)
      </p>
    </div>
  );
}
