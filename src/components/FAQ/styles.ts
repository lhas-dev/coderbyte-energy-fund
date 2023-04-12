import styled from 'styled-components/native';

export const Wrapper = styled.ScrollView`
  display: flex;
  padding-left: 20px;
`;

export const Row = styled.View`
  width: 159px;
  height: 215px;
  display: flex;
  flex-direction: column;
  margin-right: 17px;
  background: #f4f4f4;
  border-radius: 10px;
  padding-left: 12px;
  padding-top: 21px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #000000;
`;
