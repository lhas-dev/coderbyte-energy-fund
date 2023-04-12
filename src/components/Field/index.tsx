import styled from 'styled-components/native';

export const Block = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Label = styled.Text`
  font-size: 11px;
  line-height: 14px;
  color: #a0a0a0;
`;

export const Error = styled.Text`
  font-size: 11px;
  line-height: 14px;
  color: red;
`;

export const Input = styled.TextInput`
  width: 100%;
  background: #f4f4f4;
  padding: 15px 10px;
  margin-top: 5px;
  border-radius: 4px;
  color: #000000;
  font-size: 14px;
  line-height: 16px;
`;

export const Icon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 35px;
`;
