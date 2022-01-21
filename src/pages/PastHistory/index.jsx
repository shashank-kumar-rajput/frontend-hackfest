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
  Row,
  Column,
  Message,
} from '@innovaccer/design-system';

const PastHistory = () => {
  const [formData, setFormData] = useState({
    diagnosisName: '',
    bodySite: '',
    dateOfOnSet: new Date(),
    severity: '',
    diagnosticCertainty: 0,
    active: '',
    resolutionPhase: '',
    occurance: '',
  });
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (formData.diagnosisName === '' || formData.bodySite === '' || formData.dateOfOnSet === '' || formData.severity === '' 
    || formData.diagnosticCertainty === '' || formData.active === '' || formData.resolutionPhase === '' || formData.occurance === '') {
      setInvalid(true);
      setValid(false)
    } 
    else {
    // fetch('https://backend-django-innovaccer.herokuapp.com/addOneRecord', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(currentData),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res),alert("Submitted Successfully"))
    //   .catch((err) => console.log(err));
    console.log(formData);
  };
}

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
                  onChange={(e) =>
                    setFormData({ ...formData, diagnosisName: e.target.value })
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
                  onChange={(e) =>
                    setFormData({ ...formData, bodySite: e.target.value })
                  }
                />
              </div>

              <div
                className='mr-12 mb-10'
                style={{ width: 'var(--spacing-9)' }}>
                <Label withInput={true}>Date of onset</Label>
                <DatePicker
                  withInput={true}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
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
                  onChange={(option) =>
                    setFormData({ ...formData, severity: option })
                  }
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
                  onChange={(option) =>
                    setFormData({ ...formData, diagnosticCertainty: option })
                  }
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
                  onChange={(option) =>
                    setFormData({ ...formData, active: option })
                  }
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
                  onChange={(option) =>
                    setFormData({ ...formData, resolutionPhase: option })
                  }
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
                  onChange={(option) =>
                    setFormData({ ...formData, occurance: option })
                  }
                  searchPlaceholder='Recurrence'
                  withSearch={true}
                />
              </div>
            </div>

            <Button
              className='submmit-btn'
              disabled={formData.searchDisabled}
              appearance='secondary'
              type='submit'>
              Submit
            </Button>
            {invalid ?
              <Card className='px-4 py-4'>
              <Row>
                <Column size="4">
                  <Message appearance="alert" description="invalid details" />
                </Column>
              </Row>
              </Card>
            : null}
            {valid ?
              <Card className='px-4 py-4'>
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

export default PastHistory;
