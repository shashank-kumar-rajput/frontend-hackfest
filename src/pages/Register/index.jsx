import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  Heading,
  Label,
  Input,
  Icon,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Text,
  ModalDescription,
  ModalFooter,
  Spinner,
} from '@innovaccer/design-system';
import '@innovaccer/design-system/css';
import './Register.css';

const Register = () => {
  const success = 'User registration successfull';
  const failed = 'Please register yourself';
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [data, setData] = useState({ username: '', password: '' });
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registerStatus, setRegisterStatus] = useState(false);
  const [open, setOpen] = useState(false);
  const { password = '' } = data;
  const dimension = 'medium';

  const onClose = () => {
    setOpen(!open);
  };

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

    // call to backend
    fetch('http://44.202.138.87:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.username,
        password1: data.password,
        password2: confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((status) =>
        status === 'true' ? setRegisterStatus(true) : setRegisterStatus(false)
      )
      .catch((error) => setRegisterStatus(false));
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
            <Link to='/login'>Already a user ?</Link>
            <Button
              onClick={() => setOpen(true)}
              className='mt-5'
              appearance='primary'
              expanded={true}
              type='submit'>
              Sign Up
            </Button>
          </form>
        </Card>
      </div>
      <Modal open={open} dimension={dimension} backdropClose={onClose}>
        <ModalHeader onClose={onClose} heading='User registration status:' />
        <ModalBody>
          <Text></Text>
          <ModalDescription title={registerStatus ? success : failed} />
        </ModalBody>
        {!registerStatus ? (
          <div className='mr-2 center-loader'>
            <div className='h-10'>
              <Spinner size='large' />
            </div>
          </div>
        ) : (
          <ModalFooter open={open}>
            <Button appearance='basic' onClick={() => navigate('/')}>
              Home
            </Button>
            <Button
              appearance='primary'
              className='ml-4'
              onClick={() => navigate('/login')}>
              Login
            </Button>
          </ModalFooter>
        )}
      </Modal>
    </div>
  );
};

export default Register;
