import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class TopDropDown extends Component {
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
                   <Dropdown isOpen={this.state.menu} toggle={this.toggle} id="languagemenu" className={"d-none ml-2 " + this.props.class}>
                        <DropdownToggle tag="button" className="btn header-item waves-effect"> {this.props.current} <span className="mdi mdi-chevron-down"></span>
                        </DropdownToggle>
                        <DropdownMenu right>
                                {this.props.droplist.map((value, i) => {
                                    return <DropdownItem key={i} tag="a" href="{value.link}">{value.name}</DropdownItem>
                                })}
                                <DropdownItem divider></DropdownItem>
                                <DropdownItem tag="a" href="webstores">View All</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
            </React.Fragment>
        );
    }
}

export default TopDropDown;