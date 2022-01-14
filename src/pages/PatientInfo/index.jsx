import { Icon, GridCell, Card, Table } from '@innovaccer/design-system';
import React from 'react';
import '@innovaccer/design-system/css';
// import { Card, Table } from '@innovaccer/design-system';
import {
    PageHeader
  } from '@innovaccer/design-system';
const PatientInfo=() => {
    const data = [
      {
        name: 'Indrapreet',
        age: "34",
        gender: "Male",
        
      },
      {
        name: 'ABCD',
        age: "21",
        gender: "Male",
        
      },
      {
        name: 'Tarun',
        age: "22",
        gender: "Male",
        
      },
      {
        name: 'Aetna',
        age: "26",
        gender: "female",
        
      },
      {
        name: 'Ok',
        age: "11",
        gender: "Male",
        
      },
    ];
  
    const schema = [
      {
        name: 'name',
        displayName: 'Name',
        width: '20%',
        sorting: false
      },
      {
        name: 'gender',
        displayName: 'Gender',
        width: '20%',
        sorting: false
      },
      {
        name: 'age',
        displayName: 'Age',
        width: '20%',
        sorting: false
      },
    ];
  
    return (

        <Card>
             <PageHeader title='PatientInfo' separator={false} />
             <div className="d-flex flex-wrap">
          <Table
            showMenu={false}
            separator={false}
            data={data}
            schema={schema}
            withHeader={true}
            headerOptions={{
              withSearch: true
            }}
            onSearch={(currData, searchTerm) => {
              return currData.filter(d =>
                d.name.toLowerCase().match(searchTerm.toLowerCase())
              );
            }}
            withPagination={false}
          />
          </div>
        </Card>
    );
  }
      
export default PatientInfo;
  
      