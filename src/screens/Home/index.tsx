import React from 'react';
import * as Styled from './styles';
import Person from '../../assets/icons/person.svg';
import Alert from '../../assets/icons/alert.svg';
import CaretDown from '../../assets/icons/caret-down.svg';
import {Portfolio} from '../../components/Portfolio';
import {Funds} from '../../components/Funds';

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
        <Portfolio />
        <Styled.Divider />
        <Funds />
      </Styled.ScrollArea>
    </Styled.Wrapper>
  );
};
