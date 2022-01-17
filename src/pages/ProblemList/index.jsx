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
} from '@innovaccer/design-system';
import './ProblemList.css';

const ProblemList = ({getToken,id}) => {
  const [formData, setFormData] = useState({
    diagnosisName: '',
    bodySite: '',
    dateOfOnset:'',
    severity: '',
    diagnosticCertainity: '',
    patient_id:'',
  });
  formData.patient_id={id}

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://backend-django-innovaccer.herokuapp.com/addOneProblemList/${id}`, {
      method: 'POST',
      headers: { 
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken().token}`,
     },
      body: JSON.stringify({ ...formData }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res), alert("Submitted Successfully"))
      .catch((err) => console.log(err));
    // e.preventDefault();
    // console.log({ ...formData });
    // return false;
  };
  console.log("id===",id);
  return (
    <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
      <PageHeader title='Problem List' separator={false} />
      <div className='w-100'>
        <Card className='px-6 py-6'>
          <form onSubmit={handleSubmit}>
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
                  onDateChange={(currentDate) => {
                    console.log(currentDate);
                    setFormData({ ...formData, dateOfOnset: currentDate });
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
                  onChange={(option) =>
                    setFormData({ ...formData, severity: option })
                  }
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
                    setFormData({ ...formData, diagnosticCertainity: option })
                  }
                  searchPlaceholder='Diagnostic Certainty'
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
          </form>
        </Card>
      </div>
    </div>
  );
};

export default ProblemList;
