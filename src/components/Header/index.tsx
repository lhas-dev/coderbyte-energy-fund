import React from 'react';
import ArrowBack from '../../assets/icons/arrow-back.svg';
import * as Styled from './styles';
import {useNavigation} from '@react-navigation/native';
import {ViewProps} from 'react-native';

interface HeaderProps extends ViewProps {
  back?: boolean;
}
export const Header = ({back = false, ...props}: HeaderProps) => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };
  return (
    <Styled.Wrapper {...props}>
      {back && (
        <Styled.Button onPress={handleBack}>
          <ArrowBack />
        </Styled.Button>
      )}
      <Styled.Divider />
    </Styled.Wrapper>
  );
};
