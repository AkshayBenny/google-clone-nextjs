import Head from 'next/head';
import Footer from '../components/Footer';
import Form from '../components/Form';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className='bg-[#FFFDFE] h-screen'>
      <Head>
        <title>Google</title>
        <meta name='description' content='A google clone create my me' />
        <link
          rel='icon'
          href='https://pngimg.com/uploads/google/google_PNG19635.png'
        />
      </Head>

      <Header />
      <Form />
      <Footer />
    </div>
  );
}
