import React from 'react';
import * as Styled from './styles';
import Info from '../../assets/icons/info.svg';

export const InfoStats = () => {
  const rows = [
    {
      label: 'AUM',
      value: '$430.88m',
    },
    {
      label: 'Issue Date',
      value: '18/04/2022',
    },
    {
      label: 'Vintage Range',
      value: '2019 - 2022',
    },
    {
      label: 'TER',
      value: '0.15%',
    },
    {
      label: 'Price at Close',
      value: '$17.68',
    },
    {
      label: 'Price at Open',
      value: '$17.74',
    },
  ];
  return (
    <Styled.Wrapper>
      <Styled.Title>Info & Stats</Styled.Title>
      {rows.map(row => (
        <Styled.Row key={row.label} id={row.label}>
          <Styled.RowLabel>
            {row.label} <Info />
          </Styled.RowLabel>
          <Styled.RowValue>{row.value}</Styled.RowValue>
        </Styled.Row>
      ))}
    </Styled.Wrapper>
  );
};
