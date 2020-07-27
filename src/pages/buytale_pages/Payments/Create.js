
import React, { Component } from 'react';
import { connect } from "react-redux";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { Card, CardBody, FormGroup, Button, Label, CardHeader } from "reactstrap";
import Select from "react-select";

import { Row, Col } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Create extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "/payments" },
                { title : "create", link : "/" },
            ],
            optionGroup: [
                            {
                            label: "Package 1",
                            options: [
                                { label: "SubPackage1", value: "My Package" },
                                { label: "SubPackage2s", value: "My Package2" },
                            ]
                            },
                            {
                            label: "Package 2",
                            options: [
                                { label: "SubPackage2", value: "My Package" },
                                { label: "SubPackage2s", value: "My Package2" },
                            ]
                            },
                        ],
            selectedGroup: null,
            selectedMulti: null,
        }
    } 

    // Select Packages
    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };
    handleMulti = selectedMulti => {
        this.setState({ selectedMulti });
    };

    cancelEvent = () => {
        this.setState({ 
            selectedGroup: null,
            selectedMulti: null,
        });
        document.getElementById("note").value = "";

    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Create a manual payment.", this.state.breadcrumbItems);
    }

    render() {
        const { selectedMulti, optionGroup } = this.state;

        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                <h4 className="card-title">Create Payment</h4>
                                <p className="card-title-desc">Add a payment to a player manually.</p>
                                <AvForm>
                                    <Row>
                                        <Col xl="8">
                                            <AvField
                                                name="player"
                                                label="Player  "
                                                placeholder="Username or ID of the player to receive the package(s) (up to 25 comma separated usernames)"
                                                type="text"
                                                errorMessage="Enter a Name"
                                                validate={{ required: { value: true } }}
                                            />
                                        </Col>
                                        <Col xl="4">
                                            <AvField
                                                name="price"
                                                label="Price  "
                                                placeholder="$0.0"
                                                type="number"
                                                errorMessage="Enter an amount"
                                                validate={{
                                                    required: { value: true },
                                                    pattern: {
                                                    value: "^[0-9.]+$",
                                                    errorMessage: "Only Digits"
                                                    }
                                                }}
                                            />
                                        </Col>
                                    
                                    </Row>
                                    <Row>
                                        <Col xl="12">
                                        <FormGroup>
                                            <Label>Note</Label>
                                            <div>
                                                <textarea name="note" id="note" required className="form-control" rows="5"></textarea>
                                            </div>
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="12">
                                        <FormGroup className="mb-0">
                                            <Label className="control-label">Packages</Label>
                                            <Select
                                                value={selectedMulti}
                                                isMulti={true}
                                                onChange={this.handleMulti}
                                                options={optionGroup}
                                                className="select2 select2-multiple"
                                            />

                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    {this.state.selectedMulti?this.state.selectedMulti.map((tpackage, i)=>{
                                        return (
                                            <Row key={i}>
                                                <Col>
                                                    <Card>
                                                        <CardHeader>
                                                            {tpackage.value}
                                                        </CardHeader>
                                                        <CardBody>
                                                            <AvField
                                                                name={tpackage.label + '_q'}
                                                                label={tpackage.value}
                                                                placeholder="0"
                                                                type="number"
                                                                errorMessage="Enter a quantity"
                                                                validate={{
                                                                    required: { value: true },
                                                                    pattern: {
                                                                    value: "^[0-9]+$",
                                                                    errorMessage: "Only Digits"
                                                                    }
                                                                }}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            );
                                        }):null
                                    }
                                    
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

export default connect(null, { setBreadcrumbItems })(Create)
