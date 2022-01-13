import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import { Link } from 'react-router-dom';
import {
  Card,
  Heading,
  Label,
  Input,
  Icon,
  Button,
} from '@innovaccer/design-system';
import './Register.css';

const Register = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({ username: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const { password = '' } = data;

  const onActionClick = () => {
    setPasswordVisible(!passwordVisible);
  };

  const onUsernameChange = (event) => {
    const username = event.target.value;
    setData({ ...data, username });
  };

  const onPasswordChange = (event) => {
    const password = event.target.value;
    setData({ ...data, password });
  };

  const onConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
    if (confirmPassword === password) {
      setConfirmPassword(confirmPassword);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const { username = '', password = '' } = data;
    console.log(`email: ${username}, password: ${password}`);

    // call to backend
    fetch('https://backend-django-innovaccer.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: data.username,
        password: data.password,
        confirmPassword: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className='center-container'>
      <div style={{ width: '350px' }}>
        <Card className='px-6 py-6'>
          <form onSubmit={onSubmit}>
            <Heading className='mb-7' size='m'>
              Register
            </Heading>
            <Label withInput={true}>Username</Label>
            <Input
              required
              name='input'
              type='text'
              placeholder='Enter username'
              className='mb-6'
              autocomplete={'off'}
              onChange={onUsernameChange}
            />
            <Label withInput={true}>Password</Label>
            <Input
              required
              name='input'
              className='mb-6'
              placeholder='Enter password'
              autocomplete={'off'}
              type={passwordVisible ? 'text' : 'password'}
              value={password}
              onChange={onPasswordChange}
              actionIcon={
                <Icon
                  name={passwordVisible ? 'visibility' : 'visibility_off'}
                  onClick={onActionClick}
                />
              }
            />

            <Label withInput={true}>Confirm Password</Label>
            <Input
              required
              name='input'
              type='password'
              className='mb-6'
              placeholder='confirm password'
              autocomplete={'off'}
              onChange={onConfirmPasswordChange}
            />
            <Link to='/login' className='link'>
              Already a user ?
            </Link>
            <Button
              className='mt-5'
              appearance='primary'
              expanded={true}
              type='submit'>
              Sign In
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Register;
