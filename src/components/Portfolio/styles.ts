import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding-left: 20px;
  padding-right: 20px;
`;

export const Title = styled.Text``;

export const ValueBlock = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 5px;
`;

export const Value = styled.Text`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Percentage = styled.Text`
  color: #0fdf8f;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const Button = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: #f7efff;
  border-radius: 4px;
  padding: 5px 10px;
`;
export const ButtonText = styled.Text`
  font-size: 11px;
  line-height: 14px;
  color: #770fdf;
`;
