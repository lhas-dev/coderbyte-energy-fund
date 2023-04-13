import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  padding: 20px;
  flex-direction: row;
`;
export const Row = styled.TouchableOpacity<{active?: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 5px;

  ${({active}) =>
    active &&
    `
    border-bottom-width: 3px;
    border-bottom-color: #770FDF;
  `}
`;
export const Value = styled.Text<{active?: boolean}>`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  border-radius: 4px;
  overflow: hidden;
  padding: 7px;
  color: #a0a0a0;

  ${({active}) =>
    active &&
    `
    color: #000;
  `}
`;

export const Companies = styled.ScrollView`
  margin-bottom: 20px;
`;

export const CompanyCard = styled.TouchableOpacity`
  width: 220px;
  height: 280px;
  border: 1px solid #e6e6e6;
  border-radius: 4px;
  margin-right: 15px;
`;
export const CompanyCardIcon = styled.View`
  margin-top: 13px;
  margin-left: 13px;
  margin-right: 13px;
`;

export const CompanyCardDescription = styled.Text`
  margin-top: 10px;
  margin-left: 13px;
  margin-right: 13px;
`;
