'use client';
import styled from '@emotion/styled';
import { useSearch } from 'app/context/SearchContext';
import React from 'react';

const StyledInput = styled.input`
  height: 30px;
  color: black;
  font-size: 16px;
  width: 100%;
  margin: 0;
  padding: 0 10px;
  border-radius: 5px 0px 0px 5px;
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }
`;

const StyledSubmitButton = styled.button`
  height: 34px;
  background: #3173b5;
  padding: 0px 50px;
  border: 0;
  font-size: 16px;
  color: white;
  border-radius: 0px 5px 5px 0px;
`;

export const SearchField = ({ onChange, queryLink }: any) => {
  const [search] = useSearch();

  return (
    <div style={{ display: 'flex', minWidth: '1200px' }}>
      <StyledInput
        defaultValue={search}
        placeholder="Search article title"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          onChange(e.target.value);
          queryLink(e.target.value);
        }}
      />
      <StyledSubmitButton>Search</StyledSubmitButton>
    </div>
  );
};
