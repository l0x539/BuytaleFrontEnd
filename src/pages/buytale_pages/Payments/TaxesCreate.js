
import React, { Component } from 'react';
import { connect } from "react-redux";

import { AvForm, AvField } from "availity-reactstrap-validation";
import { Card, CardBody, FormGroup, Button, Input, Label, Row, Col  } from "reactstrap";
import Select from "react-select";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

// TODO implement Countries And States, handled different way.
const optionCountries = [
    {
      label: "North America",
      options: [
        { label: "United States", value: "us" },
      ]
    },
    {
      label: "South America",
      options: [
        { label: "Argentina", value: "argentina" },
      ]
    },
    {
        label: "Africa",
        options: [
            { label: "Algeria", value: "algeria" },
        ]
    },
    {
        label: "Europe",
        options: [
          { label: "Turkey", value: "turkey" },
        ]
    },
    {
        label: "Asia",
        options: [
          { label: "Japan", value: "japan" },
        ]
    },
  ];

class TaxesCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Taxes", link : "/" },
            ],
            selectedState: null,
            selectedCountry: null,
            stateDisabled: true,
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Taxes", this.state.breadcrumbItems);
    }

    handleSelectCountry = selectedGroup => {
        this.setState({ stateDisabled: false, selectedGroup});
        this.setState({ selectedCountry: selectedGroup});
    }
    handleSelectState = selectedGroup => {
        this.setState({ selectedState: selectedGroup});
    }

    cancelEvent = () => {
        this.props.history.goBack();
    }

    render() {
        const { selectedState, selectedCountry } = this.state;
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                <h4 className="card-title">Create Tax</h4>
                                <p className="card-title-desc">Add a new Tax.</p>
                                <AvForm>
                                    <Row>
                                        <Col xl="6">
                                            <AvField
                                                name="name"
                                                label="Name"
                                                placeholder="The name of the tax rate (e.g. VAT or GST)"
                                                type="text"
                                                errorMessage="Enter a Name"
                                                validate={{ required: { value: true } }}
                                            />
                                        </Col>
                                        <Col xl="6">
                                            <AvField
                                                name="percentage"
                                                label="Percentage  "
                                                placeholder="%20"
                                                type="number"
                                                errorMessage="Enter a percentage"
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                    value: "^[0-9]+$",
                                                    errorMessage: "Only Digits"
                                                    }
                                                }}
                                            />
                                        </Col>
                                    
                                    </Row>
                                    <Row>
                                        <Col xl="6">
                                            <FormGroup>
                                                <Label className="control-label">Country</Label>
                                                <Select
                                                    value={selectedCountry}
                                                    onChange={this.handleSelectCountry}
                                                    options={optionCountries}
                                                    className="select2"
                                                />
                                            </FormGroup>
                                            
                                        </Col>
                                        <Col xl="6">
                                            <FormGroup>
                                                <Label className="control-label">State</Label>
                                                {
                                                    this.state.stateDisabled?
                                                    <Input placeholder="Select..." disabled></Input>
                                                    :
                                                    <Select
                                                    value={selectedState}
                                                    onChange={this.handleSelectState}
                                                    options={optionCountries}
                                                    className="select2"
                                                />
                                                }
                                                
                                                
                                            </FormGroup>
                                            
                                        </Col>
                                    </Row>
                                    
                                    <Row>
                                        <Col xl="12">
                                            <FormGroup className="mb-0">
                                            <Label className="control-label"></Label>
                                                <div>
                                                    <Button type="submit" color="primary" className="waves-effect waves-light mr-1">
                                                        Create
                                                    </Button>
                                                    <Button type="reset" color="secondary" className="waves-effect" onClick={this.cancelEvent}>
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </AvForm>
                            </CardBody>
                        </Card>                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(TaxesCreate)
