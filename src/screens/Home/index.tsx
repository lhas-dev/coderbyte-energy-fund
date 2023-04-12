import React from 'react';
import {Text} from 'react-native';
import * as Styled from './styles';
import Person from '../../assets/icons/person.svg';
import Alert from '../../assets/icons/alert.svg';
import CaretDown from '../../assets/icons/caret-down.svg';

export const HomeScreen = () => {
  return (
    <Styled.Wrapper>
      <Styled.ScrollArea>
        <Styled.Header>
          <Styled.ProfileButton>
            <Person />
          </Styled.ProfileButton>
          <Styled.HeaderText>
            Account: $1,457.23 <CaretDown />
          </Styled.HeaderText>
          <Styled.AlertButton>
            <Alert />
          </Styled.AlertButton>
        </Styled.Header>
      </Styled.ScrollArea>
    </Styled.Wrapper>
  );
};
