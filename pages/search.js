import Head from 'next/head';
import SearchHeader from '../components/SearchHeader';
import Response from '../Response';

export default function search({ data }) {
  console.log(data);
  return (
    <div>
      <Head>
        <title>Search Page</title>
      </Head>
      <SearchHeader />
    </div>
  );
}

export async function getServerSideProps(context) {
  const query = context.query.term;
  const mockData = true;

  const data = mockData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${
          process.env.GOOGLE_SEARCH_API_KEY
        }&cx=${process.env.GOOGLE_SEARCH_CX}&q=${query}${
          context.query.searchType && 'searchType=image'
        }`
      ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}
