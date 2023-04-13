import styled from 'styled-components/native';

export const Wrapper = styled.View``;
export const Buttons = styled.View`
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-bottom: 20px;
`;
export const SellButton = styled.TouchableOpacity`
  flex: 1;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SellButtonText = styled.Text`
  color: #770fdf;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
export const RetireCreditsButton = styled.TouchableOpacity`
  flex: 1;
  height: 48px;
  background: #0fdf8f;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const RetireCreditsButtonText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
`;
export const Credits = styled.View`
  display: flex;
  padding: 20px;
`;
export const CreditsRow = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const CreditsRowTotal = styled.Text`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

export const CreditsRowValue = styled.Text`
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
`;

export const CreditsPercentage = styled.Text`
  color: #0fdf8f;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const CreditsLastPurchase = styled.Text`
  color: #a0a0a0;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const PreviouslyRetired = styled.Text`
  padding-left: 20px;
  padding-bottom: 40px;
  color: #a0a0a0;
  font-weight: 400;
  font-size: 11px;
`;
