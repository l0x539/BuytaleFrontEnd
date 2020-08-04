import React, { Component } from 'react';
import { connect } from "react-redux";
import { Row, Col, Button, CardText } from "reactstrap";
import { Link } from 'react-dom'

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Subscription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Subscription", link : "/subscription" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Subscription", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                            <Row>
                                <Col sm={12} className="text-center text-md-right page-title-box">
                                    <Button tag={Link} to="//docs.buytale.org" type="button" color="secondary" size="lg" className="waves-effect waves-light">Help</Button>
                                </Col>
                            </Row>
                            <div className="card card-body text-center">
                                <h1 className="display-1"><i className="mdi mdi-sync"></i></h1>
                                <CardText>You don't currently have any active subscriptions. When a subscription is created it will be listed here. 
                                </CardText>
                            </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Subscription)