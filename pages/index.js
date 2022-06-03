import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='bg-[#FFFDFE]'>
      <Head>
        <title>Google</title>
        <meta name='description' content='A google clone create my me' />
      </Head>

      <Header />
    </div>
  );
}
