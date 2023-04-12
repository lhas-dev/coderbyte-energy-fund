import React from 'react';
import {Text} from 'react-native';
import * as Styled from './styles';
import Coin from '../../assets/icons/coin.svg';
import PriceUp from '../../assets/icons/price-up.svg';

export const Portfolio = () => {
  return (
    <Styled.Wrapper>
      <Styled.Title>Portfolio</Styled.Title>
      <Styled.Row>
        <Styled.ValueBlock>
          <Styled.Value>$1,245.23</Styled.Value>
          <Styled.Percentage>
            <PriceUp /> 31.82%
          </Styled.Percentage>
        </Styled.ValueBlock>
        <Styled.Button>
          <Coin />
          <Styled.ButtonText>Earn Rewards</Styled.ButtonText>
        </Styled.Button>
      </Styled.Row>
    </Styled.Wrapper>
  );
};
