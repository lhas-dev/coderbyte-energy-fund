import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background: #fff;
`;

export const ScrollArea = styled.ScrollView`
  flex: 1;
  background: #fff;
`;

export const AssetDetails = styled.View`
  flex: 1;
  padding-right: 40px;
`;

export const AssetTitle = styled.Text`
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
`;

export const AssetTicker = styled.Text`
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #808080;
`;

export const BiggestPrice = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #a0a0a0;
  margin-left: 60%;
  margin-bottom: 10px;
`;
export const LowestPrice = styled.Text`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #a0a0a0;
  margin-left: 12%;
  margin-top: 10px;
  margin-bottom: 10px;
`;
