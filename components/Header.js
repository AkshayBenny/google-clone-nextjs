import User from './User';

const Header = () => {
  return (
    <header className='px-4 py-4 text-gray-700 text-sm font-normal flex justify-between items-center'>
      <div className='flex gap-4'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>

      <div className='flex items-center gap-4'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <div>
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;
