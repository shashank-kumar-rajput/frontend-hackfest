import React from 'react';
import { fireEvent,render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Diagnostic from './index';



// test
test('check form is render on screen', async () => {
  const getToken = jest.fn();
  const handleSubmit = jest.fn();
  render(<Diagnostic getToken={getToken} id={1} />);

  // Test Name
  userEvent.type(screen.getByPlaceholderText('Name of Test'), 'covid');
  expect(screen.getByPlaceholderText('Name of Test')).toHaveValue('covid');

  // type of diagnosis
  userEvent.type(
    screen.getByPlaceholderText(
      'Type of Diagnosis'
    ),
    'RT-PCR'
  );
  expect(
    screen.getByPlaceholderText(
      'Type of Diagnosis'
    )
  ).toHaveValue('RT-PCR');

  // Method of Diagnosis
  userEvent.type(screen.getByPlaceholderText('Method of Diagnosis'), 'Inspection');
  expect(screen.getByPlaceholderText('Method of Diagnosis')).toHaveValue(
    'Inspection'
  );

  // body site
  userEvent.type(screen.getByPlaceholderText('Site in the body'), 'Mouth');
  expect(screen.getByPlaceholderText('Site in the body')).toHaveValue('Mouth');

  // test result
  userEvent.type(screen.getByPlaceholderText('Result of Diagnosis'), 'negative');
  expect(screen.getByPlaceholderText('Result of Diagnosis')).toHaveValue('negative');

  
 
});
