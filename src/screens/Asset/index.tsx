import React from 'react';
import {Header} from '../../components/Header';
import * as Styled from './styles';
import BigChart from '../../assets/icons/big-chart.svg';
import {AssetValue} from '../../components/AssetValue';
import {Periods} from '../../components/Periods';
import {InfoStats} from '../../components/InfoStats';
import {FundBreakdown} from '../../components/FundBreakdown';
import {PrimaryButton} from '../../components/PrimaryButton';

export const AssetScreen = () => {
  return (
    <Styled.Wrapper>
      <Styled.ScrollArea>
        <Header back>
          <Styled.AssetDetails>
            <Styled.AssetTitle>Wind Fund</Styled.AssetTitle>
            <Styled.AssetTicker>WFND</Styled.AssetTicker>
          </Styled.AssetDetails>
        </Header>
        <AssetValue />
        <Styled.BiggestPrice>$19.02</Styled.BiggestPrice>
        <BigChart />
        <Styled.LowestPrice>$17.66</Styled.LowestPrice>
        <Periods />
        <InfoStats />
        <FundBreakdown />
        <Styled.Warning>
          <Styled.WarningText>
            Please note that prices are for reference only and may vary at the
            time of excecuting a buy or sell order.
          </Styled.WarningText>
          <Styled.WarningText>
            The information provided is not investment advice, and should not be
            used as a recommendation to buy or sell assets.
          </Styled.WarningText>
        </Styled.Warning>
        <Styled.Buy>
          <PrimaryButton label="Buy" onPress={() => {}} />
        </Styled.Buy>
      </Styled.ScrollArea>
    </Styled.Wrapper>
  );
};
