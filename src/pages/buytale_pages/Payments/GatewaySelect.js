
import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Button, Card, CardBody, CardText, CardImg, Col, Row } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

import "./GatewaySelect.scss"


class GatewaySelect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Payment Gateways", link : "/gateways/select" },
            ],
            paymentgateways: [
                {
                    id: 1,
                    imglink: "https://logos-world.net/wp-content/uploads/2020/04/PayPal-Logo.png",
                    name: "Paypal",
                    status: "preferred",
                    description: "The latest PayPal integration allowing you to access a wider range of features",
                },
                {
                    id: 2,
                    imglink: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1280px-Stripe_Logo%2C_revised_2016.svg.png",
                    name: "Stripe",
                    status: "recommended",
                    description: "The latest Stripe integration allowing you to access a wider range of features",
                },
                {
                    id: 3,
                    imglink: "",
                    name: "Hytale Hub LLC",
                    status: "",
                    description: "The latest HH LLC integration allowing you to access a wider range of features",
                },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                        <Row>
                            {this.state.paymentgateways.map((pg) => {
                                if (pg.status === "preferred") {
                                    
                                       return (
                                       <Col md="6" lg="6" xl="3" className="golden-gateway">
                                            <Card >
                                                <CardBody className="head-title">
                                                    <h4 className="card-title">{pg.name}</h4>
                                                </CardBody>
                                                <CardBody>
                                                    <CardImg top width="50%" className="img-fluid" src={pg.imglink} alt="Card cap"/>
                                                </CardBody>
                                                <CardBody>
                                                <CardText>{pg.description}</CardText>
                                                    <Button tag={Link} to={"/Gateways/create/"+pg.id} color="primary" className="mr-1">Setup Gateway</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                       );
                                    
                                }
                                return "";
                            })}
                            {this.state.paymentgateways.map((pg) => {
                                if (pg.status === "recommended") {
                                    
                                       return (
                                       <Col md="6" lg="6" xl="3" className="green-gateway">
                                            <Card >
                                                <CardBody className="head-title" >
                                                    <h4 className="card-title">{pg.name}</h4>
                                                </CardBody>
                                                <CardBody>
                                                    <CardImg top width="50%" className="img-fluid" src={pg.imglink} alt="Card cap"/>
                                                </CardBody>
                                                <CardBody>
                                                <CardText>{pg.description}</CardText>
                                                    <Button tag={Link} to={"/Gateways/create/"+pg.id} color="primary" className="mr-1">Setup Gateway</Button>
                                                </CardBody>
                                            </Card>
                                        </Col>
                                       );
                                    
                                }
                                return "";
                            })}
                        </Row>
                        {this.state.paymentgateways.map((pg) => {
                            if (pg.status === "") {
                                return (
                                    
                                    <Col lg={6}>
                                        <Card>
                                            <Row>
                                                <Col sm={6}>
                                                    <CardBody className="head-title" >
                                                        <h2>{pg.name}</h2>
                                                        <CardText>
                                                            {pg.description}
                                                        </CardText>
                                                    </CardBody>
                                                </Col>
                                                <Col sm={6} className="text-md-right">
                                                    <CardBody className="head-title" >
                                                        <CardText></CardText>
                                                        <Button tag={Link} to={"/Gateways/create/"+pg.id} params={{id: pg.id}} color="primary" className="mr-1">Setup Gateway</Button>
                                                    </CardBody>
                                                </Col>
                                            </Row>
                                        </Card>
                                    </Col>
                                    
                                )
                            }
                            return "";
                        })}
                        
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(GatewaySelect)
