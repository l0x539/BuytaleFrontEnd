
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Billing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Billing", link : "#" },
                { title : "Billing", link : "/billing" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Billing", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className=" fas fa-toolbox fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Plan</h5> This account is on the Starter Plan. Upgrade your account to gain access to many more features.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Button tag={Link} to="/" color="primary" size="lg"  className="waves-effect waves-light">Plans</Button>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className=" fas fa-wallet fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Payment Details</h5> You don't have a payment method on file.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Button tag={Link} to="/" color="success" size="lg"  className="waves-effect waves-light">Update</Button>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>
                        <div className="card card-body text-center">
                            <h1 className="display-1"><i className="fas fa-inbox"></i></h1>
                            <CardText>Receipts for payments made to Tebex will be listed here for your convenience.
                            </CardText>
                        </div>   
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Billing)
