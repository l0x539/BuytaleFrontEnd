import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

import Overview from "./Components/Overview"
import Comming from "./Components/Comming"


class Statistics extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Statistics", link : "/statistics" },
            ],
            statsType: "Overview",
            resolveStatsOutput: null,
            reports : [
                { title : "ALL TIME SALES", icon : "mdi mdi-update", result : "0%", value : "$0.00", desc : "", color : "info" }, // info, danger, warning
                { title : "YEAR TO DATE", icon : "mdi mdi-timetable", result : "0%", value : "$0.00", desc : "", color : "info" },
                { title : "MONTH TO DATE", icon : "mdi mdi-timeline-text-outline", result : "0%", value : "$0.00", desc : "", color : "info" },
                { title : "TODAY", icon : "mdi mdi-calendar-today", result : "0%", value : "$0.00", desc : "", color : "info" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Statistics", this.state.breadcrumbItems);
        this.toggleStats(null);
    }

    toggleStats = (event) => {
        const value = event?event.target.value:"0";
        switch (value) {
            case "0":
                this.setState({statsType: "Overview"})
                this.setState({ resolveStatsOutput: <Overview reports={this.state.reports} /> })
                break;
            case "1":
                this.setState({statsType: "General Stats"})
                this.setState({ resolveStatsOutput: <Comming /> })     // TODO
                break;
            case "2":
                this.setState({statsType: "Other Stats"})
                this.setState({ resolveStatsOutput: <Comming /> })     // TODO
                break;
            default:
                this.setState({statsType: "Overview"})
                this.setState({ resolveStatsOutput: <Overview reports={this.state.reports} /> })
                break;
        }
    }


    render() {
        return (
            <React.Fragment>
                            <Row>
                                <Col xs={10} sm={10}>
                                </Col>
                                <Col sm={1} className="text-center mb-3">
                                    <Dropdown
                                        isOpen={this.state.singlebtn}
                                        toggle={() =>
                                        this.setState({ singlebtn: !this.state.singlebtn })
                                        } className="mr-1 mt-2"
                                    >
                                        <DropdownToggle className="btn btn-secondary" caret>
                                            {this.state.statsType}
                                            <i className="mdi mdi-chevron-down"></i>
                                        </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem onClick={this.toggleStats} value={0}>Overview</DropdownItem>
                                                <DropdownItem onClick={this.toggleStats} value={1}>General Stats</DropdownItem>
                                                <DropdownItem onClick={this.toggleStats} value={2}>Other Stats</DropdownItem>
                                                {/* Adding Statistics here */}
                                            </DropdownMenu>
                                    </Dropdown>
                                </Col>
                            </Row>
                            
                            {this.state.resolveStatsOutput}
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Statistics)