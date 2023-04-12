import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const ScrollArea = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;
export const ProfileButton = styled.TouchableOpacity`
  background: #f4f4f4;
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
`;
export const HeaderText = styled.Text`
  font-weight: 600;
  font-size: 14px;
  line-height: 18px;
`;
export const AlertButton = styled.TouchableOpacity``;
