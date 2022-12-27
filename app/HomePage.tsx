'use client';
/** @jsx jsx */

import { jsx } from '@emotion/react';
import React, { useCallback, useMemo, useState } from 'react';
import { useFetchMovies } from '../api/fetchHooks';
import { ArticleCard } from '@/ui/ArticleCard';
import { MainNavbar } from './MainNavbar';
import { useFilter } from './context/FilterContext';
import { SearchField } from '@/ui/SearchField';
import { useSearch } from './context/SearchContext';
import useDebounce from 'hooks/useDebounce';
import { useRouter } from 'next/navigation';
import { Wrapper } from '@/ui/Wrapper';
import { css } from '@emotion/css';
import { NumberOfItems } from '@/ui/NumberOfItems';

const HomePage = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');
  const [filterID] = useFilter();
  const [searchTerm, setSearch] = useSearch();
  const search = useDebounce<string>(searchTerm, 300);
  const [deletedItems, setDeletedItems] = useState<string[]>([]);

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  const dataMovies = useMemo(() => {
    return data?.pages[0]
      .filter((filter: any) => {
        return filterID === '0'
          ? filter.title.toLowerCase()?.includes(search.toLowerCase())
          : filter.post_category_id === filterID &&
              filter.title.toLowerCase()?.includes(search.toLowerCase());
      })
      .filter((item: any) => !deletedItems?.includes(item.slug));
  }, [data, filterID, search, deletedItems]);

  const deletedItemsToArr = (slug: string) => {
    setDeletedItems([slug, ...deletedItems]);
  };

  if (error) return <div>Oh no something went wrong!</div>;

  const queryLink = useCallback((key: string) => {
    router.push(`/?query=${key}&filter=${filterID}`);
  }, []);

  const deleteCategoryOfItems = useCallback(
    (key: string) => {
      const deletedCategory = data?.pages[0]?.filter(
        (item: any) => item.post_category_id === key,
      );

      setDeletedItems(deletedCategory);
    },
    [deletedItems],
  );

  return (
    <div
      style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
      className={css({
        width: '100%',
        justifyContent: 'center',
        display: 'flex',
      })}
    >
      <div
        style={{
          maxWidth: '1200px',
          display: 'flex',
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <MainNavbar
          refetchItems={deletedItems}
          clearDeletedItems={setDeletedItems}
          deleteCategoryOfItems={deleteCategoryOfItems}
        />
        <Wrapper>
          <div>
            <SearchField onChange={setSearch} queryLink={queryLink} />
            <NumberOfItems numberOfItems={dataMovies?.length} />
          </div>

          {!isLoading ? (
            dataMovies?.map((item: any, index: number) => (
              <React.Fragment key={index}>
                <ArticleCard item={item} setDeletedItems={deletedItemsToArr} />
              </React.Fragment>
            ))
          ) : (
            <div className={css({ color: 'white' })}>LOADING...</div>
          )}
        </Wrapper>
      </div>
    </div>
  );
};

export default HomePage;
