import styled from 'styled-components/native';

export const Wrapper = styled.View`
  padding-left: 20px;
`;

export const Title = styled.Text`
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  margin-bottom: 20px;
`;

export const Row = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Cards = styled.ScrollView`
  display: flex;
  flex-direction: row;
`;
export const Card = styled.TouchableOpacity`
  display: flex;
  width: 140px;
  height: 145px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
  margin-right: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 12px;
`;
export const CardTitle = styled.Text`
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
`;

export const CardValue = styled.Text`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const CardPercentageUp = styled.Text`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  margin-top: 1px;
  color: #0fdf8f;
`;

export const CardPercentageDown = styled.Text`
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  margin-top: 1px;
  color: #ee8688;
`;
