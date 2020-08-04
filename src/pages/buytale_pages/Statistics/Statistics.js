import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Dropdown, Card, CardBody, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Statistics", link : "/statistics" },
            ],
            statsType: "Overview"
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Statistics", this.state.breadcrumbItems);
    }

    toggleStats = (event) => {
        switch (event.target.value) {
            case "0":
                this.setState({statsType: "Overview"})
                break;
            case "1":
                this.setState({statsType: "General Stats"})
                break;
            case "2":
                this.setState({statsType: "Other Stats"})
                break;
            default:
                this.setState({statsType: "Overview"})
                break;
        }
        if (event.target.value === 0) {
            
        } else if (event.target.value === 0) {

        }
    }

    render() {
        return (
            <React.Fragment>
                              <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={10} sm={10}>
                                                <h4 className="card-title mb-4">{this.state.statsType}</h4>
                                            </Col>
                                            <Col sm={1} className="text-center ">
                                                <Dropdown
                                                    isOpen={this.state.singlebtn}
                                                    toggle={() =>
                                                    this.setState({ singlebtn: !this.state.singlebtn })
                                                    } className="mr-1 mt-2 "
                                                >
                                                    <DropdownToggle className="btn btn-secondary" caret>
                                                        {this.state.statsType}
                                                        <i className="mdi mdi-chevron-down"></i>
                                                    </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem onClick={this.toggleStats} value={0}>Overview</DropdownItem>
                                                            <DropdownItem onClick={this.toggleStats} value={1}>General Stats</DropdownItem>
                                                            <DropdownItem onClick={this.toggleStats} value={2}>Other Stats</DropdownItem>
                                                        </DropdownMenu>
                                                </Dropdown>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Statistics)