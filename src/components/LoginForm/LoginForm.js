import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

import { Section } from 'components/Section/Section';
import {
  LoginFormList,
  LoginFormLable,
  LoginFormInput,
  LoginFormButton,
} from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email: inputEmail, password: inputPassword }));
    // resetForm();
  };

  // const resetForm = () => {
  //   setInputEmail('');
  //   setInputPassword('');
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setInputEmail(value);
        break;

      case 'password':
        setInputPassword(value);
        break;

      default:
        break;
    }
  };

  return (
    <Section title="Log In">
      <LoginFormList autoComplete="off" onSubmit={handleSubmit}>
        <LoginFormLable htmlFor="inputEmail">Email</LoginFormLable>
        <LoginFormInput
          type="email"
          name="email"
          value={inputEmail}
          id="inputEmail"
          onChange={handleChange}
        />

        <LoginFormLable htmlFor="inputPassword">Password</LoginFormLable>
        <LoginFormInput
          type="password"
          name="password"
          value={inputPassword}
          id="inputPassword"
          onChange={handleChange}
        />

        <LoginFormButton type="submit">Log In</LoginFormButton>
      </LoginFormList>
    </Section>
  );
};
