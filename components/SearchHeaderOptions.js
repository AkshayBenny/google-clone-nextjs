import SearchHeaderOption from './SearchHeaderOption';
import { SearchIcon, PhotographIcon } from '@heroicons/react/solid';
import { useRouter } from 'next/router';
export default function SearchHeaderOptions() {
  const router = useRouter();
  return (
    <div className='ml-28 lg:ml-36 flex space-x-5'>
      <div>
        <SearchHeaderOption
          title={'All'}
          Icon={SearchIcon}
          selected={router.query.searchType === '' || !router.query.searchType}
        />
      </div>
      <div>
        <SearchHeaderOption
          title={'Images'}
          Icon={PhotographIcon}
          selected={router.query.searchType === 'image'}
        />
      </div>
    </div>
  );
}
