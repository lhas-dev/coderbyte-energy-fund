import React, {ReactNode} from 'react';
import * as Styled from './styles';

interface CheckboxProps {
  label: ReactNode;
  checked?: boolean;
  error?: string;
  onChecked: () => void;
}
export const Checkbox = ({
  label,
  checked = false,
  error = '',
  onChecked,
}: CheckboxProps) => {
  return (
    <>
      <Styled.Wrapper onPress={onChecked}>
        {!checked ? <Styled.Square /> : <Styled.SquareFilled />}
        {label}
      </Styled.Wrapper>
      {!!error && <Styled.Error>{error}</Styled.Error>}
    </>
  );
};

const CheckboxLabel = Styled.CheckboxLabel;
const CheckboxLabelHighlight = Styled.CheckboxLabelHighlight;

export {CheckboxLabel, CheckboxLabelHighlight};
