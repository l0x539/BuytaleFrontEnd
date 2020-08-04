
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Button, Card, CardBody, CardText, CardHeader, CardFooter } from "reactstrap";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class GatewayCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Payment Gateways", link : "/Gateways/create/"+this.props.id },
            ],
        }
        this.goBack = this.goBack.bind(this); // i think you are missing this
    }
    
    goBack(){
        this.props.history.goBack();
    }    

    componentDidMount(){
        this.props.setBreadcrumbItems("", this.state.breadcrumbItems);
    }

    render() {
        const service = this.props.match.params.id==1?"Paypal":this.props.match.params.id==2?"Stripe":this.props.match.params.id==3?"Hytale Hub LLC":"" // this.props.match.params.id
        return (
            <React.Fragment>
                            <Card>
                                <CardHeader>
                                    {service}
                                </CardHeader>
                                <CardBody>
                                    <h4 className="card-title">{service+" Gateway"}</h4>
                                    <CardText>Payment Gateway for {service} will be added soon</CardText>
                                </CardBody>
                                <CardFooter className="text-muted">
                                    <Button onClick={this.goBack} className="btn btn-primary waves-effect waves-light">Cancel</Button>
                                </CardFooter>
                            </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(GatewayCreate)
