import React from "react";
import "@innovaccer/design-system/css";
import {
    PageHeader,
    Card,
    Label,
    Input,
    Button,
} from "@innovaccer/design-system";

import "./Diagnostic.css";

const Diagnostic = () => {
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
                searchDisabled: Object.keys(updatedData).every(
                    (key) => !updatedData[key]
                ),
            });
        }

        onSubmit(e) {
            e.preventDefault();
            console.log(this.state.data);
            return false;
        }

        render() {

            return (
                <div className="d-flex flex-column bg-secondary-lightest vh-100 pb-6">
                    <PageHeader title="Diagnostic Results" separator={false} />
                    <div className="w-100">
                        <Card className="px-6 py-6">
                            <h1></h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="d-flex flex-wrap">
                                    <div className="mr-12 mb-10">
                                        <Label withInput={true}>Test Name</Label>
                                        <Input
                                            name="Diagonsis Name"
                                            type="text"
                                            placeholder="Name of Test"
                                            icon="add_box"
                                            autocomplete={"on"}
                                            onChange={(event) =>
                                                this.onChange(event.target.value, event.target.name)
                                            }
                                        />
                                    </div>

                                </div>
                                <div className="mr-12 mb-8">
                                    <h2>Specimen</h2>
                                </div>
                                <div className="d-flex flex-wrap">
                                    <div className="mr-12 mb-10">
                                        <Label withInput={true}>Type</Label>
                                        <Input
                                            name="Diagonsis Name"
                                            type="text"
                                            placeholder="Type of Diagnosis"
                                            icon="add_box"
                                            autocomplete={"on"}
                                            onChange={(event) =>
                                                this.onChange(event.target.value, event.target.name)
                                            }
                                        />
                                    </div>
                                    <div className="mr-12 mb-10">
                                        <Label withInput={true}>Method</Label>
                                        <Input
                                            name="Diagonsis Name"
                                            type="text"
                                            placeholder="Method of Diagnosis"
                                            icon="add_box"
                                            autocomplete={"on"}
                                            onChange={(event) =>
                                                this.onChange(event.target.value, event.target.name)
                                            }
                                        />
                                    </div>
                                    <div className="mr-12 mb-10">
                                        <Label withInput={true}>Body Site</Label>
                                        <Input
                                            name="Diagonsis Name"
                                            type="text"
                                            placeholder="Site in the body"
                                            icon="add_box"
                                            autocomplete={"on"}
                                            onChange={(event) =>
                                                this.onChange(event.target.value, event.target.name)
                                            }
                                        />
                                    </div>

                                </div>

                                <div className="d-flex flex-wrap">
                                    <div className="mr-12 mb-10">
                                        <Label withInput={true}>Test Results</Label>
                                        <Input
                                            name="Diagonsis Name"
                                            type="text"
                                            placeholder="Result of Diagnosis"
                                            icon="add_box"
                                            autocomplete={"on"}
                                            onChange={(event) =>
                                                this.onChange(event.target.value, event.target.name)
                                            }
                                        />
                                    </div>

                                </div>

                                <Button
                                    disabled={this.state.searchDisabled}
                                    appearance="secondary"
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

    return <InlineForm />;
};

export default Diagnostic;

