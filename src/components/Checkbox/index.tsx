import React, {ReactNode} from 'react';
import * as Styled from './styles';

interface CheckboxProps {
  label: ReactNode;
  checked?: boolean;
  onChecked: () => void;
}
export const Checkbox = ({
  label,
  checked = false,
  onChecked,
}: CheckboxProps) => {
  return (
    <Styled.Wrapper onPress={onChecked}>
      {!checked ? <Styled.Square /> : <Styled.SquareFilled />}
      {label}
    </Styled.Wrapper>
  );
};

const CheckboxLabel = Styled.CheckboxLabel;
const CheckboxLabelHighlight = Styled.CheckboxLabelHighlight;

export {CheckboxLabel, CheckboxLabelHighlight};
