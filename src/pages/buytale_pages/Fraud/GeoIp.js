import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

//Import Switch
import Switch from "react-switch";


class GeoIp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Fraud", link : "#" },
                { title : "GEO-IP Address Verification", link : "/Settings/chargebacks/geoip" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("GEO-IP Address Verification", this.state.breadcrumbItems);
    }

    render() {
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
                                                <i className=" fas fa-globe fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">GEO-IP Address Verification</h5> Validate that the user's IP matches the billing address entered. (Requires address field on the checkout)
                                            
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
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(GeoIp)