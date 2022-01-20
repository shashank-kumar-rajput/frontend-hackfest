import React from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import { useState, useEffect } from 'react';
import { Button, PageHeader } from '@innovaccer/design-system';
import { Link } from 'react-router-dom';

const PatientInfo = ({ getToken, setId }) => {
  //for storing 2 API data we have used dataList: to store patientInfo and dataList2 : to store medical summary of particular patient.
  const [dataList, setDataList] = useState([]);
  const [dataList2, setDataList2] = useState([]);
  //Storing Data for plan of care to show to doctors about next plan of care for a Patient
  const [dataList3, setDataList3] = useState([]);
  const [dataList4, setDataList4] = useState([]);

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
          console.log(getToken().token);
          console.log('response===', response);
        })
        .catch((error) => console.log(error));
    };

    if (getToken().token) {
      getDetails();
    }
  }, []);

  //Schema 1 for Patient Info: ID, Name, Gender, Age, Details, Prescription link
  const columns = [
    {
      width: 40,

<<<<<<< HEAD
      Header: "ID",
      accessor: "id",
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
=======
      Header: 'ID',
      accessor: 'id',
>>>>>>> 72ecfd6c9cc02dd627e3f3e08dddaad6a09f70a8
    },
    {
      width: 120,

<<<<<<< HEAD
      Header: "Name",
      accessor: "name",
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
=======
      Header: 'Name',
      accessor: 'name',
>>>>>>> 72ecfd6c9cc02dd627e3f3e08dddaad6a09f70a8
    },

    {
      width: 65,

<<<<<<< HEAD
      Header: "Gender",
      accessor: "gender",
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
=======
      Header: 'Gender',
      accessor: 'gender',
>>>>>>> 72ecfd6c9cc02dd627e3f3e08dddaad6a09f70a8
    },
    {
      width: 40,

<<<<<<< HEAD
      Header: "Age",
      accessor: "age",
      Cell: row => <div style={{ textAlign: "center" }}>{row.value}</div>
=======
      Header: 'Age',
      accessor: 'age',
>>>>>>> 72ecfd6c9cc02dd627e3f3e08dddaad6a09f70a8
    },
    {
      width: 67,

      Header: 'Details',
      accessor: 'id',
      Cell: (v) => (
        
        <Button
          appearance='primary'
          aria-label='Submit your response'
          size='regular'
          onClick={() => {
            handleDetailClick(v.value);
          }} //getting medical summary based on id of patient
        >
          Details
        </Button>
      ),
    },
    {
      width: 110,

      Header: 'Prescription',
      accessor: 'id',

      Cell: (v) => (
        <Link
          className='btn btn-primary'
          onClick={() => setId(v.value)}
          to={{
            pathname: '/eprescription',
          }}>
          Prescription
        </Link>
      ),
    },
    {
      width: 160,

      Header: 'Medication Summary',
      accessor: 'id',

      Cell: (v) => (
        <Link
          className='btn btn-primary'
          onClick={() => setId(v.value)}
          to={{
            pathname: '/medication',
          }}>
          Add Medical Details
        </Link>
      ),
    },
    {
      width: 130,

      Header: 'Problem List ',
      accessor: 'id',

      Cell: (v) => (
        <Link
          className='btn btn-primary'
          onClick={() => setId(v.value)}
          to={{
            pathname: '/problemList',
          }}>
          ProblemList Addition
        </Link>
      ),
    },
    {
      width: 140,

      Header: 'Diagnostic Result ',
      accessor: 'id',

      Cell: (v) => (
        <Link
          className='btn btn-primary'
          onClick={() => setId(v.value)}
          to={{
            pathname: '/diagnostic',
          }}>
          Add Diagnostic
        </Link>
      ),
    },
    {
      width: 150,

      Header: 'Plan Of Care ',
      accessor: 'id',

      Cell: (v) => (
        <Link
          className='btn btn-primary'
          onClick={() => setId(v.value)}
          to={{
            pathname: '/planofcare',
          }}>
          Add Plan of Care
        </Link>
      ),
      
    },
  ];

  /*Schema 2 Holding data like : 
  ID, Amount, Amount Unit, Description, Form, Medication_item, Expiry,
  Strength, Batch ID
  */

  const columns2 = [
    {
      Header: 'ID',
      accessor: 'id',
    },
    {
      Header: 'Amount',
      accessor: 'amount',
    },
    {
      Header: 'Amount Unit',
      accessor: 'amount_unit',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Form',
      accessor: 'form',
    },
    {
      Header: 'Medication Item',
      accessor: 'medication_item',
    },
    {
      Header: 'Expiry',
      accessor: 'expire',
    },

    {
      Header: 'Strength',
      accessor: 'strength_concentration',
    },
    {
      Header: 'Batch Id',
      accessor: 'batch_id_timing',
    },
  ];

  /*Schema 3 Holding data like : 
  ID, Amount, Amount Unit, Description, Form, Medication_item, Expiry,
  Strength, Batch ID
  */

  const columns3 = [
    {
      Header: 'Care Plan Name',
      accessor: 'carePlanName',
    },
    {
      Header: 'Description',
      accessor: 'description',
    },
    {
      Header: 'Reason',
      accessor: 'reason',
    },
    {
      Header: 'Type of Diet',
      accessor: 'type_of_diet',
    },
    {
      Header: 'Bed Rest',
      accessor: 'bedrest',
    },
  ];

  /*Schema 4 Holding data like : 
 Diagnosis Name, Test result
  */

  const columns4 = [
    {
      Header: 'Test Name',
      accessor: 'test_name',
    },
    {
      Header: 'Type',
      accessor: 'type',
    },
    {
      Header: 'Method',
      accessor: 'method_of_diagnosis',
    },
    {
      Header: 'Body Site',
      accessor: 'body_site',
    },
    {
      Header: 'Test Result',
      accessor: 'test_result',
    },
  ];

  const handlePrescriptionClick = (id) => {
    /* 
     Linking need to be done to redirect to ePrescription
    
    
    
    */
    console.log('Redirect');
  };
  /*
Getting API data from MedicalSummary for each ID number
Storing the response in DataList2 

*/
  const handleDetailClick = (id) => {
    Promise.all([
      fetch(
        `https://backend-django-innovaccer.herokuapp.com/medicalSummary/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Token ${getToken().token}`,
          },
        }
      )
        .then((response1) => response1.json())
        .then((response1) => {
          setDataList2(response1);
          console.log(response1);
        }),
      fetch(
        `https://backend-django-innovaccer.herokuapp.com/diagnosticResult/${id}`,
        {
          method: 'GET',
          headers: {
            Authorization: `Token ${getToken().token}`,
          },
        }
      )
        .then((response2) => response2.json())
        .then((response2) => {
          setDataList3(response2);
          console.log(response2);
        }),
      fetch(`https://backend-django-innovaccer.herokuapp.com/planCare/${id}`, {
        method: 'GET',
        headers: {
          Authorization: `Token ${getToken().token}`,
        },
      })
        .then((response3) => response3.json())
        .then((response3) => {
          setDataList4(response3);
          console.log(response3);
        }),
    ]);
  };

  return (
    /*
    We have used ReactTable to create a table for our Patient Details
    Nested table is used to show the Medical Summary for each Patient

    */
    <>
      <PageHeader title='Patient Information' separator={false} />
      <ReactTable
        showMenu={true}
        withHeader={true}
        filterPosition='HEADER'
        headerOptions={{
          withSearch: true,
        }}
        withPagination={true}
        paginationType='basic'
        pageSize={4}
        onPageChange={(newPage) => console.log(`on-page-change:- ${newPage}`)}
        SubComponent={true}
        data={dataList} //Patient Info Table
        columns={columns}
        SubComponent={(row) => {
          {
            return (
              <div>
                <PageHeader title='Medical History:' separator={false} />
                <ReactTable
                  data={dataList2} //Nested Table
                  columns={columns2}
                  defaultPageSize={3}
                  showPagination={false}
                  SubComponent={(id) => {
                    {
                      return (
                        <>
                          <PageHeader title='Care Plan:' separator={false} />

                          <ReactTable
                            data={dataList4} //Nested Table
                            columns={columns3}
                            defaultPageSize={3}
                            showPagination={false}
                            SubComponent={(id) => {
                              {
                                return (
                                  <>
                                    <PageHeader
                                      title='Diagnostic Reports:'
                                      separator={false}
                                    />

                                    <ReactTable
                                      data={dataList3} //Nested Table
                                      columns={columns4}
                                      defaultPageSize={3}
                                      showPagination={false}
                                    />
                                  </>
                                );
                              }
                            }}
                          />
                        </>
                      );
                    }
                  }}
                />
              </div>
            );
          }
        }}
      />
    </>
  );
};
export default PatientInfo;
