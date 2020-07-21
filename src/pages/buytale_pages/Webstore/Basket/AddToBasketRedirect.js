import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../../store/actions";


class AddToBasketRedirect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Webstore", link : "#" },
                { title : "Basket Settings", link : "#" },
                { title : "Add To Basket Redirect", link : "/basketsettings/add-to-basket-redirect" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Add To Basket Redirect", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(AddToBasketRedirect)