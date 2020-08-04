import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Card, CardBody, CardText, Badge, Button, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { MDBDataTable } from 'mdbreact';

import { randomAvatar } from "../../../helpers/randomAvatar"

class ListPayments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions : [
                { avatar :  <div><img src={randomAvatar()} alt="user" className="avatar-xs rounded-circle mr-2" />Nico</div>, status : <Badge color={"success"} className="mr-1">Complete</Badge>, amount : "0", date : "1/04/2020", name: "Nico OxSEG" },  // success, warning, danger
            ],
            modal_standard: false,
        }
        this.tog_standard = this.tog_standard.bind(this);
    }

    tog_standard() {
        this.setState(prevState => ({
          modal_standard: !prevState.modal_standard
        }));
    }
    
    render() {
        const data = {
            columns: [
                {
                    label: 'Avatar',
                    field: 'avatar',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Full Name',
                    field: 'name',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc',
                    width: 200
                },
                {
                    label: 'Amount',
                    field: 'amount',
                    sort: 'asc',
                    width: 270
                },
                {
                    label: 'Date',
                    field: 'date',
                    sort: 'asc',
                    width: 100
                },
            ],
            rows: [
                ...this.state.transactions
            ]
        }
        let content = (
                        <div>
                            <h4 className="card-header font-16 mt-0">Payments</h4>
                            <CardBody>
                                <h4 className="card-title">No payments </h4>
                                <CardText>Unfortunately there hasn't been any payments on your webstore yet, when a payment is made by a player it will be listed here.</CardText>
                                <Link to="/payments/create" className="btn btn-primary">Create a Manual payment</Link>
                            </CardBody>
                        </div>
                    );
        if (this.state.transactions.length > 0) {
            content = (
                <CardBody>
                    <Row>
                        <Col xs={6} sm={8}>
                            <h4 className="card-title mb-4">Latest Transactions</h4>
                        </Col>
                        <Col sm={4} className="text-center text-md-right">
                            <Modal
                                isOpen={this.state.modal_standard}
                                toggle={this.tog_standard}
                                autoFocus={true}
                            > 
                                
                                <ModalHeader toggle={this.tog_standard}>
                                    Export CSV
                                </ModalHeader >
                                <ModalBody>
                                    <h5>...</h5>
                                    <p>You are about to export all payments. You can filter the payments to be exported by using the search tool on the previous page, and then pressing the Export CSV button again.</p>
                                </ModalBody>
                                <ModalFooter>
                                    <Button type="button" color="secondary" className="waves-effect" onClick={this.tog_standard}>Close</Button>
                                    <Button tag={Link} to="/payments/export" type="button" color="primary" className="waves-effect waves-light">Export</Button>
                                </ModalFooter>                                              
                            </Modal>
                            <Button tag={Link} to="/payments/create" type="button" color="primary" size="lg" className="waves-effect waves-light">Create Payment</Button>
                            <Button onClick={this.tog_standard} type="button" color="info" size="lg" className="waves-effect waves-light"><i className="mdi mdi-file-export-outline"></i>Export</Button>
                        </Col>
                    </Row>
                    <div className="table-responsive">
                        <Card>
                            <CardBody>

                                <h4 className="card-title">Payments</h4>
                                    <MDBDataTable
                                        responsive
                                        bordered
                                        striped
                                        data={data}
                                    />
                            </CardBody>
                        </Card>
                    </div>
                </CardBody>
            );
        }
        return (
            <React.Fragment>
                            <Card>
                                {content}                               
                            </Card>
            </React.Fragment>
        );
    }
}

export default ListPayments;