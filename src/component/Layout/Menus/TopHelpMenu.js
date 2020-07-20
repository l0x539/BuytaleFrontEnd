import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TopHelpMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }
    render() {
        return (
            <React.Fragment>
                        <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="dropdown-topbar pt-3 mt-1 d-inline-block">
                            <DropdownToggle className="btn btn-light dropdown-toggle" role="button" id="dropdownMenuLink" tag="a">
                                    Help <i className="mdi mdi-chevron-down"></i>
                            </DropdownToggle>

                            <DropdownMenu right>
                                <DropdownItem tag="a" href="#">Contact Us</DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem tag="a" href="#">Knowledge Base</DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem tag="a" href="#">Blog</DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem tag="a" href="#">Latest Updates</DropdownItem>
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem tag="a" href="#">System Status</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
            </React.Fragment>
        );
    }
}

export default TopHelpMenu;