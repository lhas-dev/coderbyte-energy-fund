import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 20px;
  width: 100%;
`;

export const Row = styled.View`
  display: flex;
  width: 50%;
  margin-bottom: 9px;
`;
export const RowLabel = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #a0a0a0;
`;
export const RowValue = styled.Text`
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;
