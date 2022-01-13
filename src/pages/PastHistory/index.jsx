import React from 'react';
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
  Textarea,
} from '@innovaccer/design-system';

const PastHistory = () => {
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
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    render() {
      return (
        <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
          <PageHeader title='Past History of illnesses' separator={false} />
          <div className='w-100'>
            <Card className='px-6 py-6'>
              <h1></h1>
              <form onSubmit={this.onSubmit}>
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
                        this.onChange(event.target.value, event.target.name)
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
                        this.onChange(event.target.value, event.target.name)
                      }
                    />
                  </div>

                  <div
                    className='mr-12 mb-10'
                    style={{ width: 'var(--spacing-9)' }}>
                    <Label withInput={true}>Date of onset</Label>
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
                      searchPlaceholder='Severity'
                      withSearch={true}
                    />
                  </div>
                </div>
                <div className='mr-12 mb-10'>
                  <h1>Problem Qualifier</h1>
                </div>
                <div className='d-flex flex-wrap'>
                  <div
                    className='mr-12 mb-10'
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
                    className='mr-12 mb-10'
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
                    className='mr-12 mb-10'
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

export default PastHistory;
