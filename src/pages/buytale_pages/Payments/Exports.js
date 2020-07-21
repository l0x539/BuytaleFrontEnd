import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Exports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Exports", link : "/exports" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Exports", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Exports)