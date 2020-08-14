import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody, Button } from "reactstrap";
import { Link } from "react-router-dom";

//Import Switch
import Switch from "react-switch";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class DomainName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Webstore", link : "#" },
                { title : "Domain", link : "/settings/domain-name" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Domain", this.state.breadcrumbItems);
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
                                                <i className="mdi mdi-lock fa-fw m-4 fa-5x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">SSL Certificate</h5> SSLs are only applicable to custom domains - upgrade to the Premium Plan to register your custom domain first.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Button tag={Link} to="/" color="success" size="lg"  className="waves-effect waves-light">Upgrade to the Premium Plan</Button>
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>   
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="mdi mdi-shield-check fa-fw m-4 fa-5x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Store HTTPS Redirect</h5> Force HTTP to redirect to HTTPS on your webstore.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
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

export default connect(null, { setBreadcrumbItems })(DomainName)