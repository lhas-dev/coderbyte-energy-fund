import React from 'react';
import ArrowBack from '../../assets/icons/arrow-back.svg';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {View, ViewProps} from 'react-native';

interface HeaderProps extends ViewProps {
  back?: boolean;
}
export const Header = ({back = false, children, ...props}: HeaderProps) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Styled.Wrapper {...props}>
      <Styled.Row>
        {back && (
          <Styled.Button onPress={handleBack}>
            <ArrowBack />
          </Styled.Button>
        )}
        {children}
        <View />
      </Styled.Row>
      <Styled.Divider />
    </Styled.Wrapper>
  );
};
