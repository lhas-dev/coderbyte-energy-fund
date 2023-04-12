import React from 'react';
import * as Styled from './styles';

export const FAQ = () => {
  const rows = [
    {
      id: 1,
      title: 'Why should you invest here?',
    },
    {
      id: 2,
      title: 'Lorem ipsum dolor sit amet',
    },
    {
      id: 3,
      title: 'Another question',
    },
  ];
  return (
    <Styled.Wrapper horizontal>
      {rows.map(row => (
        <Styled.Row key={row.id}>
          <Styled.Title>{row.title}</Styled.Title>
        </Styled.Row>
      ))}
    </Styled.Wrapper>
  );
};
