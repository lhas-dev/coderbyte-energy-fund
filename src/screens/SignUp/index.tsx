import React, {useState} from 'react';
import * as Styled from './styles';
import * as Field from '../../components/Field';
import Eye from '../../assets/icons/eye.svg';
import {PrimaryButton} from '../../components/PrimaryButton';
import * as SecondaryButton from '../../components/SecondaryButton';
import {Header} from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import {
  Checkbox,
  CheckboxLabel,
  CheckboxLabelHighlight,
} from '../../components/Checkbox';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

export const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const [termsOfUse, setTermsOfUse] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  const handleSubmit = () => {
    navigation.navigate('Home');
  };

  return (
    <Styled.Wrapper>
      <Header back />
      <PageTitle>Create your account</PageTitle>
      <Styled.Form>
        <Field.Block>
          <Field.Label>First Name</Field.Label>
          <Field.Input placeholder="Your first name here" />
        </Field.Block>
        <Field.Block>
          <Field.Label>Last Name</Field.Label>
          <Field.Input placeholder="Your last name here" />
        </Field.Block>
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
        <Checkbox
          checked={termsOfUse}
          onChecked={() => setTermsOfUse(!termsOfUse)}
          label={
            <CheckboxLabel>
              I am over 18 years of age and I have read and agree to the{' '}
              <CheckboxLabelHighlight>Terms of Service</CheckboxLabelHighlight>{' '}
              and{' '}
              <CheckboxLabelHighlight>Privacy Policy</CheckboxLabelHighlight>.
            </CheckboxLabel>
          }
        />
        <PrimaryButton label="Create account" onPress={handleSubmit} />
        <SecondaryButton.Block onPress={handleLogin}>
          <SecondaryButton.Text>
            Already have an account?{' '}
            <SecondaryButton.TextUnderline>
              Log in Here
            </SecondaryButton.TextUnderline>{' '}
            here
          </SecondaryButton.Text>
        </SecondaryButton.Block>
      </Styled.Form>
    </Styled.Wrapper>
  );
};
