import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Payments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buyale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Payments", link : "/payments" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Payments", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Payments)