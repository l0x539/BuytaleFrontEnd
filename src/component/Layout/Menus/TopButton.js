import React, { Component } from 'react';
import { Dropdown } from 'reactstrap';
import { Link } from "react-router-dom";
import './TopButton.scss'

class TopButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
    }

    render() {
        return (
            <React.Fragment>
                <Dropdown>
                    <button 
                        tag="button" 
                        className="btn header-item waves-effect topbutton"
                    > 
                    <Link to={this.props.link}>{this.props.name}</Link>
                    </button>
                </Dropdown>
            </React.Fragment>
        );
    }
}

export default TopButton;