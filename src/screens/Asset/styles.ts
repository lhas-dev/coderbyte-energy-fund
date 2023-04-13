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

export const Buy = styled.View`
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;

export const Warning = styled.View`
  margin-left: 20px;
  margin-right: 20px;
  background: #f4f4f4;
  border-radius: 4px;
  overflow: hidden;
`;

export const WarningText = styled.Text`
  font-weight: 400;
  font-size: 12px;
  color: #a0a0a0;
  padding: 10px;
`;
