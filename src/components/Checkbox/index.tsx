import React, {ReactNode} from 'react';
import * as Styled from './styles';

interface CheckboxProps {
  label: ReactNode;
}
export const Checkbox = ({label}: CheckboxProps) => {
  return (
    <Styled.Wrapper>
      <Styled.Square />
      {label}
    </Styled.Wrapper>
  );
};

const CheckboxLabel = Styled.CheckboxLabel;
const CheckboxLabelHighlight = Styled.CheckboxLabelHighlight;

export {CheckboxLabel, CheckboxLabelHighlight};
