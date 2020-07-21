import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class GeoIp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Fraud", link : "#" },
                { title : "GEO-IP Address Verification", link : "/Settings/chargebacks/geoip" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("GEO-IP Address Verification", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(GeoIp)