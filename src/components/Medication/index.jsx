import React from 'react';
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
  class InlineForm extends React.Component {
    constructor(props = {}) {
      super(props);

      this.state = {
        searchDisabled: true,
        data: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const updatedData = { ...this.state.data, [name]: value };

      this.setState({
        data: updatedData,
        searchDisabled: Object.keys(updatedData).every(
          (key) => !updatedData[key]
        ),
      });
    }

    onSubmit(e) {
      e.preventDefault();

      fetch('https://backend-django-innovaccer.herokuapp.com/addOneRecord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    render() {
      const options = [];
      for (let i = 1; i <= 10; i++) {
        options.push({
          label: ` ${i} times per `,
          value: ` ${i} times per`,
        });
      }

      return (
        <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
          <PageHeader title='Medical Details' separator={false} />
          <div className='w-100'>
            <Card className='px-6 py-6'>
              <h1></h1>
              <form onSubmit={this.onSubmit}>
                <div className='d-flex flex-wrap'>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Medication Item</Label>
                    <Input
                      name='Medication Item'
                      type='text'
                      placeholder='Name of Medicine'
                      icon='add_box'
                      autocomplete={'on'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Form</Label>
                    <Input
                      name='form'
                      type='text'
                      placeholder='type of medication i.e Tablet/cream/infusion'
                      autocomplete={'on'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Strength Concentration</Label>
                    <Input
                      name='Concentration'
                      type='text'
                      placeholder='Strength of Dosage '
                      autocomplete={'off'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Presentation</Label>
                    <Input
                      name='Presentation'
                      type='Number'
                      placeholder='Strength of Dosage'
                      autocomplete={'off'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div
                    className='mr-12 mb-10'
                    style={{ width: 'var(--spacing-9)' }}>
                    <Label withInput={true}>Expiry Date</Label>
                    <DatePicker
                      withInput={true}
                      onDateChange={(currentDate) =>
                        this.onChange(currentDate, 'date')
                      }
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
                      autocomplete={'off'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Manufacturer</Label>
                    <Input
                      name='Manufacturer'
                      type='text'
                      placeholder='Manufacturer'
                      autocomplete={'off'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Amount</Label>
                    <Input
                      name='Amount'
                      type='Number'
                      placeholder='Amount of Dosage'
                      autocomplete={'off'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
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
                      searchPlaceholder='Amount Unit'
                      withSearch={true}
                    />
                  </div>
                </div>
                <div className='mr-12 mb-10'>
                  <h1>Description</h1>
                </div>
                <div className='d-flex flex-wrap'>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Description Unit</Label>
                    <Input
                      name='Description'
                      type='text'
                      placeholder='Unit in mg/ml/tablet'
                      autocomplete={'off'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div
                    className='mr-12 mb-10'
                    style={{ width: 'var(--spacing-9)' }}>
                    <Label withInput={true}>Frequency of Dosage</Label>
                    <Dropdown
                      placeholder='1 time a day'
                      options={options}
                      onChange={(option) => this.onChange(option, 'pcp')}
                    />
                    <Dropdown
                      options={[
                        { label: 'Day', value: 'Day' },
                        { label: 'hour', value: 'hour' },
                        { label: 'week', value: 'week' },
                      ]}
                      searchPlaceholder='Amount Unit'
                      withSearch={true}
                    />
                  </div>
                  <div className='mr-12 mb-10'>
                    <Label withInput={true}>Route</Label>
                    <Input
                      name='Route'
                      type='text'
                      placeholder='Method of Dosage:infusion/oral'
                      autocomplete={'off'}
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                  <div className='mr-12 mb-10'>
                    <Label htmlFor='description' withInput={true}>
                      Description Prescribed by Doctor
                    </Label>
                    <Textarea
                      aria-labelledby='description'
                      className='w-200'
                      id='description'
                      name='description'
                      placeholder='Enter the method prescribed by doctor for medication'
                      onChange={(event) =>
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>
                </div>

                <Button
                  disabled={this.state.searchDisabled}
                  appearance='secondary'
                  type='submit'>
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      );
    }
  }

  return <InlineForm />;
};

export default Medication;
