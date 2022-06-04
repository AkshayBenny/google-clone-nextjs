import Head from 'next/head';
import { useRouter } from 'next/router';
import ImageResults from '../components/ImageResults';
import Result from '../components/Result';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';

export default function Search({ data }) {
  console.log(data);
  const router = useRouter();
  const searchType = router.query.searchType;
  return (
    <div>
      <Head>
        <title>{router.query.term}</title>
        <link
          rel='icon'
          href='https://pngimg.com/uploads/google/google_PNG19635.png'
        />
      </Head>
      <SearchHeader />
      {searchType === 'image' ? (
        <ImageResults data={data} />
      ) : (
        <Result data={data} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = context.query.term;
  const mockData = true;
  const startIndex = context.query.start || '1';

  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_SEARCH_API_KEY
        }&cx=${process.env.GOOGLE_SEARCH_CX}&q=${query}&${
          context.query.searchType && 'searchType=image'
        }&start=${startIndex}`
      ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
