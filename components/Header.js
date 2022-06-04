import Link from 'next/link';
import { useRouter } from 'next/router';
import User from './User';

const Header = () => {
  const router = useRouter();
  return (
    <header className='px-4 py-4 text-gray-700 text-sm font-normal flex justify-between items-center'>
      <div className='flex gap-4'>
        <Link href='https://about.google/'>
          <a className='link'>About</a>
        </Link>
        <Link href='https://store.google.com/'>
          <a className='link'>Store</a>
        </Link>
      </div>

      <div className='flex items-center gap-4'>
        <Link href='https://mail.google.com/'>
          <a className='link'>Gmail</a>
        </Link>

        <a
          onClick={() =>
            router.push(`/search?term=${router.query.term || 'google'}&searchType=image`)
          }
          className='link'
        >
          Images
        </a>

        <div>
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
