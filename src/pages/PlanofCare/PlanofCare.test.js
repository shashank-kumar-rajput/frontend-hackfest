import React from 'react';
import { fireEvent,render, screen, cleanup} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import  PlanofCare from './index';



// test
test('check form is render on screen', async () => {
  const getToken = jest.fn();
  const handleSubmit = jest.fn();
  render(<PlanofCare getToken={getToken} id={1} />);


  userEvent.type(screen.getByPlaceholderText('Name of Care Plan'), 'healthcare');
  expect(screen.getByPlaceholderText('Name of Care Plan')).toHaveValue('healthcare');


  userEvent.type(
    screen.getByPlaceholderText(
      'Description of Care Plan'
    ),
    'yoga meditation'
  );
  expect(
    screen.getByPlaceholderText(
      'Description of Care Plan'
    )
  ).toHaveValue('yoga meditation');

  userEvent.type(screen.getByPlaceholderText('Reason of Care Plan'), 'maintenance of health');
  expect(screen.getByPlaceholderText('Reason of Care Plan')).toHaveValue(
    'maintenance of health'
  );

  userEvent.type(
    screen.getByPlaceholderText('Type of Diet'),
    'vegetables milk fruits'
  );
  expect(screen.getByPlaceholderText('Type of Diet')).toHaveValue(
    'vegetables milk fruits'
  );


});
