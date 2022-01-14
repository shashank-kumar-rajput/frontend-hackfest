import React, { useState } from 'react';
import '@innovaccer/design-system/css';
import './Documents.css';
import {
  Row,
  Column,
  Card,
  CardBody,
  Heading,
  Button,
  Divider,
} from '@innovaccer/design-system';

const Documents = () => {
  const [medicalSummaryDoc, setMedicalSummaryDoc] = useState(true);
  const [problemListDoc, setProblemListDoc] = useState(true);
  const [dignosticsResultsDoc, setDignosticsResultsDoc] = useState(true);
  const [pastHistoryDoc, setPastHistoryDoc] = useState(true);
  const [planOfCareDoc, setPlanOfCareDoc] = useState(true);
  const [prescriptionDoc, setPrescriptionDoc] = useState(true);

  const MedicalSummaryDoc = () => {
    return (
      <div>
        <h1>Fetaures</h1>
        <div className=''>
          <Row>
            <Column size='10'>
              <Card className='pb-6' shadow='none'>
                <div className='p-8'>
                  <CardBody className='p-0'>
                    <Row className='p-4'>
                      <Heading size='s'>Medical Summary</Heading>
                    </Row>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>1. Medication Item</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: Name of the medication, vaccine or other
                          therapeutic/prescribable item which was the focus of
                          the activity.{' '}
                        </p>
                        <br />
                        <p>
                          example: 'Atenolol 100mg' or 'Tenormin tablets 100mg'.{' '}
                        </p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>2. Form</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: The formulation or presentation of the
                          medication or medication component.
                        </p>
                        <br />
                        <p>
                          example: 'tablet', 'capsule', 'cream', 'infusion
                          fluid' or 'inhalation powder'.{' '}
                        </p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>3. Strength Concentration</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: The strength of the medication or medication
                          component, as a concentration.
                        </p>
                        <br />
                        <p>
                          Comment: This element is used for liquid or semisolid
                          medications, or medications intended to be diluted in
                          a liquid before administration. For example: '10
                          mg/ml', '20 mg/g', '5 %', '10,000 SQ-U/ml'.{' '}
                        </p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>4. Presentation (Unit)</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: The unit of presentation for a single dose of
                          the medication, for use with the 'Strength denominator
                          unit' element.
                        </p>
                        <br />
                        <p>
                          Comment: For example: 'tablet', 'capsule', 'puff',
                          'inhalation'. In most cases, like for tablets and
                          capsules, the unit of presentation is identical to the
                          Form. For some presentations such as inhalers, the
                          Form may be 'inhalation powder', 'inhalation aerosol'
                          or 'inhaler' while the unit of presentation is
                          'inhalation', 'puff', or 'dose'.
                        </p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>5. Manufacture</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: The manufacturer of the medication or
                          medication component.
                        </p>
                        <br />
                        <p>example: 'Abbott'. </p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>6. Expire</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: The expiry date and/or time of the medication
                          or medication component, as given by the manufacturer
                          or individual preparing the mixture.
                        </p>
                        <br />
                        <p>example: '2022-05-23'.</p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>7. Batch id Timing</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          The identifier assigned to the production batch by the
                          manufacturer during production.{' '}
                        </p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>8. Amount</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: The value of the amount of medication or
                          medication component.
                        </p>
                        <br />
                        <p>example: '1', '1.5', '1000'.</p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>9. Amount Unit</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: The unit of the amount of medication or
                          medication component.
                        </p>
                        <br />
                        <p>example: 'mg', 'ml', 'IU'.</p>
                        <br />
                      </Column>
                    </div>
                    <Divider appearance='header' />
                    <div className='px-4 pt-4'>
                      <Heading size='s'>10. Description</Heading>
                      <br />
                      <Column className='px-4'>
                        <p>
                          Title: Narrative description of the medication or
                          medication component where it is not possible to
                          describe this fully using structured elements.
                        </p>
                        <br />
                      </Column>
                    </div>
                  </CardBody>
                </div>
              </Card>
            </Column>
          </Row>
        </div>
        </div>
    );
  };

  const ProblemListDoc = () => {
    return (
      <Row>
        <Column size='10'>
          <Card className='pb-6' shadow='none'>
            <div className='p-8'>
              <CardBody className='p-0'>
                <Row className='p-4'>
                  <Heading size='s'>Problem List</Heading>
                </Row>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>1. Diagnosis Name</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Identification of the problem or diagnosis, by
                      name.
                    </p>
                    <br />
                    <p>
                      Comment: Coding of the name of the problem or diagnosis
                      with a terminology is preferred, where possible.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>2. Body Site</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Identification of a simple body site for the
                      location of the problem or diagnosis.
                    </p>
                    <br />
                    <p>
                      Comment: Coding of the name of the anatomical location
                      with a terminology is preferred, where possible.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>3. Date Of Onset</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Estimated or actual date/time that signs or
                      symptoms of the problem/diagnosis were first observed.
                    </p>
                    <br />
                    <p>
                      Comment: Data captured/imported as "Age at onset" should
                      be converted to a date using the subject's date of birth.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>4. Severity</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: An assessment of the overall severity of the
                      problem or diagnosis.
                    </p>
                    <br />
                    <p>
                      Comment: If severity is included in the Problem/diagnosis
                      name via precoordinated codes, this data element becomes
                      redundant. Note: more specific grading of severity can be
                      recorded using the Specific details SLOT.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>5. Diagnostic Certainity</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The level of confidence in the identification of
                      the diagnosis.
                    </p>
                    <br />
                  </Column>
                </div>
              </CardBody>
            </div>
          </Card>
        </Column>
      </Row>
    );
  };

  const DignosticsResultsDoc = () => {
    return (
      <Row>
        <Column size='10'>
          <Card className='pb-6' shadow='none'>
            <div className='p-8'>
              <CardBody className='p-0'>
                <Row className='p-4'>
                  <Heading size='s'>Dignostics Results</Heading>
                </Row>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>1. Test Name</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Name of the laboratory investigation performed on
                      the specimen(s).
                    </p>
                    <br />
                    <p>
                      Comment: A test result may be for a single analyte, or a
                      group of items, including panel tests. It is strongly
                      recommended that 'Test name' be coded with a terminology,
                      for example LOINC or SNOMED CT. For example: 'Glucose',
                      'Urea and Electrolytes', 'Swab', 'Cortisol (am)',
                      'Potassium in perspiration' or 'Melanoma histopathology'.
                      The name may sometimes include specimen type and patient
                      state, for example 'Fasting blood glucose' or include
                      other information, as 'Potassium (PNA blood gas)'.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>2. Description</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Narrative description about the observed clinical
                      finding.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>3. Test Result</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The result, including findings and the laboratory's
                      interpretation, of an investigation performed on specimens
                      collected from an individual or related to that
                      individual.
                    </p>
                    <br />
                  </Column>
                </div>
              </CardBody>
            </div>
          </Card>
        </Column>
      </Row>
    );
  };

  const PastHistoryDoc = () => {
    return (
      <Row>
        <Column size='10'>
          <Card className='pb-6' shadow='none'>
            <div className='p-8'>
              <CardBody className='p-0'>
                <Row className='p-4'>
                  <Heading size='s'>Past History</Heading>
                </Row>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>1. Problem/Diagnosis Name</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Identification of the problem or diagnosis, by
                      name.
                    </p>
                    <br />
                    <p>
                      Comment: Coding of the name of the problem or diagnosis
                      with a terminology is preferred, where possible.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>2. Body Site</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Identification of a simple body site for the
                      location of the problem or diagnosis.
                    </p>
                    <br />
                    <p>
                      Comment: Coding of the name of the anatomical location
                      with a terminology is preferred, where possible.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>3. Date Of Onsite</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Estimated or actual date/time that signs or
                      symptoms of the problem/diagnosis were first observed.
                    </p>
                    <br />
                    <p>
                      Comment: Data captured/imported as "Age at onset" should
                      be converted to a date using the subject's date of birth.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>4. Severity</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: An assessment of the overall severity of the
                      problem or diagnosis.
                    </p>
                    <br />
                    <p>
                      Comment: If severity is included in the Problem/diagnosis
                      name via precoordinated codes, this data element becomes
                      redundant. Note: more specific grading of severity can be
                      recorded using the Specific details SLOT.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>5. Problem Qualifier</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Contextual or temporal qualifier for a specified
                      problem or diagnosis.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>5. Diagnostic Certainty</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The level of confidence in the identification of
                      the diagnosis.
                    </p>
                    <br />
                  </Column>
                </div>
              </CardBody>
            </div>
          </Card>
        </Column>
      </Row>
    );
  };

  const PlanOfCareDoc = () => {
    return (
      <Row>
        <Column size='10'>
          <Card className='pb-6' shadow='none'>
            <div className='p-8'>
              <CardBody className='p-0'>
                <Row className='p-4'>
                  <Heading size='s'>Plan Of Care</Heading>
                </Row>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>1. Care Plan Name</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>Title: Name of care plan.</p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>2. Description</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Description of activity performed/enacted against
                      the plan.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>3. Reason</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Reason for activity being performed /enacted against the
                      plan.
                    </p>
                    <br />
                  </Column>
                </div>
              </CardBody>
            </div>
          </Card>
        </Column>
      </Row>
    );
  };

  const PrescriptionDoc = () => {
    return (
      <Row>
        <Column size='10'>
          <Card className='pb-6' shadow='none'>
            <div className='p-8'>
              <CardBody className='p-0'>
                <Row className='p-4'>
                  <Heading size='s'>Prescription</Heading>
                </Row>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>1. Medication Item</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Name of the medication, vaccine or other
                      therapeutic/prescribable item which was the focus of the
                      activity.
                    </p>
                    <br />
                    <p>
                      example: 'Atenolol 100mg' or 'Tenormin tablets 100mg'.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>2. Substance Name</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: Identification of a simple body site for the
                      location of the problem or diagnosis.
                    </p>
                    <br />
                    <p>example: 'Zinacef 750 mg powder' or 'cefuroxim'.</p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>3. Form</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The formulation or presentation of the medication
                      or medication component.
                    </p>
                    <br />
                    <p>
                      Comment: For example: 'tablet', 'capsule', 'cream',
                      'infusion fluid' or 'inhalation powder'. Coding of the
                      form with a terminology is preferred, where possible.
                      Medicines catalogues may differentiate between
                      administrable form 'solution for injection' and product
                      form 'powder for solution for injection'.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>4. Strength</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The strength of the medication or medication
                      component, expressed as a ratio.
                    </p>
                    <br />
                    <p>
                      Comment: In some cases, as for liquid or semisolid
                      medications, the denominator of the strength ratio is a
                      physical quantity, for example 2 mg/5 ml. In some of these
                      cases the denominator also reflects the actual volume of
                      the component: 5 ml in the previous example. In this case
                      the 'Strength (concentration)' would be 0.4 mg/ml. In
                      other cases, where the strength involves a denominator
                      which is not a physical quantity, for example 4 mg/tablet,
                      the denominator is expressed as a unitary value '1' with a
                      unit of '1', and 'tablet' is carried in the 'Unit of
                      presentation' element. This arrangement was chosen to
                      align with the approach adopted by the ISO IDMP standard
                      for medication catalogues.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>5. Strength Unit</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The unit of the numerator/denominator of the
                      strength fraction.
                    </p>
                    <br />
                    <p>example: 'g', 'ml'.</p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>6. Route</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The route by which the ordered item was, or is to
                      be, administered into the subject's body.
                    </p>
                    <br />
                    <p>
                      example: 'oral', 'intravenous', or 'topical'. Coding of
                      the route with a terminology is preferred, where possible.
                      Multiple potential routes may be specified.
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>7. Dosage Instructions</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>Title: Text description of the dose.</p>
                    <br />
                    <p>
                      example: "Apply ointment to affected area until it
                      glistens".
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>8. Duration</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The frequency as number of times per time period
                      that the activity is to take place.
                    </p>
                    <br />
                    <p>
                      example: "4 times per day" or "3 to 4 times per hour".
                    </p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>9. Max Amount</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The value of the amount of medication administered
                      at one time, as a real number, or range of real numbers,
                      and associated with the Dose unit.
                    </p>
                    <br />
                    <p>example: 1, 1.5, 0.125 or 1-2, 12.5-20.5</p>
                    <br />
                  </Column>
                </div>
                <Divider appearance='header' />
                <div className='px-4 pt-4'>
                  <Heading size='s'>10. Max Amount Dose Unit</Heading>
                  <br />
                  <Column className='px-4'>
                    <p>
                      Title: The unit which is associated with the Dose amount.
                    </p>
                    <br />
                    <p>
                      example: 'tablet','mg'. Coding of the dose unit with a
                      terminology is preferred, where possible.
                    </p>
                    <br />
                  </Column>
                </div>
              </CardBody>
            </div>
          </Card>
        </Column>
      </Row>
    );
  };

  return (
    <div>
       <MedicalSummaryDoc />
       <ProblemListDoc /> 
       <DignosticsResultsDoc /> 
       <PastHistoryDoc /> 
       <PlanOfCareDoc /> 
       <PrescriptionDoc /> 
    </div>
  );
};

export default Documents;
