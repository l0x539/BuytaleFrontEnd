import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Bans extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Players", link : "#" },
                { title : "Banned Players", link : "/bans" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Banned Players", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                    <div className="card card-body text-center">
                        <CardBody>
                            <h1 className="display-1"><i className="fas fa-ban"></i></h1>
                            <CardText>Ban players from your webstore to prevent them from making any future purchases.
                            </CardText>
                            <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Upgrade to the Ultimate Plan</Button>
                        </CardBody>
                    </div>                                
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Bans)