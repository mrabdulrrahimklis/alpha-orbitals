import { css } from '@emotion/css';
import { FC } from 'react';

export interface NumberOfItemsProps {
  numberOfItems: string;
}

export const NumberOfItems: FC<NumberOfItemsProps> = ({ numberOfItems }) => {
  return numberOfItems ? (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'flex-end',
        color: 'white',
      })}
    >
      <p>
        Currently show
        <span
          className={css({
            color: 'red',
            marginLeft: '5px',
            marginRight: '5px',
          })}
        >
          {numberOfItems}
        </span>
        articles
      </p>
    </div>
  ) : (
    <></>
  );
};
