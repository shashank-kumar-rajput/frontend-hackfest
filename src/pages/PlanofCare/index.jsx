import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
} from '@innovaccer/design-system';
import './PlanofCare.css';

const PlanofCare = () => {
  const [formData, setFormData] = useState({
    carePlanName: '',
    description: '',
    reason: '',
    typeOfDiet: '',
    bedRest: 0,
  });

  const handleSubmit = (e) => {
    
    e.preventDefault();
    fetch('https://backend-django-innovaccer.herokuapp.com/addOnePlanCare/5', {
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
      .then((res) => console.log(res), alert("Submitted Successfully"))
      .catch((err) => console.log(err));
  };

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
                    setFormData({ ...formData, typeOfDiet: e.target.value })
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
                    setFormData({ ...formData, bedRest: e.target.value })
                  }
                />
              </div>
            </div>
            <Button appearance='secondary' type='submit' className='submmit-btn'>
              Submit
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default PlanofCare;
