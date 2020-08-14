import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Button, Card, CardBody, CardHeader, CardText, CardFooter } from "reactstrap";
import { Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class AcionsGlobal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Commands", link : "#" },
                { title : "Global Discord Actions", link : "/actions/global" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Global Discord Actions", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                            <Card>
                                <CardHeader>
                                    
                                    <Row>
                                        <Col xl={4} className="my-auto">
                                            <h4 className="card-title">Discord Actions</h4>
                                        </Col>
                                        <Col>
                                            <div className="text-md-right">
                                                <div className="btn-group mr-1 mt-2">
                                                    <Button type="button" color="secondary" className="waves-effect waves-light">Help</Button>
                                                </div>
                                                <div className="btn-group mr-1 mt-2">
                                                    <Button type="button" color="success" className="waves-effect waves-light">Add Discord Command</Button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </CardHeader>
                                <CardBody>
                                    <CardText>  Discord Actions added here will be executed on events relating to all packages.  </CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <Link to="#" className="btn btn-primary waves-effect waves-light">Update</Link>
                                </CardFooter>
                            </Card>  
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(AcionsGlobal)