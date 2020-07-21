import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Variables extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Webstore", link : "#" },
                { title : "Variables", link : "/design/currency" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Variables", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Variables)