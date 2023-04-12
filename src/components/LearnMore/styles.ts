import styled from 'styled-components/native';

export const Wrapper = styled.TouchableOpacity`
  margin: 20px;
  background: #770fdf;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  height: 105px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #fff;
`;

export const Subtitle = styled.Text`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #fff;
  margin-top: 10px;
`;
