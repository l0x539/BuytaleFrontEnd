import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import logodark from "../../assets/images/logo-dark.png";
import { getAvatar } from '../../helpers/getAvatar'
import { getUser } from '../../helpers/getUser'

class LockScreen extends Component {

    render() {
        const user = getUser();
        return (
            <React.Fragment>
                <div className="account-pages my-5 pt-sm-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md="8" lg="6" xl="5">
                                <Card className="overflow-hidden">
                                    <CardBody className="pt-0">
                                        <h3 className="text-center mt-4">
                                            <Link to="/" className="logo logo-admin"><img src={logodark} height="30" alt="logo"/></Link>
                                        </h3>
                                        <div className="p-3">
                                            <h4 className="text-muted font-size-18 mb-1 text-center">Locked</h4>
                                            <p className="text-muted text-center">Hello Smith, enter your password to unlock the screen!</p>
                                            <AvForm className="form-horizontal mt-4">

                                                <div className="user-thumb text-center mb-4">
                                                    <img src={getAvatar()} className="rounded-circle avatar-md img-thumbnail" alt="thumbnail"/>
                                                    <h6 className="font-size-16 mt-3">{user.firstname + " " + user.lastname}</h6>
                                                </div>

                                                <div className="form-group">
                                                    <label htmlFor="userpassword">Password</label>
                                                    <AvField name="email" className="form-control" type="hidden" value={user.email}/>
                                                    <AvField name="password" className="form-control" type="password" placeholder="Enter password"/>
                                                </div>

                                                <div className="form-group row">
                                                    <div className="col-12 text-right">
                                                        <Button color="primary" className="w-md waves-effect waves-light" type="submit">Unlock</Button>
                                                    </div>
                                                </div>
                                            </AvForm>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p>Not you ? return <Link to="/login" className=" text-primary"> Sign In </Link> </p>
                                    <p>© 2018 - 2020 Buytale. Crafted with <i className="mdi mdi-heart text-danger"></i> by HytaleHub LLC</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}


export default LockScreen;