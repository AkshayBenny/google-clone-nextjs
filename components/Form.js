import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/solid';
function Form() {
  return (
    <form className="flex flex-col mt-40 xl:mt-52 justify-center ">
      <div className='flex justify-center items-center'>
        <Image
          width='300'
          height='100'
          objectFit='cover'
          className='object-cover mx-auto'
          src='https://pngimg.com/uploads/google/google_PNG102344.png'
          alt='google logo'
        />
      </div>
      <div className='hover:shadow-md focus-within:shadow-md transition max-w-md mt-4 flex py-2 xl:py-3 xl:max-w-xl mx-auto items-center rounded-full w-full border  justify-between'>
        <SearchIcon className='text-gray-400 h-6 pl-4 group' />
        <input
          type='text'
          className='transition w-full pl-4 group bg-[#fffdfe] outline-none focus:outline-none  '
        />
      </div>
      <div className='flex gap-4 justify-center mt-8'>
        <button className='gButton'>Google Search</button>
        <button className='gButton'>Im feeling lucky</button>
      </div>
    </form>
  );
}

export default Form;
//h-72 md:h-80 xl:h-96
