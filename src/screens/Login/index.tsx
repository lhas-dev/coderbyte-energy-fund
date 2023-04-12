import React, {useState} from 'react';
import * as Styled from './styles';
import Eye from '../../assets/icons/eye.svg';
import {useNavigation} from '@react-navigation/native';

export const LoginScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

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
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            placeholder="Minimum 8 characters"
          />
          <Styled.FieldIcon onPress={() => setShowPassword(!showPassword)}>
            <Eye />
          </Styled.FieldIcon>
        </Styled.Field>
        <Styled.Button>
          <Styled.ButtonLabel>Login</Styled.ButtonLabel>
        </Styled.Button>
        <Styled.Helper onPress={handleSignUp}>
          <Styled.HelperText>
            Don't have an account?{' '}
            <Styled.HelperTextUnderline>Sign up</Styled.HelperTextUnderline>{' '}
            here
          </Styled.HelperText>
        </Styled.Helper>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
