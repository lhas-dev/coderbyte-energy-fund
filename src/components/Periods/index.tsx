import React, {useState} from 'react';
import * as Styled from './styles';

export const Periods = () => {
  const rows = [
    {
      id: 1,
      label: '1h',
    },
    {
      id: 2,
      label: '1d',
    },
    {
      id: 3,
      label: '1w',
    },
    {
      id: 4,
      label: '1m',
    },
    {
      id: 5,
      label: '1y',
    },
    {
      id: 6,
      label: 'All',
    },
  ];
  const [active, setActive] = useState(rows[0].id);

  return (
    <Styled.Wrapper>
      {rows.map(row => (
        <Styled.Row onPress={() => setActive(row.id)} key={row.id}>
          <Styled.Value active={active === row.id}>{row.label}</Styled.Value>
        </Styled.Row>
      ))}
    </Styled.Wrapper>
  );
};
