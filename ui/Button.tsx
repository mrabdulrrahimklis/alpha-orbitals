import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Button = styled.button`
  border: 0;
  padding: 7px 10px;
  border-radius: 2px;
`;

export const RefetchButton = styled(Button)`
  background-color: #123321;
  color: green;
`;

export const ToggleButton = styled(Button)`
  background-color: gray;
  color: 'purple';
`;

export const ButtonCategoryDelete = styled(Button)`
  color: red;
  margin-top: 10px;
  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
  }
`;
