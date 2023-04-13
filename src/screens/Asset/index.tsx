import React from 'react';
import {Header} from '../../components/Header';
import * as Styled from './styles';
import BigChart from '../../assets/icons/big-chart.svg';
import {AssetValue} from '../../components/AssetValue';
import {Periods} from '../../components/Periods';
import {InfoStats} from '../../components/InfoStats';
import {FundBreakdown} from '../../components/FundBreakdown';

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
      </Styled.ScrollArea>
    </Styled.Wrapper>
  );
};
