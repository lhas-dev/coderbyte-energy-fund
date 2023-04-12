import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  background: #fff;
  flex: 1;
`;
export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background: #f4f4f4;
  margin-top: 60px;
`;
export const Title = styled.Text`
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 34px;
`;
export const Field = styled.View`
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
export const FieldLabel = styled.Text`
  font-size: 11px;
  line-height: 14px;
  color: #a0a0a0;
`;

export const FieldInput = styled.TextInput`
  width: 100%;
  background: #f4f4f4;
  padding: 15px 10px;
  margin-top: 5px;
  border-radius: 4px;
  color: #000000;
  font-size: 14px;
  line-height: 16px;
`;
export const FieldIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  bottom: 15px;
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

export const Helper = styled.TouchableOpacity`
  width: 100%;
  padding-top: 12px;
  padding-bottom: 12px;
`;
export const HelperText = styled.Text`
  text-align: center;
  color: #a0a0a0;
`;

export const HelperTextUnderline = styled.Text`
  text-decoration-line: underline;
`;
