import React from 'react';

const SearchContext = React.createContext();

const SearchContextProvider = ({ children }) => {
  const [searchResult, setSearchResult] = React.useState([]);
  const [searchQueryResult, setSearchQueryResult] = React.useState([]);
  const value = React.useMemo(
    () => ({
      searchResult,
      setSearchResult,
      searchQueryResult,
      setSearchQueryResult,
    }),
    [searchQueryResult, searchResult]
  );

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

const useSearchContext = () => {
  const context = React.useContext(SearchContext);
  if (context === 'undefined') {
    throw new Error(
      'useSearchContext must be use in a SearchContextProvider component'
    );
  }
  return context;
};

export { useSearchContext, SearchContextProvider };
