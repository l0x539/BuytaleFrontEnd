
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody, CardText, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Team", link : "#" },
                { title : "Team", link : "/team" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Team", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="fas fa-users"></i></h1>
                                <CardText>Allow other Tebex accounts to access your webstore - ideal if you have multiple staff on your server.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Add Your First Team Account</Button>
                            </CardBody>
                        </div>

                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className=" fas fa-globe fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Timezone</h5> Enforce all accounts to see dates & times in a specific timezone throughout the control panel.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Button tag={Link} to="/" color="success" size="lg"  className="waves-effect waves-light">Configure</Button>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Team)
