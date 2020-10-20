
import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "User", link : "#" },
                { title : "Profile", link : "/" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                            </CardBody>
                        </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(UserProfile)
