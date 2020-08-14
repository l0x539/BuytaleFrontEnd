
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class PlayerVerification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Integrations", link : "#" },
                { title : "Player Verification", link : "/player-verification" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Player Verification", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className=" fas fa-external-link-alt fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Verification URL</h5> Provide a URL to implement your own authorisation when a player logs in to your webstore.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Button tag={Link} to="/" color="success" size="lg"  className="waves-effect waves-light">Upgrade to the Ultimate Plan</Button>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>   
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(PlayerVerification)
