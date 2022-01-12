import React from "react";
import "@innovaccer/design-system/css";
import { PageHeader,Card, Label, Input, Button, } from '@innovaccer/design-system';

import  './Planofcare.css';

const Planofcare = () => {

  class InlineForm extends React.Component {

    constructor(props = {}) {
      super(props);

      this.state = {
        searchDisabled: true,
        data: {},
      };

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(value, name) {
      const updatedData = { ...this.state.data, [name]: value };

      this.setState({
        data: updatedData,
        searchDisabled: Object.keys(updatedData).every(key => !updatedData[key])
      });
    }

    onSubmit(e) {
      e.preventDefault();
      console.log(this.state.data);
      return false;
    }

    render() {
     
      const options = [];
      for (let i = 1; i <= 10; i++) {
        options.push({
          label: ` ${i} times per `,
          value: ` ${i} times per`,
        });
      }
      
    
    
      return (
        <div className="d-flex flex-column bg-secondary-lightest vh-100 pb-6">
      <PageHeader
        title="Plan Of Care"
        separator={false}
      />
            <div className="w-100">
         
         <Card className="px-6 py-6">
           <h1></h1>
           <form onSubmit={this.onSubmit}>
             <div className="d-flex flex-wrap">
            
               <div className="mr-12 mb-10">
                 <Label withInput={true}>Care Plan Name</Label>
                 <Input
                   name="Care Plan Name"
                   type="text"
                   placeholder="Name of Care Plan"
                   icon="add_box"
                   autocomplete={'on'}
                   onChange={(event) => this.onChange(event.target.value, event.target.name)}
                 />
               </div>
               <div className="mr-12 mb-10">
                 <Label withInput={true}>Description</Label>
                 <Input
                   name="Description"
                   type="text"
                   placeholder="Description of Care Plan"
                   
                   autocomplete={'on'}
                   onChange={(event) => this.onChange(event.target.value, event.target.name)}
                 />
               </div>
               <div className="mr-12 mb-10">
                 <Label withInput={true}>Reason</Label>
                 <Input
                   name="Reason"
                   type="text"
                   placeholder="Reason of Care Plan "
                  
                   autocomplete={'off'}
                   onChange={(event) => this.onChange(event.target.value, event.target.name)}
                 />
               </div>
               <div className="mr-12 mb-10">
                 <Label withInput={true}>Type of Diet</Label>
                 <Input
                   name="Type of Diet"
                   type="text"
                   placeholder="Type of Diet"
                  
                   autocomplete={'off'}
                   onChange={(event) => this.onChange(event.target.value, event.target.name)}
                 />
               </div>
               <div className="mr-12 mb-10">
                 <Label withInput={true}>Bed Rest</Label>
                 <Input
                   name="Bed Rest"
                   type="Number"
                   placeholder="No of Days"
                   
                   autocomplete={'off'}
                   onChange={(event) => this.onChange(event.target.value, event.target.name)}
                 />
               </div>
               </div>
             <Button
               disabled={this.state.searchDisabled}
               appearance="primary"
               type="submit"
             >
               Submit
             </Button>
           </form>
         </Card>
       </div>
      </div>
  
      );
    }
  }

  return <InlineForm />
}

 export default Planofcare