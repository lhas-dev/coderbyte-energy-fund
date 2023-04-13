import React from 'react';
import {Header} from '../../components/Header';
import * as Styled from './styles';
import BigChart from '../../assets/icons/big-chart.svg';
import {AssetValue} from '../../components/AssetValue';
import {Periods} from '../../components/Periods';
import {InfoStats} from '../../components/InfoStats';
import {FundBreakdown} from '../../components/FundBreakdown';
import {PrimaryButton} from '../../components/PrimaryButton';
import {YourPortfolio} from '../../components/YourPortfolio';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type AssetScreenProps = NativeStackScreenProps<RootStackParamList, 'Asset'>;
export const AssetScreen = (props: AssetScreenProps) => {
  const {title, ticker, price, variation, biggest, lowest} = props.route.params;
  return (
    <Styled.Wrapper>
      <Styled.ScrollArea>
        <Header back>
          <Styled.AssetDetails>
            <Styled.AssetTitle>{title}</Styled.AssetTitle>
            <Styled.AssetTicker>{ticker}</Styled.AssetTicker>
          </Styled.AssetDetails>
        </Header>
        <AssetValue value={price} year={2023} variation={variation} />
        <Styled.BiggestPrice>${biggest}</Styled.BiggestPrice>
        <BigChart />
        <Styled.LowestPrice>${lowest}</Styled.LowestPrice>
        <Periods />
        <InfoStats />
        <FundBreakdown />
        <YourPortfolio />
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
