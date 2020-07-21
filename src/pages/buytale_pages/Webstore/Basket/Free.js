import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../../store/actions";


class Free extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Webstore", link : "#" },
                { title : "Basket Settings", link : "#" },
                { title : "Free Baskets", link : "/basketsettings/free" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Free Baskets", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Free)