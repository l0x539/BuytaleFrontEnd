
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { CardBody, CardText, Button } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Shields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Shields", link : "#" },
                { title : "Shields", link : "/shields" },
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
                                <h1 className="display-1"><i className="fa fa-shield-alt"></i></h1>
                                <CardText>Shield protects your game server from the world's largest DDOS attacks - no bandwidth or concurrent player restrictions and worldwide ping below 10ms.
                                </CardText>
                                <Button tag={Link} to="/billing/plans" color="success" size="lg"  className="waves-effect waves-light">Protect Your Game Server</Button>
                            </CardBody>
                        </div>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Shields)
