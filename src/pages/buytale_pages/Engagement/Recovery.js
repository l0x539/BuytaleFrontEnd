
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Recovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Engagement", link : "#" },
                { title : "Abandoned Basket Recovery", link : "/recovery" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Abandoned Basket Recovery", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="mdi mdi-cart-plus"></i></h1>
                                <CardText>Send emails to customers who fail to complete checkout to tempt them back to your store.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Upgrade to the Enterprise Plan</Button>
                            </CardBody>
                        </div> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Recovery)
