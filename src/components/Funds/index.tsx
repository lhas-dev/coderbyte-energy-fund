import React from 'react';
import * as Styled from './styles';
import Wind from '../../assets/icons/wind.svg';
import Solar from '../../assets/icons/solar.svg';
import Natural from '../../assets/icons/natural.svg';
import Chart1 from '../../assets/icons/chart-2.svg';
import Chart2 from '../../assets/icons/chart-1.svg';
import Chart3 from '../../assets/icons/chart-3.svg';
import PriceUp from '../../assets/icons/price-up.svg';
import PriceDown from '../../assets/icons/price-down.svg';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

export const Funds = () => {
  const navigation =
    useNavigation<
      NativeStackScreenProps<RootStackParamList, 'Home'>['navigation']
    >();

  const rows = [
    {
      id: 1,
      title: 'Wind Fund',
      icon: <Wind />,
      chart: <Chart1 />,
      value: 1032.23,
      percentage: 3.51,
    },
    {
      id: 2,
      title: 'Solar Fund',
      icon: <Solar />,
      chart: <Chart2 />,
      value: 986.61,
      percentage: -0.13,
    },
    {
      id: 3,
      title: 'Natural Fund',
      icon: <Natural />,
      chart: <Chart3 />,
      value: 1122.95,
      percentage: 0.01,
    },
  ];

  const handleFund = () => {
    navigation.navigate('Asset');
  };
  return (
    <Styled.Wrapper>
      <Styled.Title>Funds</Styled.Title>
      <Styled.Cards horizontal>
        {rows.map(row => (
          <Styled.Row key={row.id}>
            <Styled.Card onPress={handleFund}>
              {row.icon}
              <Styled.CardTitle>{row.title}</Styled.CardTitle>
              {row.chart}
              <Styled.Row>
                <Styled.CardValue>${row.value}</Styled.CardValue>
                {row.percentage > 0 ? (
                  <Styled.CardPercentageUp>
                    <PriceUp /> {row.percentage}%
                  </Styled.CardPercentageUp>
                ) : (
                  <Styled.CardPercentageDown>
                    <PriceDown /> {row.percentage}%
                  </Styled.CardPercentageDown>
                )}
              </Styled.Row>
            </Styled.Card>
          </Styled.Row>
        ))}
      </Styled.Cards>
    </Styled.Wrapper>
  );
};
