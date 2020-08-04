import React, { Component } from 'react';
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { Row, Col, Button, Card, Table, CardBody, CardText } from "reactstrap";
//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Taxes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Taxes", link : "/taxes" },
            ],
            taxes: [
                {
                    id: 1,
                    name: "Fee",
                    percentage: 20,
                    location: "US, Georgia"
                }
            ]
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Taxes", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                            {
                                this.state.taxes.length === 0?
                                <div className="card card-body text-center">
                                    <CardBody>
                                        <h1 className="display-1"><i className="mdi mdi-percent"></i></h1>
                                        <CardText>Setup country specific tax rates if you are required to comply with local law {'&'} regulations.
                                        </CardText>
                                        <Link to="/taxes/create" className="btn btn-primary">Create Your First Tax Rate</Link>
                                    </CardBody>
                                </div> 
                                :
                                <Card>
                                    <CardBody>
                                        <Row>
                                            <Col xs={6} sm={8}>
                                                <h4 className="card-title mb-4">Latest Transactions</h4>
                                            </Col>
                                            <Col sm={4} className="text-center text-md-right">
                                                <Button tag={Link} to="/taxes/create" type="button" color="primary" size="lg" className="waves-effect waves-light">Create Tax</Button>
                                            </Col>
                                        </Row>
                                    </CardBody>
                                    <CardBody>
                                        <div className="table-responsive">
                                            <Table className="table table-bordered mb-0">

                                                <thead className="thead-light">
                                                    <tr>
                                                        <th>Name</th>
                                                        <th>Percentage</th>
                                                        <th>Location</th>
                                                        <th></th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.state.taxes.map((tax)=>{
                                                        return (
                                                            <tr key={tax.id}>
                                                                <th scope="row">{tax.name}</th>
                                                                <td>%{tax.percentage}</td>
                                                                <td>{tax.location}</td>
                                                                <td><Link to={"/Taxes/edit/"+tax.id} className="link-success">Edit</Link></td>
                                                                <td><Link to={"#api-delete-"+tax.id} className="link-danger">delete</Link></td>
                                                            </tr>
                                                        );
                                                    })}
                                                    
                                                </tbody>
                                            </Table>
                                        </div>

                                    </CardBody>
                                </Card>

                                
                            }
                             
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Taxes)