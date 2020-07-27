import React, { Component } from 'react';
import { Row, Col } from "reactstrap";
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

//Import Components
import MiniCard from "./mini-card";
import MonthlyEarnings from "./montly-earnings";
import EmailSent from "./email-sent";
import LatestTransactions from "./latest-transactions";
import LatestOrders from "./latest-orders";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        const monthNames = ["January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December"
                            ];
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "#" },
                { title : "Dashboard", link : "#" },
            ],
            reports : [
                { title : "Orders", icon : "mdi-cube-outline", result : "0%", value : "0", desc : "From previous period", color : "info" }, // info, danger, warning
                { title : "TODAY'S SALES", icon : "mdi-buffer", result : "0%", value : "$0", desc : "From previous period", color : "info" },
                { title : monthNames[(new Date()).getMonth()] + "' SALES", icon : "mdi-tag-text-outline", result : "0%", value : "$0", desc : "From previous period", color : "info" },
                { title : monthNames[(new Date()).getMonth()] + "'S AVG PAYMENT", icon : "mdi-briefcase-check", result : "0%", value : "$0", desc : "From previous period", color : "info" },
            ],
        }
    }

    componentDidMount(){
        this.props.setBreadcrumbItems("Dashboard", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                
                    <Row>
                        <MiniCard reports={this.state.reports} />
                    </Row>

                    <Row>
                        {/*<Col xl="3">
                            {/* Monthly Earnings //}
                            <MonthlyEarnings2/>
                        </Col>*/}

                        <Col xl="8">
                            {/* Email sent */}
                            <EmailSent/>
                        </Col>

                        <Col xl="4">
                            <MonthlyEarnings/>
                        </Col>

                    </Row>
                    
                    <Row>
                        <Col xl="6">
                            {/* latest transactions */}
                            <LatestTransactions/>
                        </Col>

                        <Col xl="6">
                            {/* latest orders */}
                            <LatestOrders/>
                        </Col>
                    </Row>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Dashboard);