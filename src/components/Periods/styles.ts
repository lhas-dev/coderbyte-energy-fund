import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  padding: 20px;
  flex-direction: row;
`;
export const Row = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 25px;
`;
export const Value = styled.Text<{active?: boolean}>`
  font-weight: 500;
  font-size: 15px;
  line-height: 19px;
  border-radius: 4px;
  overflow: hidden;
  padding: 7px;

  ${({active}) =>
    active &&
    `
    color: #770FDF;
    background: #F7EFFF;
  `}
`;
