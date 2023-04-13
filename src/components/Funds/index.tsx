import React, {ReactNode} from 'react';
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
import {useSelector} from 'react-redux';
import {RootState} from '../../store';

export const Funds = () => {
  const icons: {[key: string]: ReactNode} = {
    wind: <Wind />,
    solar: <Solar />,
    natural: <Natural />,
  };
  const rows = useSelector((state: RootState) => state.funds);
  const navigation =
    useNavigation<
      NativeStackScreenProps<RootStackParamList, 'Home'>['navigation']
    >();

  const handleFund = () => {
    navigation.navigate('Asset');
  };

  const getChart = (variation: number) => {
    if (variation > 3) {
      return <Chart1 />;
    } else if (variation > 0 && variation < 3) {
      return <Chart3 />;
    } else if (variation < 0) {
      return <Chart2 />;
    }
  };
  return (
    <Styled.Wrapper>
      <Styled.Title>Funds</Styled.Title>
      <Styled.Cards horizontal>
        {rows.map(row => (
          <Styled.Row key={row.title}>
            <Styled.Card onPress={handleFund}>
              {icons[row.type]}
              <Styled.CardTitle>{row.title}</Styled.CardTitle>
              {getChart(row.variation)}
              <Styled.Row>
                <Styled.CardValue>${row.value}</Styled.CardValue>
                {row.variation > 0 ? (
                  <Styled.CardPercentageUp>
                    <PriceUp /> {row.variation}%
                  </Styled.CardPercentageUp>
                ) : (
                  <Styled.CardPercentageDown>
                    <PriceDown /> {row.variation}%
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
