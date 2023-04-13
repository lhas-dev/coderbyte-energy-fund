import React from 'react';
import * as Styled from './styles';
import Coin from '../../assets/icons/coin.svg';
import PriceUp from '../../assets/icons/price-up.svg';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';

export const Portfolio = () => {
  const {portfolio, variation} = useSelector((state: RootState) => state.user);
  return (
    <Styled.Wrapper>
      <Styled.Title>Portfolio</Styled.Title>
      <Styled.Row>
        <Styled.ValueBlock>
          <Styled.Value>${portfolio}</Styled.Value>
          <Styled.Percentage>
            <PriceUp /> {variation}%
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
