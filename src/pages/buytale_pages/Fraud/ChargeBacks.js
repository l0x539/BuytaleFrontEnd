import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

//Import Multiple Select
import Select from "react-select";

//Import Switch
import Switch from "react-switch";

// Import Slider
import Slider from "react-rangeslider";
import "react-rangeslider/lib/index.css";

const optionGroup = [
    {
      label: "USD",
      options: [
        { label: "EN", value: "EN" },
        { label: "UK", value: "UK" },
      ]
    },
    {
      label: "EURO",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" }
      ]
    }
  ];

class ChargeBacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Fraud", link : "#" },
                { title : "Chargeback Prevention", link : "/settings/chargebacks" },
            ],
            float_val: 30.0,
            float_val1: 0.0,
            float_val2: 0,
            selectedGroup: null,
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Chargeback Prevention", this.state.breadcrumbItems);
    }

    render() {
        const { selectedGroup } = this.state;

        function Offsymbol(text){
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                  color: "#fff",
                  paddingRight: 2
                }}
              >
                {" "}
                {text}
              </div>
            );
          };
      
        function OnSymbol(text) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                  color: "#fff",
                  paddingRight: 2
                }}
              >
                {" "}
                {text}
              </div>
            );
          };

        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-sliders-h fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Chargeback Threshold</h5> Players who pass this threshold will be blocked from purchasing on your store.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <div className="p-3">
                                                <span className="float-left mt-6">1%</span>{" "}
                                                <span className="float-right  mt-6">100%</span>
                                                <Slider
                                                value={this.state.float_val}
                                                step={0.5}
                                                orientation="horizontal"
                                                onChange={value => {
                                                    this.setState({ float_val: value });
                                                }}
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-stopwatch fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Chargeback Time Period</h5> The time frame in which we will check for chargebacks from players.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Select
                                                value={selectedGroup}
                                                onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                className="select2"
                                            />
                                        </Col>
                                    </Row>
                                    
                                    
                            </CardBody>
                        </Card> 
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className=" fas fa-user-lock fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Username Threshold Blocker</h5> Deny players from purchasing which go over your chargeback threshold.
                                            
                                        </Col>
                                        <Col className="my-auto text-center">
                                            <Switch
                                                uncheckedIcon={Offsymbol("No")}
                                                checkedIcon={OnSymbol("Yes")}
                                                onColor="#02a499"
                                                onChange={() =>
                                                this.setState({  switch1: !this.state.switch1 })
                                                }
                                                checked={this.state.switch1}
                                                className="mr-1 mt-1"
                                            />
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>  
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-user-tag fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">IP Address Threshold Blocker</h5> Deny IP addresses from purchasing which go over your chargeback threshold.
                                            
                                        </Col>
                                        <Col className="my-auto text-center">
                                            <Switch
                                                uncheckedIcon={Offsymbol("No")}
                                                checkedIcon={OnSymbol("Yes")}
                                                onColor="#02a499"
                                                onChange={() =>
                                                this.setState({  switch2: !this.state.switch2 })
                                                }
                                                checked={this.state.switch2}
                                                className="mr-1 mt-1"
                                            />
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-coins fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Chargeback Value Bypass</h5> Allow players to checkout if the total value of their chargebacks is less than x% of the value of their total purchases.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <div className="p-3">
                                                <span className="float-left mt-6">0%</span>{" "}
                                                <span className="float-right  mt-6">50%</span>
                                                <Slider
                                                value={this.state.float_val1}
                                                step={1}
                                                orientation="horizontal"
                                                onChange={value => {
                                                    this.setState({ float_val1: value });
                                                }}
                                                max={50} 
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-thumbtack fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Local Ban Chargeback Threshold</h5> Autoban players who make x or more chargebacks on your store.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <div className="p-3">
                                                <Slider
                                                value={this.state.float_val2}
                                                step={1}
                                                orientation="horizontal"
                                                onChange={value => {
                                                    this.setState({ float_val2: value });
                                                }}
                                                max={500} 
                                                />
                                            </div>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(ChargeBacks)