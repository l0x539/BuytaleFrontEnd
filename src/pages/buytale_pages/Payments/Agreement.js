import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";
import { CardText } from "reactstrap";


class Agreement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Billing Agreement", link : "/agreement" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Billing Agreement", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                            <div className="card card-body text-center">
                                <h1 className="display-1"><i className="mdi mdi-credit-card-outline"></i></h1>
                                <CardText>Billing agreements for subscriptions will be displayed here. For legacy subscriptions (PayPal, Paymentwall etc), see <a href="/subscription">subscriptions</a>.
                                </CardText>
                            </div>   
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Agreement)