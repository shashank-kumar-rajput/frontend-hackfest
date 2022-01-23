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
  Row,
  Column,
  Message,
} from '@innovaccer/design-system';
import './Medication.css';

const Medication = ({ getToken, id }) => {
  const [buttonStatus, setButtonStatus] = useState(true);
  const [formData, setFormData] = useState({
    medication_item: '',
    form: '',
    strength_concentration: '',
    presentation: '',
    manufacturer: '',
    expire: '',
    batch_id_timing: '',
    amount: '',
    amount_unit: '',
    descriptionUnit: '',
    frequency: '',
    route: '',
    description: '',
  });
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);
  // const options=[
  //   { label: 'mg', value: 'mg' },
  //   { label: 'ml', value: 'ml' },
  //   { label: 'UI', value: 'UI' },
  //   { label: 'Others', value: 'Others' },
  // ]


  const onChange = (value, name) => {
    const updatedData = { ...formData, [name]: value };

    setFormData(updatedData);
    setButtonStatus(Object.keys(updatedData).every((key) => !updatedData[key]));
  };

  const handleSubmit = (e) => {
    // console.log(formData);

    e.preventDefault();
    if (formData.medication_item === '' || formData.form === '0' || formData.strength_concentration === ''
     || formData.presentation === '' || formData.manufacturer === '' || formData.amount === '' 
     || formData.amount_unit === '' || formData.frequency === '' || formData.route === '') {
      setInvalid(true);
      setValid(false)
    } 
    else {
    fetch(`http://44.202.138.87:8000/addOneRecord/${id}`, {
      method: 'POST',
      headers: { 
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken().token}`,
     },
      body: JSON.stringify({ ...formData }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res), setInvalid(false), setValid(true, 5))
      .catch((err) => console.log(err));
  };
}

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
                  placeholder='name of medicine'
                  icon='add_box'
                  autoComplete={'on'}
                  onChange={(e) => onChange(e.target.value, 'medication_item')}
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Form</Label>
                <Input
                  name='form'
                  type='text'
                  placeholder='type of medication i.e tablet or cream or infusion'
                  autoComplete={'on'}
                  onSelect={(e) => onChange(e.target.value, 'form')}
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Strength Concentration</Label>
                <Input
                  name='Concentration'
                  type='text'
                  placeholder='strength of dosage'
                  autoComplete={'off'}
                  onChange={(e) =>
                    onChange(e.target.value, 'strength_concentration')
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Presentation</Label>
                <Input
                  name='Presentation'
                  type='Number'
                  placeholder='presentation'
                  autoComplete={'off'}
                  onChange={(e) => onChange(e.target.value, 'presentation')}
                />
              </div>
              <div
          
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Expiry Date</Label>
                <DatePicker
                  data-testid='currentDate'
                  withInput={true}
                  onDateChange={(currentDate) => {
                    onChange(currentDate, 'expire');
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
                  onChange={(e) => onChange(e.target.value, 'batch_id_timing')}
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Manufacturer</Label>
                <Input
                  name='Manufacturer'
                  type='text'
                  placeholder='manufacturer'
                  autoComplete={'off'}
                  onChange={(e) => onChange(e.target.value, 'manufacturer')}
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Amount</Label>
                <Input
                  name='Amount'
                  type='Number'
                  placeholder='amount of dosage'
                  autoComplete={'off'}
                  onChange={(e) => onChange(e.target.value, 'amount')}
                />
              </div>

              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Amount Unit</Label>
                <Dropdown
                  role='dropdown'
                  options={[
                    { label: 'mg', value: 'mg' },
                    { label: 'ml', value: 'ml' },
                    { label: 'UI', value: 'UI' },
                    { label: 'Others', value: 'Others' },
                  ]}
                  onChange={(option) => onChange(option, 'amount_unit')}
                  searchPlaceholder='amount unit'
                  withSearch={true}
                />
                 {/* <select role="select" onChange={(option) => onChange(option, 'amount_unit')}
                  searchPlaceholder='amount unit'
                  withSearch={true} >
        <option role="option" value="">
          Amount Unit
        </option>
        {options.map(option => (
          <option key={option.label} role="option" value={option.value}>
            {option.label}
          </option>
        ))}
        
      </select> */}
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
                  placeholder='unit in mg or ml or tablet'
                  autocomplete={'off'}
                  onChange={(e) => onChange(e.target.value, 'descriptionUnit')}
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Frequency of Dosage</Label>
                <Input
                  name='Dosage'
                  type='text'
                  placeholder='1 times a day or hour or week'
                  autocomplete={'off'}
                  onChange={(e) => onChange(e.target.value, 'frequency')}
                />
              </div>

              <div className='mr-12 mb-10'>
                <Label withInput={true}>Route</Label>
                <Input
                  name='Route'
                  type='text'
                  placeholder='method of dosage: infusion or oral'
                  autocomplete={'off'}
                  onChange={(e) => onChange(e.target.value, 'route')}
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
                  placeholder='enter the method prescribed'
                  onChange={(e) => onChange(e.target.value, 'description')}
                />
              </div>
            </div>

            <Button
              disabled={buttonStatus}
              appearance='secondary'
              type='submit'
              className='submmit-btn'>
              Submit
            </Button>
            {invalid ?
              <Card className='px-0 py-6'>
              <Row>
                <Column size="4">
                  <Message appearance="alert" description="invalid details" />
                </Column>
              </Row>
              </Card>
            : null}
            {valid ?
              <Card className='px-0 py-6'>
              <Row>
                <Column size="4">
                  <Message appearance="success" description="Submitted Successfully" />
                </Column>
              </Row>
              </Card>
            : null}
          </form>
        </Card>
      </div>
    </div>
  );
};

export default Medication;
