import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import Medication from './index';

// mock setup for server
// jest.mock(
//   'https://backend-django-innovaccer.herokuapp.com/addOneRecord/1',
//   () => {
//     const users = {
//       id: '',
//       medication_item: '',
//       form: '',
//       strength_concentration: '',
//       presentation: '',
//       manufacturer: 'Abbot',
//       expire: '',
//       batch_id_timing: '',
//       amount: '',
//       amount_unit: '',
//       description: '',
//       patient_id: '',
//     };
//     return {
//       getUsers: jest.fn(() => Promise.resolve(users)),
//     };
//   }
// );

// test
test('check form is render on screen', async () => {
  const getToken = jest.fn();
  const handleSubmit = jest.fn();

  render(<Medication getToken={getToken} id={1} />);

  //  check for button

  expect(await screen.getByText(/Submit/i).closest('button')).toBeDisabled();

  // medication
  userEvent.type(screen.getByPlaceholderText('name of medicine'), 'Crocin');
  expect(screen.getByPlaceholderText('name of medicine')).toHaveValue('Crocin');

  // type of medication i.e tablet or cream or infusion
  userEvent.type(
    screen.getByPlaceholderText(
      'type of medication i.e tablet or cream or infusion'
    ),
    'tablet'
  );
  expect(
    screen.getByPlaceholderText(
      'type of medication i.e tablet or cream or infusion'
    )
  ).toHaveValue('tablet');

  // Strength of Dosage
  userEvent.type(screen.getByPlaceholderText('strength of dosage'), '10 mg');
  expect(screen.getByPlaceholderText('strength of dosage')).toHaveValue(
    '10 mg'
  );

  // presentation
  //   userEvent.keyboard(screen.getByPlaceholderText('presentation'), '1');
  //   expect(screen.getByPlaceholderText('presentation')).toHaveValue(null);

  //   TODO: datepicker

  // batchID
  userEvent.type(screen.getByPlaceholderText('BI0000'), '121212');
  expect(screen.getByPlaceholderText('BI0000')).toHaveValue('121212');

  //   manufacturer
  userEvent.type(screen.getByPlaceholderText('manufacturer'), 'Abbott');
  expect(screen.getByPlaceholderText('manufacturer')).toHaveValue('Abbott');

  //   amount of Dosage
  userEvent.type(screen.getByPlaceholderText('amount of dosage'), '1');
  expect(screen.getByPlaceholderText('amount of dosage')).toHaveValue(1);

  //   // dropdown
  //   userEvent.selectOptions(screen.getByTestId('dropdown'), ['mg', 'ml']);
  //   expect(screen.getByRole('option', { label: 'mg' }).selected).toBe(true);

  // description unit
  userEvent.type(
    screen.getByPlaceholderText('unit in mg or ml or tablet'),
    'mg'
  );
  expect(screen.getByPlaceholderText('unit in mg or ml or tablet')).toHaveValue(
    'mg'
  );

  // frequency of dosage
  userEvent.type(
    screen.getByPlaceholderText('1 times a day or hour or week'),
    '3 times a day'
  );
  expect(
    screen.getByPlaceholderText('1 times a day or hour or week')
  ).toHaveValue('3 times a day');

  // route
  userEvent.type(
    screen.getByPlaceholderText('method of dosage: infusion or oral'),
    'oral'
  );
  expect(
    screen.getByPlaceholderText('method of dosage: infusion or oral')
  ).toHaveValue('oral');

  // description by doctor
  userEvent.type(
    screen.getByPlaceholderText('enter the method prescribed'),
    'take rest and eat healthy'
  );
  expect(
    screen.getByPlaceholderText('enter the method prescribed')
  ).toHaveValue('take rest and eat healthy');

  // submit button
  userEvent.click(screen.getByText('Submit'));
  //   expect(handleSubmit).toHaveBeenCalled();
});
