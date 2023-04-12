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
export const FieldLabel = styled.Text``;

export const FieldInput = styled.TextInput`
  width: 100%;
  background: #f4f4f4;
  padding: 15px 10px;
  margin-top: 5px;
  border-radius: 4px;
`;
export const FieldIcon = styled.View`
  width: 20px;
  height: 20px;
  background: red;
  position: absolute;
  right: 15px;
  bottom: 15px;
`;

export const Form = styled.View`
  padding: 20px;
`;
