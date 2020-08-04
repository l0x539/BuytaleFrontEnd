import React, { Component } from 'react';

import { Row, Col, Card, CardBody } from "reactstrap";

// import C3charts
import RoatedChart from "../../../AllCharts/C3charts/roatedchart";
import CombineChart from "../../../AllCharts/C3charts/combinechart";
import DonutChart from "../../../AllCharts/C3charts/donutchart";
import PieChart from "../../../AllCharts/C3charts/piechart";

import Vector from "./Vectormap";

class Comming extends Component {
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
                <Card>
                    <CardBody>
                        Comming Soon.
                    </CardBody>
                </Card>
                <Row>
                    <Col lg="6">
                        <Card  className="m-b-20">
                            <CardBody>

                                <h4  className="card-title mb-4">Roated Chart</h4>

                                <div  className="row text-center mt-4">
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">86541</h5>
                                        <p  className="text-muted">Activated</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">2541</h5>
                                        <p  className="text-muted">Pending</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">102030</h5>
                                        <p  className="text-muted">Deactivated</p>
                                    </div>
                                </div>

                                <div id="roated-chart" dir="ltr">
                                    <RoatedChart/>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    

                    <Col lg="6">
                        <Card  className="m-b-20">
                            <CardBody>

                                <h4  className="card-title mb-4">Combine Chart</h4>

                                <div  className="row text-center mt-4">
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">86541</h5>
                                        <p  className="text-muted">Activated</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">2541</h5>
                                        <p  className="text-muted">Pending</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">102030</h5>
                                        <p  className="text-muted">Deactivated</p>
                                    </div>
                                </div>

                                <div id="combine-chart" dir="ltr">
                                    <CombineChart/>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    
                </Row>
                

                <Row>
                    <Col lg="6">
                        <Card  className="m-b-20">
                            <CardBody>

                                <h4  className="card-title mb-4">Donut Chart</h4>

                                <div  className="row text-center mt-4">
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">86541</h5>
                                        <p  className="text-muted">Activated</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">2541</h5>
                                        <p  className="text-muted">Pending</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">102030</h5>
                                        <p  className="text-muted">Deactivated</p>
                                    </div>
                                </div>

                                <div id="donut-chart" dir="ltr">
                                    <DonutChart/>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    

                    <Col lg="6">
                        <Card  className="m-b-20">
                            <CardBody>

                                <h4  className="card-title mb-4">Pie Chart</h4>

                                <div  className="row text-center mt-4">
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">86541</h5>
                                        <p  className="text-muted">Activated</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">2541</h5>
                                        <p  className="text-muted">Pending</p>
                                    </div>
                                    <div  className="col-sm-4">
                                        <h5  className="mb-0 font-size-20">102030</h5>
                                        <p  className="text-muted">Deactivated</p>
                                    </div>
                                </div>

                                <div id="pie-chart" dir="ltr">
                                    <PieChart/>
                                </div>

                            </CardBody>
                        </Card>
                    </Col>
                    
                </Row> 
                <Row>
                    <Col>
                        <Card>
                            <CardBody>

                                <h4 className="card-title">Servers</h4>
                                <p className="card-title-desc">Active Servers.</p>

                                <Vector
                                    value="world_mill"
                                    height="400"
                                    width="478.5"
                                    color="rgb(122, 111, 190)"
                                />

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </React.Fragment>
        );
    }
}

export default Comming;