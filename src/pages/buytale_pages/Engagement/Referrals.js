
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Referrals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Engagement", link : "#" },
                { title : "Webstore Referrals", link : "/referrals" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Webstore Referrals", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="fa fa-tags"></i></h1>
                                <CardText>Create referral tracking pages to track clicks and purchases by referee.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Upgrade to the Enterprise Plan</Button>
                            </CardBody>
                        </div>  
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Referrals)
