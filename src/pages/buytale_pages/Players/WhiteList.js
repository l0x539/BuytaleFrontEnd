import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class WhiteList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Players", link : "#" },
                { title : "Whitelisted Players", link : "/whitelist" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Whitelisted Players", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="fas fa-sliders-h"></i></h1>
                                <CardText>Chargeback whitelists enable you to whitelist certain users who may otherwise be blocked by chargeback protection
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg" className="waves-effect waves-light">Upgrade to the Ultimate Plan</Button>
                            </CardBody>
                        </div>   
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(WhiteList)