import "@innovaccer/design-system/css";
import React, { useState } from "react";
import {
  PageHeader,
  Card,
  Label,
  Input,
  Button,
  Textarea,
  Row,
  Column,
  Message,
} from "@innovaccer/design-system";
import "./ePrescription.css";

const Prescription = ({ getToken,id }) => {
  const [formData, setFormData] = useState({
    medication_item: "",
    substance_name: "",
    form: "",
    strength: "",
    strength_unit: "",
    route: "",
    dosage_instructions: "",
    duration: "",
    max_amount: "",
    max_amount_dose_unit: "",
    comments: "",
  });
  const [invalid, setInvalid] = useState(false);
  const [valid, setValid] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.medication_item === '' || formData.substance_name === '' || formData.form === '' 
    || formData.strength === '' || formData.strength_unit === '' || formData.route === '' 
    || formData.dosage_instructions === '' || formData.duration === '' || formData.max_amount === ''
    || formData.max_amount_dose_unit === '') {
      setInvalid(true);
      setValid(false)
    } 
    else {
    fetch(
      `https://backend-django-innovaccer.herokuapp.com/addOnePrescription/${id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${getToken().token}`,
        },
        body: JSON.stringify({ ...formData }),
      }
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
}
 
  return (
    <div className="d-flex flex-column bg-secondary-lightest vh-100 pb-6">
      <PageHeader title="ePrescription" separator={false} />

      <div className="w-100">
        <Card className="px-6 py-6">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-wrap">
              <div className="mr-12 mb-10">
                <Label withInput={true}>Medication Item</Label>
                <Input
                  name="Medication Item"
                  type="text"
                  placeholder="Name of Medicine"
                  icon="add_box"
                  autoComplete={"on"}
                  onChange={(e) =>
                    setFormData({ ...formData, medication_item: e.target.value })
                  }
                />
              </div>

              <div
                className="d-flex flex-wrap"
                style={
                  ({ flex: "no-wrap" },
                  { display: "inline-block" },
                  { whitespace: "nowrap" })
                }
              >
                <div className="mr-12 mb-10">
                  <Label withInput={true}>Substance Name</Label>
                  <Input
                    name="Description"
                    type="text"
                    placeholder="Name of Substance"
                    autocomplete={"off"}
                    onChange={(e) =>
                      setFormData({ ...formData, substance_name: e.target.value })
                    }
                  />
                </div>
                <div className="mr-12 mb-10">
                  <Label withInput={true}>Form</Label>
                  <Input
                    name="form"
                    type="text"
                    placeholder="type of medication i.e Tablet/cream/infusion"
                    autoComplete={"on"}
                    onChange={(e) =>
                      setFormData({ ...formData, form: e.target.value })
                    }
                  />
                </div>
                <div className="mr-12 mb-10">
                  <Label withInput={true}>Strength Concentration</Label>
                  <Input
                    name="Concentration"
                    type="text"
                    placeholder="Strength of Dosage "
                    autoComplete={"off"}
                    onChange={(e) =>
                      setFormData({ ...formData, strength: e.target.value })
                    }
                  />
                </div>
                <div className="mr-12 mb-10">
                  <Label withInput={true}>Strength Unit</Label>
                  <Input
                    name="strengthUnit"
                    type="text"
                    placeholder="tablet/mg/ml "
                    autoComplete={"off"}
                    onChange={(e) =>
                      setFormData({ ...formData, strength_unit: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="mr-12 mb-10">
                <Label withInput={true}>Route</Label>
                <Input
                  name="Route"
                  type="text"
                  placeholder="Method of Dosage:infusion/oral"
                  autocomplete={"off"}
                  onChange={(e) =>
                    setFormData({ ...formData, route: e.target.value })
                  }
                />
              </div>

              <div className="mr-12 mb-10">
                <Label htmlFor="description" withInput={true}>
                  Dosage Instruction
                </Label>
                <Textarea
                  aria-labelledby="description"
                  className="w-200"
                  id="description"
                  name="description"
                  placeholder="Enter the method prescribed by doctor for medication"
                  onChange={(e) =>
                    setFormData({ ...formData, dosage_instructions: e.target.value })
                  }
                />
              </div>
              <div className="mr-12 mb-10">
                <Label withInput={true}>Duration</Label>
                <Input
                  name="Duration"
                  type="text"
                  placeholder="Duration "
                  autoComplete={"off"}
                  onChange={(e) =>
                    setFormData({ ...formData, duration: e.target.value })
                  }
                />
              </div>

              <div className="mr-12 mb-10">
                <h1>Medication Safety</h1>
              </div>

              <div className="d-flex flex-wrap">
                <div className="mr-12 mb-10">
                  <Label withInput={true}>Max Amount</Label>
                  <Input
                    name="MaxAmount"
                    type="text"
                    placeholder="max safety amount of Dose "
                    autoComplete={"off"}
                    onChange={(e) =>
                      setFormData({ ...formData, max_amount: e.target.value })
                    }
                  />
                </div>
                <div className="mr-12 mb-10">
                  <Label withInput={true}>Max Amout Unit</Label>
                  <Input
                    name="amoutUnit"
                    type="text"
                    placeholder="tablet/mg/ml "
                    autoComplete={"off"}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        max_amount_dose_unit: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mr-12 mb-10">
                  <Label htmlFor="comment" withInput={true}>
                    Comment
                  </Label>
                  <Textarea
                    aria-labelledby="comment"
                    className="w-200"
                    id="comment"
                    name="comment"
                    placeholder="comments by doctor"
                    onChange={(e) =>
                      setFormData({ ...formData, comments: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <Button appearance="secondary" type="submit">
              Submit
            </Button>
            {invalid ?
              <Card className='px-4 py-4'>
              <Row>
                <Column size="4">
                  <Message appearance="alert" description="invalid details" />
                </Column>
              </Row>
              </Card>
            : null}
            {valid ?
              <Card className='px-4 py-4'>
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

export default Prescription;
