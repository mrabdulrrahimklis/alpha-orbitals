import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { NavbarItemProps } from 'types/Navbar.interface';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background: transparent;
  height: 70px;
  width: 100%;
  max-width: 1200px;
`;

export const NavbarItem = styled.a<NavbarItemProps>`
  color: #fff;
  margin: 0 20px;
  border-bottom: 2px solid transparent;
  &:hover {
    color: #3173b5;
    border-bottom: 2px solid #3173b5;
  }
  ${(props: any) =>
    props.isActive &&
    css`
      color: #3173b5;
      border-bottom: 2px solid #3173b5;
    `}
`;
