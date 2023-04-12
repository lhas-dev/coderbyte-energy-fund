import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 34px;
`;

export const Form = styled.View`
  padding: 20px;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 25px;
  width: 100%;
  height: 58px;
  background: #770fdf;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
`;
