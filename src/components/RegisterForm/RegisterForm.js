import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

import { Section } from 'components/Section/Section';
import {
  RegisterFormList,
  RegisterFormLable,
  RegisterFormInput,
  RegisterFormButton,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(
      register({ name: inputName, email: inputEmail, password: inputPassword })
    );

    // resetForm();
  };

  // const resetForm = () => {
  //   setInputName('');
  //   setInputEmail('');
  //   setInputPassword('');
  // };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setInputName(value);
        break;

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
    <Section title="Create account">
      <RegisterFormList autoComplete="off" onSubmit={handleSubmit}>
        <RegisterFormLable htmlFor="inputName">Username</RegisterFormLable>
        <RegisterFormInput
          type="text"
          name="name"
          value={inputName}
          id="inputName"
          onChange={handleChange}
        />

        <RegisterFormLable htmlFor="inputEmail">Email</RegisterFormLable>
        <RegisterFormInput
          type="email"
          name="email"
          value={inputEmail}
          id="inputEmail"
          onChange={handleChange}
        />

        <RegisterFormLable htmlFor="inputPassword">Password</RegisterFormLable>
        <RegisterFormInput
          type="password"
          name="password"
          value={inputPassword}
          id="inputPassword"
          onChange={handleChange}
        />

        <RegisterFormButton type="submit">Register</RegisterFormButton>
      </RegisterFormList>
    </Section>
  );
};
