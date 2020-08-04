import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Gateway extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Payment Gateways", link : "/gateways" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Payment Gateways", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                            <div className="card card-body text-center">
                                <CardBody>
                                    <h1 className="display-1"><i className="mdi mdi-credit-card-plus-outline"></i></h1>
                                    <CardText>Payment gateways (such as PayPal/Stripe) are used by your customers when purchasing packages from your webstore.
                                    </CardText>
                                    <Link to="/gateways/select" className="btn btn-primary">Setup Your First Payment Gateway</Link>
                                </CardBody>
                            </div>  
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Gateway)