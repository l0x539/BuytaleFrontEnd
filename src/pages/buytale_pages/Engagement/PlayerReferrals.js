
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody, InputGroupAddon, InputGroup } from "reactstrap";
import { AvField, AvForm } from "availity-reactstrap-validation";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";



class PlayerReferrals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Engagement", link : "#" },
                { title : "Player Referrals", link : "/player-referrals" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Player Referrals", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-dollar-sign fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={6} className="my-auto">
                                                <h5 className="font-size-16">Minimum Total Spend</h5> The minimum total spend in order to receive rewards from referrals.
                                            
                                        </Col>
                                        <Col xl={4} className="my-4">
                                        <InputGroup>
                                                <AvForm>
                                                    <Row className="text-right">
                                                        <InputGroupAddon addonType="append" className="mb-3"> 
                                                            <span className="input-group-text">$</span>
                                                    
                                                        </InputGroupAddon>
                                                        <AvField
                                                            
                                                            name="digits"
                                                            placeholder="10.0"
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
                                    </Row>
                            </CardBody>
                        </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(PlayerReferrals)
