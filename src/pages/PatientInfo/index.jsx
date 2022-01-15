import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import { useState, useEffect } from "react";
import Prescription from "../ePrescription";
import { Button, PageHeader } from "@innovaccer/design-system";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const PatientInfo = ({ getToken }) => {
  //for storing 2 API data we have used dataList: to store patientInfo and dataList2 : to store medical summary of particular patient.
  const [dataList, setDataList] = useState([]);
  const [dataList2, setDataList2] = useState([]);

  useEffect(() => {
    const getDetails = () => {
      fetch("https://backend-django-innovaccer.herokuapp.com/patientInfo", {
        method: "GET",
        headers: {
          Authorization: `Token ${getToken().token}`,
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setDataList(response);
          console.log(getToken().token);
          console.log("response===", response);
        })
        .catch((error) => console.log(error));
    };

    if (getToken().token) {
      getDetails();
    }
  }, []);
//Check Run 
  // var b = dataList2.map((item) => {
  //   console.log("data2===", item.patient_id);
  //   return item.patient_id;
  // });
  // var c = b[0];
  // console.log("c===", c);

//Schema 1 for Patient Info: ID, Name, Gender, Age, Details, Prescription link
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Name",
      accessor: "name",
    },

    {
      Header: "Gender",
      accessor: "gender",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Details",
      accessor: "id",
      Cell: (v) => (
        <Button
          appearance="primary"
          aria-label="Submit your response"
          size="regular"
          onClick={() => handleDetailClick(v.value)}//getting medical summary based on id of patient
        >
          Details
        </Button>
      ),
    },
    {
      Header: "Prescription",
      accessor: "id",
      Cell: (v) => (
        <Button
          appearance="primary"
          aria-label="Submit your response"
          size="regular"
          onClick={() => handlePrescriptionClick(v.value)}//Linking to eprescription
        >
          Prescription
        </Button>
      ),
    },
  ];
  
  /*Schema 2 Holding data like : 
  ID, Amount, Amount Unit, Description, Form, Medication_item, Expiry,
  Strength, Batch ID
  */

  const columns2 = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Amout",
      accessor: "amount",
    },
    {
      Header: "Amout Unit",
      accessor: "amount_unit",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Form",
      accessor: "form",
    },
    {
      Header: "Medication Item",
      accessor: "medication_item",
    },
    {
      Header: "Expiry",
      accessor: "expire",
    },

    {
      Header: "Strength",
      accessor: "strength_concentration",
    },
    {
      Header: "Batch Id",
      accessor: "batch_id_timing",
    },
  ];

  const handlePrescriptionClick = (id) => {
    /* 
     Linking need to be done to redirect to ePrescription
    
    
    
    */
  };
/*
Getting API data from MedicalSummary for each ID number
Storing the response in DataList2 

*/
  const handleDetailClick = (id) => {
    console.log("id===", id);

    fetch(
      `https://backend-django-innovaccer.herokuapp.com/medicalSummary/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Token ${getToken().token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setDataList2(response);
        console.log(response);
      })

      .catch((error) => console.log(error));
  };

  return (
    /*
    We have used ReactTable to create a table for our Patient Details
    Nested table is used to show the Medical Summary for each Patient

    */
    <>
      <PageHeader title="Patient Information" separator={false} />
      <h1></h1>
      <ReactTable
        showMenu={true}
        withHeader={true}
        filterPosition="HEADER"
        headerOptions={{
          withSearch: true,
        }}
        withPagination={true}
        paginationType="basic"
        pageSize={4}
        onPageChange={(newPage) => console.log(`on-page-change:- ${newPage}`)}
        SubComponent={true}
          
        data={dataList}//Patient Info Table
        columns={columns}
        SubComponent={(row) => {
          {
            return (
              <ReactTable
                data={dataList2}//Nested Table
                columns={columns2}
                defaultPageSize={3}
                showPagination={false}
              />
            );
          }
        }}
      
      />
    </>
  );
};
export default PatientInfo;
