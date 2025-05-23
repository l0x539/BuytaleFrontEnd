import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

class Pages500 extends Component {

    render() {
        return (
            <React.Fragment>
            <div className="account-pages my-5 pt-sm-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="8" lg="6" xl="5">
                            <Card className="overflow-hidden">
                                <CardBody className="pt-0">

                                    <div className="ex-page-content text-center">
                                        <h1 className="text-dark">500</h1>
                                        <h3 className="">Internal Server Error</h3>
                                        <br/>

                                        <Link className="btn btn-info mb-4 waves-effect waves-light" to="/dashboard"><i className="mdi mdi-home"></i> Back to Dashboard</Link>
                                    </div>

                                </CardBody>
                            </Card>
                            <div className="mt-5 text-center">
                                <p>©2020 Buytale. Crafted with <i className="mdi mdi-heart text-danger"></i> by HytaleHub LLC</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>            
            </React.Fragment>
        );
    }
}

export default Pages500;