import React from 'react'
import ReactTable from "react-table"; 
import 'react-table/react-table.css'
import  { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Table,
  CardSubdued,
  Text,
} from '@innovaccer/design-system';

 const PatientDetails =({getToken})=> {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    const getDetails = () => {
      fetch('https://backend-django-innovaccer.herokuapp.com/patientInfo', {
        method: 'GET',
        headers: {
          Authorization: `Token ${getToken().token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setDataList(response);
        })
        .catch((error) => console.log(error));
    };

    if (getToken().token) {
      getDetails();
    }
  }, []);
    const columns = [{  
      Header: 'ID',  
      accessor: 'id',
      
     }
     ,{  
      Header: 'Name',  
      accessor: 'name' ,
      }
     
     ,{  
     Header: 'Gender',  
     accessor: 'gender' ,
     }
     ,{  
     Header: 'Age',  
     accessor: 'age',
     },
     {  
      Header: 'Details',  
      accessor: 'details',
      Cell: (cell) => (
        <button
          // add on click to your custom cell
          onClick={() => console.log(cell.value)}
        >
          {" "}
          {cell.value}{" "}
        </button>
      )
    },
      
     
  ]
  const handleRowClick = (id) => {
    fetch(
      `https://backend-django-innovaccer.herokuapp.com/medicalSummary/${id}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Token ${getToken().token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  };
  const nestedRowRenderer = (props) => {
    const { data, rowIndex } = props;

    return (
      <CardSubdued className='ml-7'>
        <div className='d-flex flex-row'>
          <div style={{ width: '17%' }}>
            <Text weight='medium'>Type</Text>
          </div>
          <Text>{data.type}</Text>
        </div>
        {data.errorCode && (
          <div className='d-flex flex-row'>
            <div style={{ width: '17%' }}>
              <Text weight='medium'>Error code</Text>
            </div>
            <Text>{data.errorCode}</Text>
          </div>
        )}
        <div className='d-flex flex-row'>
          <div style={{ width: '17%' }}>
            <Text weight='medium'>Class name</Text>
          </div>
          <Text>{data.className}</Text>
        </div>
        {data.errorMessage && (
          <div className='d-flex flex-row'>
            <div style={{ width: '17%' }}>
              <Text weight='medium'>Error message</Text>
            </div>
            <Text>{data.errorMessage}</Text>
          </div>
        )}
      </CardSubdued>
    );
  };
    return (
     
     
      <ReactTable  
      showMenu={false}
      withHeader={true}
              filterPosition='HEADER'
             
              headerOptions={{
                withSearch: true,
              }}
              withPagination={true}
              paginationType='basic'
              pageSize={4}
              onPageChange={(newPage) =>
                console.log(`on-page-change:- ${newPage}`)
              }
             
      data={dataList}  
      
      columns={columns}  
     
   />
   
    )
  
}
export default PatientDetails