// import React from 'react';
// import { render, fireEvent, waitFor, screen } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect';

// // mock setup for server
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

// // test
// test('handlers server error', async () => {
//   server.use(
//     // override the initial "GET /greeting" request handler
//     // to return a 500 Server Error
//     rest.get('/greeting', (req, res, ctx) => {
//       return res(ctx.status(500));
//     })
//   );

//   // ...
// });

// render(<Fetch url='/greeting' />);

// fireEvent.click(screen.getByText('Load Greeting'));

// // wait until the `get` request promise resolves and
// // the component calls setState and re-renders.
// // `waitFor` waits until the callback doesn't throw an error

// await waitFor(() =>
//   // getByRole throws an error if it cannot find an element
//   screen.getByRole('heading')
// );

// // assert that the alert message is correct using
// // toHaveTextContent, a custom matcher from jest-dom.
// expect(screen.getByRole('alert')).toHaveTextContent('Oops, failed to fetch!');

// // assert that the button is not disabled using
// // toBeDisabled, a custom matcher from jest-dom.
// expect(screen.getByRole('button')).not.toBeDisabled();
