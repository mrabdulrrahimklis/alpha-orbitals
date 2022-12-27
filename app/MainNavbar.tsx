'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useFilter } from './context/FilterContext';
import { useRouter, useSearchParams } from 'next/navigation';
import { useSearch } from 'app/context/SearchContext';
import { Navbar, NavbarItem } from '@/ui/Navbar';
import { ButtonCategoryDelete, RefetchButton, ToggleButton } from '@/ui/Button';

const filters: { [key: string]: string } = {
  1: 'X Universe',
  2: 'Elite: Dangerous',
  3: 'Starpoint Gemini',
  4: 'EVE Online',
};

export const MainNavbar = ({
  clearDeletedItems,
  refetchItems,
  deleteCategoryOfItems,
}: any) => {
  const router = useRouter();
  const [filterID, setFilterID] = useFilter();
  const [search, setSearch] = useSearch();
  const [toggle, setToggle] = useState(false);

  const queryLink = useCallback((key: string, test: string) => {
    router.push(`/?query=${test}&filter=${key}`);
  }, []);

  const searchParam = useSearchParams();
  const searchParamQuery = searchParam.get('query') ?? '';
  return (
    <>
      <Navbar>
        <div
          style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
        >
          {Object.keys(filters).map((key, index) => (
            <NavbarItem
              isActive={key === filterID}
              key={index}
              onClick={() => {
                setFilterID(key);
                setSearch(searchParamQuery);
                queryLink(key, searchParamQuery);
              }}
            >
              {filters[key]}
            </NavbarItem>
          ))}
          <NavbarItem
            isActive={'0' === filterID}
            onClick={() => {
              setFilterID('0');
              setSearch(searchParamQuery);
              queryLink('0', searchParamQuery);
            }}
          >
            ShowAll
          </NavbarItem>
          {refetchItems?.length > 0 && (
            <RefetchButton onClick={() => clearDeletedItems([])}>
              Refetch
            </RefetchButton>
          )}
        </div>

        <ToggleButton onClick={() => setToggle(!toggle)}>Toggle</ToggleButton>
      </Navbar>
      {toggle && (
        <div
          onClick={() => setToggle(!toggle)}
          style={{
            margin: '70px 0px -80px 0px',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            width: '100%',
            maxWidth: '1200px',
            borderRadius: '5px',
          }}
        >
          <div>
            {Object.keys(filters).map((key, index) => (
              <div
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: 'black',
                  padding: '0px 10px',
                  background: 'white',
                }}
              >
                <p style={{ marginRight: '20px' }}>{filters[key]}</p>
                <div>
                  <ButtonCategoryDelete
                    onClick={() => deleteCategoryOfItems(key)}
                  >
                    x
                  </ButtonCategoryDelete>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
