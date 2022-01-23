import React from 'react';
import { fireEvent,render, screen, cleanup} from '@testing-library/react';
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
  // const startDate = screen.queryByTestId("currentDate");
  //   fireEvent.mouseDown(startDate);
  //   fireEvent.change(startDate, { target: { value: "10-12-2020" } });
  //   fireEvent.click(document.querySelectorAll(".picker-cell-selected")[0]);
 
  // const { queryAllByTestId, queryByTestId } = render(<Medication getToken={getToken} id={2}/>);

  //   const datePicker = screen.queryAllByTestId("harshit")[0];
  //   fireEvent.click(datePicker);
  //   console.log(datePicker);
  //   fireEvent.change(element, { target: { value: "Oct 29, 2020" } });
  //   expect(datePicker.value).toBe("Oct 29, 2020");

  // const { queryByTestId } = render(<Medication getToken={getToken} id={1}/>);

  //   const datePicker = queryByTestId("currentDate");
  //   fireEvent.click(datePicker);
  //   console.log(datePicker);
  //   fireEvent.change(datePicker, { target: { value: "29 Oct, 2020" } });
  //   expect(datePicker.value).toBe("29 Oct, 2020");

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
    // userEvent.selectOptions(screen.getByTestId('dropdown'), ['mg']);
    // expect(screen.getByRole('option', { label: 'mg' }).selected).toBe(true);
    // const { getByRole } = render(< Medication getToken={getToken} id={1}/>);

    // const dropdown = getByRole('dropdown');
    // console.log(dropdown)

    // const display = dropdown.children[0];

    // expect(display.textContent).toBe('mg');

    // // console.log(display.textContent);

    // fireEvent.click(dropdown);
    
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
