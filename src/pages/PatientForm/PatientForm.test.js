import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import PatientForm from './index';

test('check form is render on screen', async () => {
  const getToken = jest.fn();
  const handleSubmit = jest.fn();

  render(<PatientForm getToken={getToken} id={1} />);

  userEvent.type(screen.getByPlaceholderText('name of the patient'), 'harshit');
  expect(screen.getByPlaceholderText('name of the patient')).toHaveValue(
    'harshit'
  );

  userEvent.type(screen.getByPlaceholderText('age of the patient'), '27');
  expect(screen.getByPlaceholderText('age of the patient')).toHaveValue('27');
});
