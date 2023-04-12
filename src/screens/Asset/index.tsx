import React from 'react';
import {Header} from '../../components/Header';
import * as Styled from './styles';
import BigChart from '../../assets/icons/big-chart.svg';

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
        <BigChart />
      </Styled.ScrollArea>
    </Styled.Wrapper>
  );
};
