import React from 'react';
import * as Styled from './styles';
import Eye from '../../assets/icons/eye.svg';

export const LoginScreen = () => {
  return (
    <Styled.Wrapper>
      <Styled.Divider />
      <Styled.Title>Login</Styled.Title>
      <Styled.Form>
        <Styled.Field>
          <Styled.FieldLabel>E-mail</Styled.FieldLabel>
          <Styled.FieldInput
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Put your best e-mail here"
          />
        </Styled.Field>
        <Styled.Field>
          <Styled.FieldLabel>Password</Styled.FieldLabel>
          <Styled.FieldInput
            secureTextEntry={true}
            autoCapitalize="none"
            placeholder="Minimum 8 characters"
          />
          <Styled.FieldIcon>
            <Eye />
          </Styled.FieldIcon>
        </Styled.Field>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
