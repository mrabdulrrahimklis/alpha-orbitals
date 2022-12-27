'use client';
import styled from '@emotion/styled';
import React from 'react';

const StyledInput = styled.input`
  height: 30px;
  color: black;
  font-size: 16px;
  width: 100%;
  margin: 0;
  padding: 0 10px;
  border-radius: 5px 0px 0px 5px;
  border: 0;
  &:active {
    outline: none;
  }
  &:focus-visible {
    outline: none;
  }
`;

const StyledSubmitButton = styled.button`
  height: 30px;
  background: #3173b5;
  padding: 0px 50px;
  border: 0;
  font-size: 16px;
  color: white;
  border-radius: 0px 5px 5px 0px;
`;

export const SearchInput = () => {
  return (
    <div style={{ display: 'flex' }}>
      <StyledInput placeholder="Search article title" />
      <StyledSubmitButton>Search</StyledSubmitButton>
    </div>
  );
};
