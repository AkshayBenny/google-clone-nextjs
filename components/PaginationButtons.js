import Link from 'next/link';
import { useRouter } from 'next/router';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;
  return (
    <div className='cursor-pointer space-x-24 flex justify-center items-center'>
      {startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className='group cursor-pointer flex justify-center items-center'>
            <ChevronLeftIcon className='h-8 text-blue-500 group group-hover:text-blue-700' />
            <p className='h-6 text-blue-500 group group-hover:text-blue-700'>
              Previous
            </p>
          </div>
        </Link>
      )}
      {startIndex < 90 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className='group cursor-pointer flex justify-center items-center'>
            <p className='h-6 text-blue-500 group group-hover:text-blue-700'>
              Next
            </p>
            <ChevronRightIcon className='h-8 text-blue-500 group group-hover:text-blue-700' />
          </div>
        </Link>
      )}
    </div>
  );
}
