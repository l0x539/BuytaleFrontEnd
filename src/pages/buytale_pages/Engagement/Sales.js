import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Engagement", link : "#" },
                { title : "Sales", link : "/sales" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Sales", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="fa fa-tags"></i></h1>
                                <CardText>Create sales on your webstore to encourage customers to purchase packages and increase revenue.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Upgrade The Premium Plan</Button>
                            </CardBody>
                        </div>                                 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Sales)