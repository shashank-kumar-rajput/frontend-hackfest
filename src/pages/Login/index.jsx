import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  Heading,
  Label,
  Input,
  Icon,
  Button,
} from '@innovaccer/design-system';
import './Login.css';

const Login = ({ setToken, setUser }) => {
  const navigate = useNavigate();
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
    fetch('https://backend-django-innovaccer.herokuapp.com/api-token-auth/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...data }),
    })
      .then((res) => res.json())
      .then((token) => {
        localStorage.setItem('token', JSON.stringify(token));
        setToken(token);
        setUser(token);
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  // const handleClick = () => {
  //   setData({ ...data, username: 'Himanch', password: 'Hello@123' });
  // };

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
            <Link to='/register'>Not a user? register</Link>

            <Button
              className='mt-5'
              appearance='primary'
              expanded={true}
              type='submit'>
              Login
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Login;
