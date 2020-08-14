import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody, InputGroupAddon, InputGroup } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

//Import Multiple Select
import Select from "react-select";

const optionGroup = [
    {
      options: [
        { label: "Hourly", value: "Hourly" },
        { label: "Daily", value: "Daily" },
      ]
    },
  ];

class Resolution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Fraud", link : "#" },
                { title : "Spending Limit", link : "/Settings/chargebacks/spendinglimit" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Spending Limit", this.state.breadcrumbItems);
    }

    render() {
        const { selectedGroup } = this.state;
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-money-check-alt fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="my-auto">
                                                <h5 className="font-size-16">Spending Limit</h5> The amount a customer can spend on your webstore in a specified period of time.
                                            
                                        </Col>
                                        <Col className="my-auto py-auto text-right">
                                            <InputGroup>
                                                <AvForm>
                                                    <Row className="my-auto py-auto text-right">
                                                        <InputGroupAddon addonType="append" className="mb-3"> 
                                                            <span className="input-group-text">$</span>
                                                    
                                                        </InputGroupAddon>
                                                        <AvField
                                                            
                                                            name="digits"
                                                            placeholder="0.0"
                                                            type="number"
                                                            errorMessage="Enter An amount"
                                                            validate={{
                                                                required: { value: true },
                                                                pattern: {
                                                                value: "^[0-9.]+$",
                                                                errorMessage: "Price Amount only"
                                                                }
                                                            }}
                                                        />
                                                    </Row>
                                                    </AvForm>
                                                
                                            </InputGroup>
                                        </Col>
                                        <Col xl={2} className="my-4">
                                            <Select
                                                value={selectedGroup}
                                                onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                className="select2"
                                            />
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Resolution)