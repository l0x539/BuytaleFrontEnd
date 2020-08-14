
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Privacy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Privacy", link : "#" },
                { title : "Privacy", link : "/dataprotection/history" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Privacy", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="mdi mdi-file-plus"></i></h1>
                                <CardText>There are no GDPR audits to display - you will have to submit one to be able to view personal information of your customers.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Create GDPR Audit</Button>
                            </CardBody>
                        </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Privacy)
