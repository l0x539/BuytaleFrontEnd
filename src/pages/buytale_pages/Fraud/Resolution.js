import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


//Import Switch
import Switch from "react-switch";


class Resolution extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Fraud", link : "#" },
                { title : "Chargeback Resolution Behaviour", link : "/Settings/chargebacks/resolution" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Chargeback Resolution Behaviour", this.state.breadcrumbItems);
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
                                                <i className=" fas fa-check-circle fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Set Status To Complete</h5> Change the status of the payment to Complete.
                                            
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
                                                <i className=" fas fa-terminal fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Re-run Initial Commands</h5> Re-run any commands that were created when the payment was initially created.
                                            
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
                                                <i className=" fas fa-undo fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Delete Any Pending Chargeback Commands</h5> Remove any pending commands that were created as a result of the payment being chargedback.
                                            
                                        </Col>
                                        <Col className="my-auto text-center">
                                            <Switch
                                                uncheckedIcon={Offsymbol("No")}
                                                checkedIcon={OnSymbol("Yes")}
                                                onColor="#02a499"
                                                onChange={() =>
                                                this.setState({  switch3: !this.state.switch3 })
                                                }
                                                checked={this.state.switch3}
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
                                                <i className=" fas fa-credit-card fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Un-void Any Voided Gift Cards</h5> Un-void any gift cards that were voided due to the chargeback.
                                            
                                        </Col>
                                        <Col className="my-auto text-center">
                                            <Switch
                                                uncheckedIcon={Offsymbol("No")}
                                                checkedIcon={OnSymbol("Yes")}
                                                onColor="#02a499"
                                                onChange={() =>
                                                this.setState({  switch4: !this.state.switch4 })
                                                }
                                                checked={this.state.switch4}
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
                                                <i className=" fas fa-envelope fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Send A Confirmation Email To The Player</h5> Inform the player that the chargeback has been resolved. The contents of the email can be modified in the template editor.
                                            
                                        </Col>
                                        <Col className="my-auto text-center">
                                            <Switch
                                                uncheckedIcon={Offsymbol("No")}
                                                checkedIcon={OnSymbol("Yes")}
                                                onColor="#02a499"
                                                onChange={() =>
                                                this.setState({  switch5: !this.state.switch5 })
                                                }
                                                checked={this.state.switch5}
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

export default connect(null, { setBreadcrumbItems })(Resolution)