import React from 'react';
import * as Styled from './styles';

interface PrimaryButtonProps {
  label: string;
  onPress: () => void;
}
export const PrimaryButton = ({label, onPress}: PrimaryButtonProps) => {
  return (
    <Styled.Wrapper onPress={onPress}>
      <Styled.Label>{label}</Styled.Label>
    </Styled.Wrapper>
  );
};
