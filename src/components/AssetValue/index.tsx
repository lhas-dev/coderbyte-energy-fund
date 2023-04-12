import React from 'react';
import * as Styled from './styles';
import PriceUp from '../../assets/icons/price-up.svg';

export const AssetValue = () => {
  return (
    <Styled.Wrapper>
      <Styled.Row>
        <Styled.Value>$18.23</Styled.Value>
        <Styled.Year>2022</Styled.Year>
      </Styled.Row>
      <Styled.Percentage>
        <PriceUp /> 3.51% ($1.21)
      </Styled.Percentage>
    </Styled.Wrapper>
  );
};
