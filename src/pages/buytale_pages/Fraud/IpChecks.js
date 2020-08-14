import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class IpChecks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Fraud", link : "#" },
                { title : "IP Checks", link : "/ipchecks" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("IP Checks", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="fa fa-shield-alt"></i></h1>
                                <CardText>Increase your fraud protection by blocking known VPNs and problematic IP addresses.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Contact Us About The Enterprise Plan</Button>
                            </CardBody>
                        </div>                               
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(IpChecks)