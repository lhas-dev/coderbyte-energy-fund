import React from 'react';
import * as Styled from './styles';
import Person from '../../assets/icons/person.svg';
import Alert from '../../assets/icons/alert.svg';
import CaretDown from '../../assets/icons/caret-down.svg';
import {Portfolio} from '../../components/Portfolio';
import {Funds} from '../../components/Funds';
import {LearnMore} from '../../components/LearnMore';
import {FAQ} from '../../components/FAQ';
import {RootState} from '../../store';
import {useSelector} from 'react-redux';

export const HomeScreen = () => {
  const {balance, portfolio, variation} = useSelector(
    (state: RootState) => state.user,
  );
  return (
    <Styled.Wrapper>
      <Styled.ScrollArea>
        <Styled.Header>
          <Styled.ProfileButton>
            <Person />
          </Styled.ProfileButton>
          <Styled.HeaderText>
            Account: ${balance} <CaretDown />
          </Styled.HeaderText>
          <Styled.AlertButton>
            <Alert />
          </Styled.AlertButton>
        </Styled.Header>
        <Portfolio />
        <Styled.Divider />
        <Funds />
        <LearnMore />
        <FAQ />
      </Styled.ScrollArea>
    </Styled.Wrapper>
  );
};
