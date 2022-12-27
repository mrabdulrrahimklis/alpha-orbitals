'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

const FilterContext = React.createContext<
  [string, React.Dispatch<React.SetStateAction<string>>] | undefined
>(undefined);



export function FilterProvider({ children }: { children: React.ReactNode }) {
  const searchParam = useSearchParams();
  const searchParamFilter = searchParam.get('filter');
  const [filterID, setFilterID] = searchParamFilter
    ? useState(searchParamFilter)
    : useState('0');

  return (
    <FilterContext.Provider value={[filterID, setFilterID]}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = React.useContext(FilterContext);

  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider');
  }

  return context;
}
