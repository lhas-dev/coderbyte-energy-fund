import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

export const Square = styled.View`
  width: 20px;
  height: 20px;
  border: 2px solid #e6e6e6;
  border-radius: 2px;
`;

export const CheckboxLabel = styled.Text`
  font-size: 12px;
  line-height: 15px;
  color: #a0a0a0;
  padding-right: 20px;
`;

export const CheckboxLabelHighlight = styled.Text`
  color: #000000;
`;
