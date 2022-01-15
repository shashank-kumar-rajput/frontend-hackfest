import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Table,
  CardSubdued,
  Text,
} from '@innovaccer/design-system';

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

  const schema = [
    {
      name: 'id',
      displayName: 'ID',
      width: '10%',
      cellType: 'WITH_META_LIST',
      sorting: false,
    },
    {
      name: 'name',
      displayName: 'Name',
      width: '30%',
      cellType: 'WITH_META_LIST',
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
      sorting: false,
      width: '20%',
    },
    {
      name: 'view',
      displayName: 'View Details',
      width: '20%',
      sorting: false,
      cellRenderer: () => {
        return <Button appearance='transparent'>View</Button>;
      },
    },
  ];
  console.log(dataList);

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
    <>
      {dataList != [] ? (
        <>
          <h1 style={{ padding: '12px' }}>Patient Details Info</h1>
          <Card>
            <Table
              showMenu={false}
              type='resource'
              data={dataList}
              schema={schema}
              withHeader={true}
              filterPosition='HEADER'
              nestedRows={true}
              nestedRowRenderer={nestedRowRenderer}
              onRowClick={({ id, ...rest }) => handleRowClick(id)}
              headerOptions={{
                withSearch: true,
              }}
              withPagination={true}
              paginationType='basic'
              pageSize={4}
              onPageChange={(newPage) =>
                console.log(`on-page-change:- ${newPage}`)
              }
            />
          </Card>
        </>
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default PatientInfo;
