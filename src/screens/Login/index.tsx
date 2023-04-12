import React, {useState} from 'react';
import * as Styled from './styles';
import * as Field from '../../components/Field';
import Eye from '../../assets/icons/eye.svg';
import {PrimaryButton} from '../../components/PrimaryButton';
import * as SecondaryButton from '../../components/SecondaryButton';
import {Header} from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <Styled.Wrapper>
      <Styled.HeaderPadding>
        <Header />
      </Styled.HeaderPadding>
      <PageTitle>Login</PageTitle>
      <Styled.Form>
        <Field.Block>
          <Field.Label>E-mail</Field.Label>
          <Field.Input
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="Put your best e-mail here"
          />
        </Field.Block>
        <Field.Block>
          <Field.Label>Password</Field.Label>
          <Field.Input
            secureTextEntry={!showPassword}
            autoCapitalize="none"
            placeholder="Minimum 8 characters"
          />
          <Field.Icon onPress={() => setShowPassword(!showPassword)}>
            <Eye />
          </Field.Icon>
        </Field.Block>
        <PrimaryButton label="Login" onPress={handleSubmit} />
        <SecondaryButton.Block onPress={handleSignUp}>
          <SecondaryButton.Text>
            Don't have an account?{' '}
            <SecondaryButton.TextUnderline>
              Sign up
            </SecondaryButton.TextUnderline>{' '}
            here
          </SecondaryButton.Text>
        </SecondaryButton.Block>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
