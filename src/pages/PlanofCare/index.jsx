import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
  Row,
  Column,
  Message,
} from '@innovaccer/design-system';
import './PlanofCare.css';

const PlanofCare = ({getToken,id}) => {
  const [formData, setFormData] = useState({
    carePlanName: '',
    description: '',
    reason: '',
    type_of_diet: '',
    bedrest: '',
    patient_id:''
  });
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);
  formData.patient_id={id}
  const handleSubmit = (e) => {
    
    e.preventDefault();
    if (formData.carePlanName === '' || formData.reason === '' || formData.type_of_diet === '' 
    || formData.bedrest === '' || formData.bedrest === '0') {
      setInvalid(true);
      setValid(false)
    } 
    else {
    fetch(`http://44.202.138.87:8000/addOnePlanCare/${id}`, {
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
      <PageHeader title='Plan Of Care' separator={false} />
      <div className='w-100'>
        <Card className='px-6 py-6'>
          <form onSubmit={handleSubmit}>
            <div className='d-flex flex-wrap'>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Care Plan Name</Label>
                <Input
                  name='Care Plan Name'
                  type='text'
                  placeholder='Name of Care Plan'
                  icon='add_box'
                  autocomplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, carePlanName: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Description</Label>
                <Input
                  name='Description'
                  type='text'
                  placeholder='Description of Care Plan'
                  autocomplete={'on'}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Reason</Label>
                <Input
                  name='Reason'
                  type='text'
                  placeholder='Reason of Care Plan '
                  autocomplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, reason: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Type of Diet</Label>
                <Input
                  name='Type of Diet'
                  type='text'
                  placeholder='Type of Diet'
                  autocomplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, type_of_diet: e.target.value })
                  }
                />
              </div>
              <div className='mr-12 mb-10'>
                <Label withInput={true}>Bed Rest</Label>
                <Input
                  name='Bed Rest'
                  type='Number'
                  placeholder='No of Days'
                  autocomplete={'off'}
                  onChange={(e) =>
                    setFormData({ ...formData, bedrest: e.target.value })
                  }
                />
              </div>
            </div>
            <Button appearance='secondary' type='submit' className='submmit-btn'>
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

export default PlanofCare;
