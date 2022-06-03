import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

const signin = ({ providers }) => {
  console.log(providers);
  return (
    <div className='bg-[#FFFDFE]'>
      <Header />
      {Object.values(providers).map((provider, index) => {
        console.log(provider);
        return (
          <div key={index} className='flex flex-col'>
            <img
              className='w-50 bg-gray-400 h-96 mx-auto rounded-full object-cover'
              src='https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg'
              alt='google logo'
            />
            <div className='mx-auto  flex flex-col justify-center items-center'>
              <p className='mx-auto'>Cloned with ❤️ by Akshay Benny</p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                className='bButton mx-auto mt-4'
              >
                Sign In with {provider.name}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default signin;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}
