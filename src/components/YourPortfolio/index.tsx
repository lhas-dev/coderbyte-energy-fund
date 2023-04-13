import React from 'react';
import * as Styled from './styles';
import PriceUp from '../../assets/icons/price-up.svg';

export const YourPortfolio = () => {
  return (
    <Styled.Wrapper>
      <Styled.Credits>
        <Styled.CreditsRow>
          <Styled.CreditsRowTotal>18 credits</Styled.CreditsRowTotal>
          <Styled.CreditsRowValue>$328.14</Styled.CreditsRowValue>
        </Styled.CreditsRow>
        <Styled.CreditsRow>
          <Styled.CreditsPercentage>
            <PriceUp /> 8.41%
          </Styled.CreditsPercentage>
          <Styled.CreditsLastPurchase>
            Last purchase 28d ago
          </Styled.CreditsLastPurchase>
        </Styled.CreditsRow>
      </Styled.Credits>
      <Styled.Buttons>
        <Styled.SellButton>
          <Styled.SellButtonText>Sell</Styled.SellButtonText>
        </Styled.SellButton>
        <Styled.RetireCreditsButton>
          <Styled.RetireCreditsButtonText>
            Retire credits
          </Styled.RetireCreditsButtonText>
        </Styled.RetireCreditsButton>
      </Styled.Buttons>
      <Styled.PreviouslyRetired>
        You’ve previously retired 28 credits of this asset
      </Styled.PreviouslyRetired>
    </Styled.Wrapper>
  );
};
