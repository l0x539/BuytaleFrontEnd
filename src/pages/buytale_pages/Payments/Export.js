
import React, { Component } from 'react';
import { connect } from "react-redux";
import { AvField, AvForm } from "availity-reactstrap-validation";
import {
    Card,
    CardBody,
    CardText,
    Button
  } from "reactstrap";

import "./exports.scss"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Export extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Export", link : "/payments/export" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Export Payments Log in A CSV file.", this.state.breadcrumbItems);
    }


    checkKey = (e) => {
        this.setState({pathLink:document.getElementById("unlock").value.trim().length>0?this.props.history.push("/exports"):{/* pass */}});

        
    }

    render() {
        return (
            <React.Fragment>
                            <Card>
                                <h4 className="card-header font-16 mt-0">Payments</h4>
                                <CardBody>
                                <AvForm>
                                    <h4 className="card-title">Export CSV</h4>
                                    <CardText>We have sent a passcode to your email address, in order to unlock this payment export you must enter the code below.</CardText>
                                    <AvField
                                        name="unlock"
                                        placeholder="Enter the passcode we emailed to you here"
                                        type="text"
                                        errorMessage="Enter the passcode"
                                        validate={{ required: { value: true } }}
                                    />
                                    <Button onClick={this.checkKey} to={this.state.pathLink} className="btn btn-primary">Unlock</Button>
                                </AvForm>
                                </CardBody>
                            </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Export)
