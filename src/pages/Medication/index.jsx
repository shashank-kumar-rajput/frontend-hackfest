import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
  DatePicker,
  Dropdown,
  Textarea,
} from '@innovaccer/design-system';
import './Medication.css';

const Medication = () => {
  const [formData, setFormData] = useState({
    medicationItem: '',
    form: '',
    strength: '',
    presentation: '',
    expiry: 'random',
    batchId: '',
    manufacturer: '',
    amount: '',
    amountUnit: '',
    descriptionUnit: '',
    frequency: '',
    route: '',
    description: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://backend-django-innovaccer.herokuapp.com/addOneRecord', {
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

  console.log(formData);
  return (
    <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
      <PageHeader title='Medical Details' separator={true} />
      <div className='w-100'>
        <Card className='px-6 py-6'>
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Medication Item</Label>
                <Input
                  name='Medication Item'
                  type='text'
                  placeholder='Name of Medicine'
                  icon='add_box'
                  autoComplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, medicationItem: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Form</Label>
                <Input
                  name='form'
                  type='text'
                  placeholder='type of medication i.e Tablet/cream/infusion'
                  autoComplete={'on'}
                  onSelect={(e) =>
                    setFormData({ ...formData, form: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Strength Concentration</Label>
                <Input
                  name='Concentration'
                  type='text'
                  placeholder='Strength of Dosage '
                  autoComplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, strength: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Presentation</Label>
                <Input
                  name='Presentation'
                  type='Number'
                  placeholder='Strength of Dosage'
                  autoComplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, presentation: e.target.value })
                  }
                />
              </div>
              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Expiry Date</Label>
                <DatePicker
                  withInput={true}
                  onDateChange={(currentDate) => {
                    console.log(currentDate);
                    setFormData({ ...formData, expiry: currentDate });
                  }}
                  inputOptions={{
                    placeholder: 'MM/DD/YYYY',

                    mask: [
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      '/',
                      /\d/,
                      /\d/,
                      /\d/,
                      /\d/,
                    ],
                  }}
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Batch ID</Label>
                <Input
                  name='Batch ID'
                  type='text'
                  placeholder='BI0000'
                  autoComplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, batchId: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Manufacturer</Label>
                <Input
                  name='Manufacturer'
                  type='text'
                  placeholder='Manufacturer'
                  autoComplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, manufacturer: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Amount</Label>
                <Input
                  name='Amount'
                  type='Number'
                  placeholder='Amount of Dosage'
                  autoComplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>

              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Amount Unit</Label>
                <Dropdown
                  options={[
                    { label: 'mg', value: 'mg' },
                    { label: 'ml', value: 'ml' },
                    { label: 'UI', value: 'UI' },
                    { label: 'Others', value: 'Others' },
                  ]}
                  onChange={(option) =>
                    setFormData({ ...formData, amountUnit: option })
                  }
                  searchPlaceholder='Amount Unit'
                  withSearch={true}
                />
              </div>
            </div>
            <div className='mr-12 mb-4'>
              <PageHeader title='Description' separator={false} />
            </div>
            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Description Unit</Label>
                <Input
                  name='Description'
                  type='text'
                  placeholder='Unit in mg/ml/tablet'
                  autocomplete={'off'}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      descriptionUnit: e.target.value,
                    })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Frequency of Dosage</Label>
                <Input
                  name='Dosage'
                  type='text'
                  placeholder='1 times a Day/hour/week'
                  autocomplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, frequency: e.target.value })
                  }
                />
              </div>

              <div className='mr-12 mb-10'>
                <Label withInput={true}>Route</Label>
                <Input
                  name='Route'
                  type='text'
                  placeholder='Method of Dosage:infusion/oral'
                  autocomplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, route: e.target.value })
                  }
                />
              </div>

              <div className='mr-12 mb-10'>
                <Label htmlFor='description' withInput={true}>
                  Description Prescribed by Doctor
                </Label>
                <Textarea
                  style={{ resize: 'none' }}
                  aria-labelledby='description'
                  className='w-200'
                  id='description'
                  name='description'
                  placeholder='Enter the method prescribed by doctor for medication'
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
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

export default Medication;
