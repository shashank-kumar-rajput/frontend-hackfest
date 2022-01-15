import React, { useState, useEffect } from 'react';
import { Card, Table, PageHeader } from '@innovaccer/design-system';

const PatientInfo = ({ getToken }) => {
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

  const schema = [
    {
      name: 'id',
      displayName: 'ID',
      width: '20%',
      sorting: false,
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '20%',
      sorting: false,
    },
    {
      name: 'age',
      displayName: 'Age',
      width: '20%',
      sorting: false,
    },
    {
      name: 'gender',
      displayName: 'Gender',
      width: '20%',
      sorting: false,
    },
  ];

  console.log(dataList);
  return (
    <>
      {dataList ? (
        <Card>
          <PageHeader title='Patient Info' separator={false} />
          <div className='d-flex flex-wrap'>
            <Table
              showMenu={false}
              separator={false}
              schema={schema}
              data={dataList}
              withHeader={true}
              headerOptions={{
                withSearch: true,
              }}
              onSearch={(currData, searchTerm) => {
                return currData.filter((d) =>
                  d.name.toLowerCase().match(searchTerm.toLowerCase())
                );
              }}
              withPagination={false}
            />
          </div>
        </Card>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default PatientInfo;
