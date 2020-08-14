import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class CommunityGoals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Engagement", link : "#" },
                { title : "Community Goals", link : "/community-goals" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Community Goals", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="fa fa-users"></i></h1>
                                <CardText>Community goals allow you to define fundraising goals, where particular rewards are globally available when the total has been met.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Create Your First Community Goal</Button>
                            </CardBody>
                        </div> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CommunityGoals)