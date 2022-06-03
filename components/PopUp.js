import { useSession, signIn, signOut } from 'next-auth/react';

const PopUp = () => {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <div>loading...</div>;
  }

  if (session) {
    return (
      <div className='px-12 py-6 border rounded absolute right-4 top-16'>
        <div>
          <img src={session.user.image} alt='' />
          <p>{session.user.name}</p>
        </div>
        <button onClick={signOut} className='bButton'>
          Sign out
        </button>
      </div>
    );
  }
};

export default PopUp;
