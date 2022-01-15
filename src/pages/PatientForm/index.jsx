import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
  Dropdown,
} from '@innovaccer/design-system';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: 0,
    gender: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://backend-django-innovaccer.herokuapp.com/addPatientInfo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${
          JSON.parse(localStorage.getItem('token')).token
        }`,
      },
      body: JSON.stringify({ ...formData }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
      <PageHeader title='Patient Details Form' separator={true} />
      <div className='w-100'>
        <Card className='px-6 py-6'>
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Name</Label>
                <Input
                  name='name'
                  type='text'
                  placeholder='name of the patient'
                  icon='add_box'
                  autoComplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Age</Label>
                <Input
                  name='age'
                  type='text'
                  placeholder='age of the patient'
                  autoComplete={'on'}
                  onSelect={(e) =>
                    setFormData({ ...formData, age: e.target.value })
                  }
                />
              </div>

              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Gender</Label>
                <Dropdown
                  options={[
                    { label: 'male', value: 'male' },
                    { label: 'female', value: 'female' },
                  ]}
                  onChange={(option) =>
                    setFormData({ ...formData, gender: option })
                  }
                  searchPlaceholder='Amount Unit'
                  withSearch={true}
                />
              </div>
            </div>

            <Button
              appearance='secondary'
              type='submit'
              className='submmit-btn'>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PatientForm;
