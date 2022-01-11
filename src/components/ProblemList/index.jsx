import React, { useState} from 'react';
import { useEffect } from 'react';
import '@innovaccer/design-system/css';
import { Link } from 'react-router-dom';
import {
  Card,
  Heading,
  Label,
  Input,
  Icon,
  Button,
} from '@innovaccer/design-system';


const ProblemList = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('').then(
            response => response.json()
        ).then(json => setData(json))
    }

    )
   return (
       <div>
       <ul>
            <li>{data.diagnosisName}</li>
            <li>{data.diagnosisName}</li>
            <li>{data.bodySite}</li>
            <li>{data.dateOfOnset}</li>
            <li>{data.severity}</li>
            <li>{data.diagnosticCertainity}</li>
        </ul>
       </div>

   )

}

export default ProblemList