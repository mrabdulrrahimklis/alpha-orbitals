'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const SearchContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const searchParam = useSearchParams();
  const searchParamQuery = searchParam.get('query');
  const [search, setSearch] = searchParamQuery
    ? useState(searchParamQuery)
    : useState('');

  return (
    <SearchContext.Provider value={[search, setSearch]}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = React.useContext(SearchContext);

  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider');
  }

  return context;
}
