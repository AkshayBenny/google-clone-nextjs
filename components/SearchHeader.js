import Image from 'next/image';
import User from '../components/User';
import { SearchIcon, XIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import SearchHeaderOptions from './SearchHeaderOptions';

export default function SearchHeader() {
  const router = useRouter();
  const searchRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();
    const searchTerm = searchRef.current.value;
    if (!searchTerm.trim()) return;
    router.push(`/search?term=${searchTerm.trim()}&searchType=`);
  };
  return (
    <header className='sticky top-0 border-b-gray-200  border-b px-3'>
      <div className='flex gap-3 items-center  pt-8'>
        <Image
          onClick={() => router.push('/')}
          width='120'
          height='40'
          objectFit='cover'
          className='cursor-pointer '
          src='https://pngimg.com/uploads/google/google_PNG102344.png'
          alt='google logo'
        />
        <form className='max-w-3xl hover:shadow-md focus-within:shadow-md transition mr-auto  flex py-2   items-center rounded-full w-full border  justify-between'>
          <input
            type='text'
            className='transition w-full pl-6 group bg-[#fffdfe] outline-none focus:outline-none'
            defaultValue={router.query.term}
            ref={searchRef}
          />
          <XIcon
            onClick={() => (searchRef.current.value = null)}
            className='text-gray-400 h-8 pr-4 cursor-pointer'
          />

          <button onClick={searchHandler} type='submit'>
            <SearchIcon className='border-l-2 pl-4 text-blue-400 h-6 pr-4 cursor-pointer' />
          </button>
        </form>
        <div className='ml-auto min-w-max cursor-pointer flex justify-center items-center'>
          <User />
        </div>
      </div>
      <div className='pt-8 flex justify-start'>
        <SearchHeaderOptions />
      </div>
    </header>
  );
}
