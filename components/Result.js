import React from 'react';
import About from './About';

export default function Result({ data }) {
  const searchTime = data.searchInformation.formattedSearchTime;
  const searchResults = data.searchInformation.formattedTotalResults;
  return (
    <div>
      <About time={searchTime} results={searchResults} />
    </div>
  );
}
