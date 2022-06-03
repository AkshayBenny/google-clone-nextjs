import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { useState } from 'react';
// import PopUp from './PopUp';
function User() {
  //   const [showPopUp, setShowPopUp] = useState(false);
  const { data: session, status } = useSession();
  const [img, setImg] = useState('');
  useEffect(() => {
    if (session) {
      setImg(session.user.image);
    }
  }, [session?.user?.image, session]);

  if (status === 'loading') {
    return (
      <div>
        <p>...</p>
      </div>
    );
  }

  if (!session) {
    return (
      <button onClick={signIn} className='bButton'>
        Sign in
      </button>
    );
  }

  if (session) {
    return (
      <div>
        <img
          onClick={signOut}
          className='h-10 w-10 object-cover rounded-full p-1 hover:bg-gray-200'
          src={img}
          alt={session.user.name}
        />

        {/* {showPopUp && <PopUp />} */}
      </div>
    );
  }
}

export default User;
