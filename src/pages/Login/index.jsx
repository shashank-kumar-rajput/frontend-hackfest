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
import "./Login.css"

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({ username: '', password: '' });
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

  const onSubmit = (event) => {
    event.preventDefault();
    const { email = '', password = '' } = data;
    console.log(`email: ${email}, password: ${password}`);

  };

  return (
    <div className='center-container'>
      <div style={{ width: '350px' }}>
        <Card className='px-6 py-6'>
          <form onSubmit={onSubmit}>
            <Heading className='mb-7' size='m'>
              Login
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
            <Link to='/register'>Register</Link>
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

export default Login;