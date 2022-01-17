import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
  Toast,
} from '@innovaccer/design-system';
import './Diagnostic.css';

const Diagnostic = ({getToken,id}) => {
  const [formData, setFormData] = useState({
    test_name: '',
    type: '',
    method_of_diagnosis: '',
    body_site: '',
    test_result: '',
    patient_id: '',
  });

  formData.patient_id={id}
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://backend-django-innovaccer.herokuapp.com/addOneDignosticResult/${id}`, {
      method: 'POST',
      headers: { 
      'Content-Type': 'application/json',
      Authorization: `Token ${getToken().token}`,
     },
     body: JSON.stringify({ ...formData }),
    })
      .then(()=> console.log(currentData))
      .then((res) => res.json())
      .then((res) => console.log(res), alert("Submitted Successfully"))
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex flex-column bg-secondary-lightest vh-100 pb-6'>
      <PageHeader title='Diagnostic Results' separator={false} />
      <div className='w-100'>
        <Card className='px-6 py-6'>
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Test Name</Label>
                <Input
                  name='Diagonsis Name'
                  type='text'
                  placeholder='Name of Test'
                  icon='add_box'
                  autocomplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, test_name: e.target.value })
                  }
                />
              </div>
            </div>
            <div className='mr-12 mb-8'>
              <h2>Specimen</h2>
            </div>
            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Type</Label>
                <Input
                  name='Diagonsis Name'
                  type='text'
                  placeholder='Type of Diagnosis'
                  icon='add_box'
                  autocomplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Method</Label>
                <Input
                  name='Diagonsis Name'
                  type='text'
                  placeholder='Method of Diagnosis'
                  icon='add_box'
                  autocomplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, method_of_diagnosis: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Body Site</Label>
                <Input
                  name='Diagonsis Name'
                  type='text'
                  placeholder='Site in the body'
                  icon='add_box'
                  autocomplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, body_site: e.target.value })
                  }
                />
              </div>
            </div>

            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Test Results</Label>
                <Input
                  name='Diagonsis Name'
                  type='text'
                  placeholder='Result of Diagnosis'
                  icon='add_box'
                  autocomplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, test_result: e.target.value })
                  }
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

export default Diagnostic;
