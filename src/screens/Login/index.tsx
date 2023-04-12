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
import {useForm, Controller} from 'react-hook-form';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export const LoginScreen = ({navigation}: LoginScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = data => {
    console.log('Login data', data);
    navigation.navigate('Home');
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <Styled.Wrapper>
      <Styled.HeaderPadding>
        <Header />
      </Styled.HeaderPadding>
      <PageTitle>Login</PageTitle>
      <Styled.Form>
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
        <PrimaryButton label="Login" onPress={handleSubmit(onSubmit)} />
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
