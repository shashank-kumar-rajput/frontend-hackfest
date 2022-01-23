import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import ProblemList from './index';



// test
test('check form is render on screen', async () => {
  const getToken = jest.fn();
  const handleSubmit = jest.fn();

  render(<ProblemList getToken={getToken} id={1} />);

 

  // expect(await screen.getByText(/Submit/i).closest('button')).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText('Name of Diagnosis'), 'rt-pcr');
  expect(screen.getByPlaceholderText('Name of Diagnosis')).toHaveValue('rt-pcr');

  userEvent.type(
    screen.getByPlaceholderText(
      'Body Site of Diagonsis'
    ),
    'mouth'
  );
  expect(
    screen.getByPlaceholderText(
      'Body Site of Diagonsis'
    )
  ).toHaveValue('mouth');

  userEvent.click(screen.getByText('Submit'));
  //   expect(handleSubmit).toHaveBeenCalled();
});