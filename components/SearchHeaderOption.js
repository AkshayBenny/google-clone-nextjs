import { useRouter } from 'next/router';

export default function SearchHeaderOption({ title, selected, Icon }) {
  const router = useRouter();

  const selectTab = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === 'Images' ? 'image' : ''
      }`
    );
  };
  return (
    <div
      onClick={() => selectTab(title)}
      className={`${
        selected
          ? 'border-b-blue-400 border-b-4 text-blue-500'
          : 'text-gray-500'
      }  flex group transition space-x-2 cursor-pointer pb-2 items-center  hover:border-b-blue-400`}
    >
      <Icon className='h-5   group-hover:text-blue-500' />
      <p className="className='font-bold   group-hover:text-blue-500 select-none">
        {title}
      </p>
    </div>
  );
}
