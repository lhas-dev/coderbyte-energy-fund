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
import {Controller, useForm} from 'react-hook-form';

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;

interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const SignUpScreen = ({navigation}: SignUpScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      termsOfUse: false,
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (_data: SignUpFormData) => {
    navigation.navigate('Home');
  };

  const handleLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <Styled.Wrapper>
      <Header back />
      <PageTitle>Create your account</PageTitle>
      <Styled.Form>
        <Controller
          control={control}
          rules={{
            required: {
              message: 'First name is required.',
              value: true,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Field.Block>
              <Field.Label>First Name</Field.Label>
              <Field.Input
                placeholder="Your first name here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.firstName && (
                <Field.Error>{errors.firstName.message}</Field.Error>
              )}
            </Field.Block>
          )}
          name="firstName"
        />
        <Controller
          control={control}
          rules={{
            required: {
              message: 'Last name is required.',
              value: true,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Field.Block>
              <Field.Label>Last Name</Field.Label>
              <Field.Input
                placeholder="Your last name here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.lastName && (
                <Field.Error>{errors.lastName.message}</Field.Error>
              )}
            </Field.Block>
          )}
          name="lastName"
        />
        <Controller
          control={control}
          rules={{
            required: {
              message: 'E-mail is required.',
              value: true,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Field.Block>
              <Field.Label>E-mail</Field.Label>
              <Field.Input
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="Put your best e-mail here"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.email && (
                <Field.Error>{errors.email.message}</Field.Error>
              )}
            </Field.Block>
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: {
              message: 'Password is required.',
              value: true,
            },
            minLength: {
              message: 'Your password must have at least 8 characters.',
              value: 8,
            },
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <Field.Block>
              <Field.Label>Password</Field.Label>
              <Field.Input
                secureTextEntry={!showPassword}
                autoCapitalize="none"
                placeholder="Minimum 8 characters"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
              {errors.password && (
                <Field.Error>{errors.password.message}</Field.Error>
              )}
              <Field.Icon onPress={() => setShowPassword(!showPassword)}>
                <Eye />
              </Field.Icon>
            </Field.Block>
          )}
          name="password"
        />
        <Controller
          control={control}
          name="termsOfUse"
          rules={{
            required: {
              message: 'You must accept the terms of use.',
              value: true,
            },
          }}
          render={({field: {onChange, value}}) => (
            <Checkbox
              checked={value}
              error={errors.termsOfUse?.message}
              onChecked={() => onChange(!value)}
              label={
                <CheckboxLabel>
                  I am over 18 years of age and I have read and agree to the{' '}
                  <CheckboxLabelHighlight>
                    Terms of Service
                  </CheckboxLabelHighlight>{' '}
                  and{' '}
                  <CheckboxLabelHighlight>
                    Privacy Policy
                  </CheckboxLabelHighlight>
                  .
                </CheckboxLabel>
              }
            />
          )}
        />

        <PrimaryButton
          label="Create account"
          onPress={handleSubmit(onSubmit)}
        />
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
