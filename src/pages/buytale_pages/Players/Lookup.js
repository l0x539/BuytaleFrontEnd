import React, { Component } from 'react';
import { connect } from "react-redux";


import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Lookup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Players", link : "#" },
                { title : "Player Lookup", link : "/lookup" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Player Lookup", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <div className="card card-body text-center">
                            <CardBody>
                                <h1 className="display-1"><i className="mdi mdi-account-search"></i></h1>
                                <CardText>Lookup the activity of a player or IP address over the entire Tebex network. 
                                    Useful in determining if a player has been fraudulent in the past on another server.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Upgrade to the Ultimate Plan</Button>
                            </CardBody>
                        </div>        
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Lookup)