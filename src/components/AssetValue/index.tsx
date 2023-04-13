import React from 'react';
import * as Styled from './styles';
import PriceUp from '../../assets/icons/price-up.svg';

interface AssetValueProps {
  value: number;
  year: number;
  variation: number;
}
export const AssetValue = ({value, year, variation}: AssetValueProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Row>
        <Styled.Value>{value}</Styled.Value>
        <Styled.Year>{year}</Styled.Year>
      </Styled.Row>
      <Styled.Percentage>
        <PriceUp /> {variation}%
      </Styled.Percentage>
    </Styled.Wrapper>
  );
};
