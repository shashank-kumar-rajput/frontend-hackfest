import React from 'react';
import '@innovaccer/design-system/css';
import { useState } from 'react/cjs/react.development';
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
  Textarea,
} from '@innovaccer/design-system';

import './ePrescription.css';

const Prescription = () => {
  const [formData, setFormData] = useState({
    medicationItem: '',
    substance: '',
    form: '',
    strength: '',
    strengthUnit: '',
    route: '',
    description: '',
    duration: '',
    maxAmount: '',
    maxAmountUnit: '',
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://backend-django-innovaccer.herokuapp.com/addOnePrescription/2', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key: e.target.value }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log(formData);
  };

  return (
    <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
      <PageHeader title='ePrescription' separator={false} />
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

              <div
                className='d-flex flex-wrap'
                style={
                  ({ flex: 'no-wrap' },
                  { display: 'inline-block' },
                  { whitespace: 'nowrap' })
                }>
                <div className='mr-12 mb-10'>
                  <Label withInput={true}>Substance Name</Label>
                  <Input
                    name='Description'
                    type='text'
                    placeholder='Name of Substance'
                    autocomplete={'off'}
                    onChange={(e) =>
                      setFormData({ ...formData, substance: e.target.value })
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
                    onChange={(e) =>
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
                  <Label withInput={true}>Strength Unit</Label>
                  <Input
                    name='strengthUnit'
                    type='text'
                    placeholder='tablet/mg/ml '
                    autoComplete={'off'}
                    onChange={(e) =>
                      setFormData({ ...formData, strengthUnit: e.target.value })
                    }
                  />
                </div>
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
                  Dosage Instruction
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
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Duration</Label>
                <Input
                  name='Duration'
                  type='text'
                  placeholder='Duration '
                  autoComplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                />
              </div>

              <div className='mr-12 mb-10'>
                <h1>Medication Safety</h1>
              </div>

              <div className='d-flex flex-wrap'>
                <div className='mr-12 mb-10'>
                  <Label withInput={true}>Max Amount</Label>
                  <Input
                    name='MaxAmount'
                    type='text'
                    placeholder='max safety amount of Dose '
                    autoComplete={'off'}
                    onChange={(e) =>
                      setFormData({ ...formData, maxAmount: e.target.value })
                    }
                  />
                </div>
                <div className='mr-12 mb-10'>
                  <Label withInput={true}>Max Amout Unit</Label>
                  <Input
                    name='amoutUnit'
                    type='text'
                    placeholder='tablet/mg/ml '
                    autoComplete={'off'}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        maxAmountUnit: e.target.value,
                      })
                    }
                  />
                </div>

                <div className='mr-12 mb-10'>
                  <Label htmlFor='comment' withInput={true}>
                    Comment
                  </Label>
                  <Textarea
                    style={{ resize: 'none' }}
                    aria-labelledby='comment'
                    className='w-200'
                    id='comment'
                    name='comment'
                    placeholder='comments by doctor'
                    onChange={(e) =>
                      setFormData({ ...formData, comment: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <Button appearance='secondary' type='submit'>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Prescription;
