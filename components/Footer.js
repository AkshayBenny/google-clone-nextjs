const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='absolute bottom-3 select-none left-0 right-0 text-gray-600 text-sm flex'>
      <p className='mx-auto'>Copyright &copy; {year} Akshay Benny</p>
    </footer>
  );
};

export default Footer;
