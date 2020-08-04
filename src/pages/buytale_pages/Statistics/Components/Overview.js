import React, { Component } from 'react';

import { Row, Col, Card, CardBody, Badge, CardHeader, CardFooter, FormGroup, InputGroupAddon, Button, Table } from "reactstrap";

//Import Date Picker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            start_date: new Date(),
            end_date: new Date(),            
        }
    } 

    handleStart(date) {
        this.setState({ start_date: date });
    }
    handleEnd(date) {
        this.setState({ end_date: date });
    }

    render() {
        return (
            <React.Fragment>
                <Row>
                    {
                        this.props.reports.map((report, key) =>
                            <Col xl="3" md="6" key={key}>
                                <Card className="mini-stat bg-primary">
                                    <CardBody className="mini-stat-img">
                                        <div className="mini-stat-icon">
                                            <i className={"mdi " + report.icon + " float-right"}></i>
                                        </div>
                                        <div className="text-white">
                                            <h6 className="text-uppercase mb-3 font-size-16">{report.title}</h6>
                                            <h2 className="mb-4">{report.value}</h2>
                                            <Badge color={report.color}> {report.result}</Badge> <span className="ml-2">{report.desc}</span>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    } 
                    <Col xl={12}>
                        <Card>
                            <CardHeader>
                                <FormGroup className="mb-0">
                                    <div className="input-daterange input-group" id="date-range">
                                        
                                        <InputGroupAddon addonType="append">
                                            <span className="input-group-text"><i className="mdi mdi-calendar"></i></span>
                                        </InputGroupAddon>
                                        <Col lg="2"className="pr-6 pl-0">
                                        <DatePicker
                                            selected={this.state.start_date}
                                            selectsStart
                                            className="form-control"
                                            placeholderText="From"
                                            startDate={this.state.start_date}
                                            endDate={this.state.end_date}
                                            onChange={this.handleStart}
                                        />
                                        </Col>
                                        
                                        <InputGroupAddon addonType="append">
                                            <span className="input-group-text"><i className="mdi mdi-calendar"></i></span>
                                        </InputGroupAddon>
                                        <Col lg="6" className="pl-0">
                                        <DatePicker
                                            selected={this.state.end_date}
                                            selectsEnd
                                            className="form-control"
                                            startDate={this.state.start_date}
                                            endDate={this.state.end_date}
                                            onChange={this.handleEnd}
                                        />
                                        </Col>
                                        <Col lg="2" className="pl-0 text-center text-md-right ">
                                            <Button  block className="waves-effect waves-light mr-1 w-100" color="success">Generate <i className="mdi mdi-greater-than"></i></Button>
                                        </Col>
                                    </div>
                                </FormGroup>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col lg="6" className="p-2">
                                        <h4 className="card-title">Top Packages</h4>
                                        <div className="table-responsive table-bordered">
                                            <Table className="table mb-0">

                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Player</th>
                                                        <th>Purchases</th>
                                                        <th>Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Not enough data to display this statistic.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                    <Col lg="6" className="p-2">
                                        <h4 className="card-title">Top Players</h4>
                                        <div className="table-responsive table-bordered">
                                            <Table className="table mb-0">

                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Player</th>
                                                        <th>Purchases</th>
                                                        <th>Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Not enough data to display this statistic.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg="6" className="p-2">
                                        <h4 className="card-title">Top Categories</h4>
                                        <div className="table-responsive table-bordered">
                                            <Table className="table mb-0">

                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Player</th>
                                                        <th>Purchases</th>
                                                        <th>Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Not enough data to display this statistic.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                    <Col lg="6" className="p-2">
                                        <h4 className="card-title">Top Servers</h4>
                                        <div className="table-responsive table-bordered">
                                            <Table className="table mb-0">

                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Player</th>
                                                        <th>Purchases</th>
                                                        <th>Value</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>Not enough data to display this statistic.</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Col>
                                </Row>
                                <h4 className="card-title">Top Emails</h4>
                                <div className="table-responsive table-bordered">
                                    <Table className="table mb-0">

                                        <thead className="thead-light">
                                            <tr>
                                                <th>Player</th>
                                                <th>Purchases</th>
                                                <th>Value</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Not enough data to display this statistic.</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </CardBody>
                            <CardFooter className="text-muted">
                                Last fetched 1 minute ago.
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Overview;