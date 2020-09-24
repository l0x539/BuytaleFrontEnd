import React, { Component } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody } from 'reactstrap';

import { withRouter } from 'react-router-dom';
import { getAvatar } from '../../../helpers/getAvatar'

class ProfileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: false,
            avatar: getAvatar(),
            modal_center: true,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            menu: !prevState.menu
        }));
    }

    componentDidMount = () => {
        this.setState({avatar:getAvatar()});
        this.setState({notice: false})
    }
    tog_center = () => {
        this.setState(prevState => ({
          modal_center: !prevState.modal_center
        }));
    }

    render() {
        return (
            <React.Fragment>
                    <Dropdown isOpen={this.state.menu} toggle={this.toggle} className="d-inline-block">
                        <DropdownToggle tag="button" className="btn header-item waves-effect" id="page-header-user-dropdown">
                            <img className="rounded-circle header-profile-user" src={getAvatar()} alt="Header Avatar"/>
                        </DropdownToggle>
                        <DropdownMenu right>
                        <DropdownItem tag="a" href="#"><i className="mdi mdi-account-circle font-size-17 text-muted align-middle mr-1"></i> Profile</DropdownItem>
                        <DropdownItem tag="a" href="/profile"><i className="mdi mdi-wallet font-size-17 text-muted align-middle mr-1"></i> My Wallet</DropdownItem>
                        <DropdownItem tag="a" href="#" className="d-block"><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings font-size-17 text-muted align-middle mr-1"></i> Settings</DropdownItem>
                        <DropdownItem tag="a" href="/lock-screen"><i className="mdi mdi-lock-open-outline font-size-17 text-muted align-middle mr-1"></i> Lock screen</DropdownItem>
                        <DropdownItem tag="a" href="#" divider></DropdownItem>
                        <DropdownItem tag="a" href="/logout" className="text-danger"><i className="mdi mdi-power font-size-17 text-muted align-middle mr-1 text-danger"></i> Logout</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Modal 
                        isOpen={this.state.modal_center}
                        toggle={this.tog_center}
                        autoFocus={true}
                        centered={true}
                    >
                                <ModalHeader toggle={this.tog_center}>
                                    Dev Note
                                </ModalHeader>
                                <ModalBody>
                                    <p>This website is still under developmnet.</p>
                                    <p>this is a preview template only.</p>
                                </ModalBody>
                    </Modal>
            </React.Fragment>
        );
    }
}

export default withRouter(ProfileMenu);