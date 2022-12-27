'use client';

import '@/styles/globals.css';
import React from 'react';
import styled from '@emotion/styled';
import ReactQueryWrapper from './ReactQueryWrapper';

const BackgroundContainer = styled.div`
  margin: 0;
  display: flex;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(
        145deg,
        rgba(24, 36, 38, 0.2) 25%,
        transparent 25%
      ) -58px 0/ 166px 166px,
    linear-gradient(225deg, rgba(24, 36, 38, 0.2) 25%, transparent 25%) -58px 0/
      166px 166px,
    linear-gradient(315deg, rgba(24, 36, 38, 0.2) 25%, transparent 25%) 0 0/ 166px
      166px,
    linear-gradient(45deg, rgba(24, 36, 38, 0.2) 25%, #050808 25%) 0 0/ 166px 166px;
  background-color: #050808;
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Alpha Orbitals</title>
      </head>
      <body>
        <BackgroundContainer>
          <ReactQueryWrapper>{children}</ReactQueryWrapper>
        </BackgroundContainer>
      </body>
    </html>
  );
}
