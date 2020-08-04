import React, { Component } from 'react';
import { Button, Row, Card, CardBody } from "reactstrap";
import ReactApexChart from 'react-apexcharts';

class MonthlyEarnings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                colors: ['#ECECEC', '#7A6FBE', '#28BBE3'],
                chart: {
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 0.1,
                },
                grid: {
                    borderColor: '#f8f8fa',
                    row: {
                        colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
                    axisBorder: {
                        show: false
                    },
                    axisTicks: {
                        show: false
                    }
                },
                legend: {
                    show: false
                },
            },
            series: [
                {
                    name: 'Series A',
                    data: [150, 150, 150, 150, 150, 150, 150]
                },
                {
                    name: 'Series B',
                    data: [75, 75, 75, 75, 75, 75, 75]
                },
                {
                    name: 'Series C',
                    data: [35, 35, 35, 35, 35, 35, 35]
                }
            ],
        }
    }
    render() {
        return (
            <React.Fragment>
                            <Card>
                                <CardBody>
                                    <Row>
                                        <h4 className="card-title col-10 mb-4">Daily Overview</h4>
                                        <Button type="button" color="light" className="waves-effect">View More</Button>   
                                    </Row>
                                    
                                    <div id="morris-area-example" className="morris-charts morris-charts-height" dir="ltr">
                                        <ReactApexChart options={this.state.options} series={this.state.series} type="area" height="300" />
                                    </div>
                                </CardBody>
                            </Card>
            </React.Fragment>
        );
    }
}

export default MonthlyEarnings;