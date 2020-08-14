import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Resend extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Commands", link : "#" },
                { title : "Resend Commands", link : "/commands/resend" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Resend Commands", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="mdi mdi-sync"></i></h1>
                                <CardText>Started a fresh server? Resend commands for certain payments, packages & servers to ensure customers can still enjoy their purchases.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Resend Commands</Button>
                            </CardBody>
                        </div>                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Resend)