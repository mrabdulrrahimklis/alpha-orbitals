'use client';

import React, { useCallback, useMemo, useState } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/css';
import Image from 'next/image';
import Link from 'next/link';

const style = css({
  color: 'white',
  padding: 0,
  background: 'red',
  p: { color: 'red' },
});

const DeleteButton = styled.button`
  background: red;
  color: white;
  height: 30px;
  border: 0;
  border-radius: 5px;
  opacity: 0;
`;

const Card = styled.div`
  background-color: #000;
  padding: 30px;
  color: #fff;
  border-radius: 10px;
  margin: 15px 0;

  &:hover {
    box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    ${DeleteButton} {
      opacity: 1;
    }
  }
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CardContent = styled.div`
  width: 50%;
`;

type TypographyProps = {
  primary?: string;
  fontSize?: string;
  margin?: string;
};

const Typography = styled.p<TypographyProps>`
  color: ${(props) => (props.primary ? props.primary : ' #7f7878')};
  font-size: ${(props) => (props.fontSize ? props.fontSize : '16px')};
  margin: ${(props) => (props.margin ? props.margin : '0px')};
`;

const CardAction = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;

const CardButton = styled.button`
  color: #3173b5;
  border-bottom: 2px solid transparent;
  background: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  &:hover {
    border-bottom: 2px solid #3173b5;
  }
`;

export const ArticleCard = ({ item, setDeletedItems }: any) => {
  return (
    <Card>
      <CardBody>
        <CardContent>
          <Link
            style={{ textDecoration: 'none' }}
            href={`https://www.alpha-orbital.com/news/${item.slug}`}
            target="_blank"
          >
            <img
              src={`https://www.alpha-orbital.com/assets/images/post_img/${item.post_thumbnail}`}
              alt="No images"
              width={100}
              height={100}
            />
          </Link>
        </CardContent>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <Link
                style={{ textDecoration: 'none' }}
                href={`https://www.alpha-orbital.com/news/${item.slug}`}
                target="_blank"
              >
                <Typography fontSize="30px" primary="white">
                  {item.title}
                </Typography>
              </Link>
              <Typography margin="12px 0px">
                {Intl.DateTimeFormat('en-US').format(new Date(item.date))}
              </Typography>
            </div>
            <div>
              <DeleteButton onClick={() => setDeletedItems(item.slug)}>
                X
              </DeleteButton>
            </div>
          </div>
          <Typography primary="white" fontSize="20px">
            <span dangerouslySetInnerHTML={{ __html: item.excerpt }}></span>
          </Typography>
        </CardContent>
      </CardBody>
      <CardAction>
        <Link
          href={`https://www.alpha-orbital.com/news/${item.slug}`}
          target="_blank"
        >
          <CardButton>Full article</CardButton>
        </Link>
      </CardAction>
    </Card>
  );
};
