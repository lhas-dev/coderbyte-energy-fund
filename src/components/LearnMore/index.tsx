import React from 'react';
import BusinessStatistics from '../../assets/icons/business-statistics.svg';
import * as Styled from './styles';

export const LearnMore = () => {
  return (
    <Styled.Wrapper>
      <Styled.Row>
        <Styled.Title>Learn more about carbon credits</Styled.Title>
        <Styled.Subtitle>Check out our top tips!</Styled.Subtitle>
      </Styled.Row>
      <BusinessStatistics />
    </Styled.Wrapper>
  );
};
