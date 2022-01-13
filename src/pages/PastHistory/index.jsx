import React, { useState } from 'react';
import './PastHistory.css';
import '@innovaccer/design-system/css';
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
  DatePicker,
  Dropdown,
} from '@innovaccer/design-system';

const PastHistory = () => {
  const [currentData, setCurrentData] = useState({
    searchDisabled: true,
    data: {},
  });

  const onChange = (value, name) => {
    const updatedData = { ...currentData.data, [name]: value };

    setCurrentData({
      data: updatedData,
      searchDisabled: Object.keys(updatedData).every(
        (key) => !updatedData[key]
      ),
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    fetch('https://backend-django-innovaccer.herokuapp.com/addOneRecord', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(currentData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
      <PageHeader title='Past History of illnesses' separator={false} />
      <div className='w-100'>
        <Card className='px-6 py-6'>
          <form onSubmit={onSubmit}>
            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Diagnosis Name</Label>
                <Input
                  name='Diagonsis Name'
                  type='text'
                  placeholder='Name of Diagnosis'
                  icon='add_box'
                  autocomplete={'on'}
                  onChange={(event) =>
                    onChange(event.target.value, event.target.name)
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Body Site</Label>
                <Input
                  name='Body Site'
                  type='text'
                  placeholder='Body Site of Diagonsis'
                  autocomplete={'on'}
                  onChange={(event) =>
                    onChange(event.target.value, event.target.name)
                  }
                />
              </div>

              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Date of onset</Label>
                <DatePicker
                  withInput={true}
                  onDateChange={(currentDate) => onChange(currentDate, 'date')}
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

              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Severity</Label>
                <Dropdown
                  options={[
                    { label: 'Mild', value: 'Mild' },
                    { label: 'Moderate', value: 'Moderate' },
                    { label: 'Severe', value: 'Severe' },
                    { label: 'Others', value: 'Others' },
                  ]}
                  searchPlaceholder='Severity'
                  withSearch={true}
                />
              </div>
              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Diagnostic Certainty</Label>
                <Dropdown
                  options={[
                    { label: 'Suspected', value: 'Suspected' },
                    { label: 'Probable', value: 'Probable' },
                    { label: 'Confirmed', value: 'Confirmed' },
                  ]}
                  searchPlaceholder='Diagnostic Certainty'
                  withSearch={true}
                />
              </div>
            </div>
            <div className='mr-12 mb-4'>
              <PageHeader title='Problem Qualifier' separator={false} />
            </div>
            <div className='d-flex flex-wrap'>
              <div
                className='mr-12 mb-11'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Active/Inactive</Label>
                <Dropdown
                  options={[
                    { label: 'Active', value: 'Active' },
                    { label: 'Inactive', value: 'Inactive' },
                  ]}
                  searchPlaceholder='Active/Inactive'
                  withSearch={true}
                />
              </div>
              <div
                className='mr-12 mb-11'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Resolution Phase</Label>
                <Dropdown
                  options={[
                    { label: 'Resolved', value: 'Resolved' },
                    { label: 'Relapsed', value: 'Relapsed' },
                  ]}
                  searchPlaceholder='Resolved/Relapsed'
                  withSearch={true}
                />
              </div>
              <div
                className='mr-12 mb-11'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Occurance</Label>

                <Dropdown
                  options={[
                    { label: 'Recurrence', value: 'Recurrence' },
                    { label: 'Non-recurrence', value: 'Non-recurrence' },
                  ]}
                  searchPlaceholder='Recurrence'
                  withSearch={true}
                />
              </div>
            </div>

            <Button
              className='submmit-btn'
              disabled={currentData.searchDisabled}
              appearance='secondary'
              type='submit'>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PastHistory;
