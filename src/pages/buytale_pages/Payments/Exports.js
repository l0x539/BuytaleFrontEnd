import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Card, CardBody, Table } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Exports extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Payments", link : "#" },
                { title : "Exports", link : "/exports" },
            ],
            exports: [
                {
                    id: 0,
                    description: "Infos.",
                    by: "Nico OxSEG",
                    time: "".concat(Date().split(" ", 5)),
                    link: "https://www.youtube.com/watch?v=oHg5SJYRHA0"
                }
            ]
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Exports", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                            <Card>
                                <CardBody>
                                    <div className="table-responsive">
                                        <Table className="table table-dark mb-0">

                                            <thead>
                                                <tr>
                                                    <th>DESCRIPTION</th>
                                                    <th>REQUESTED BY</th>
                                                    <th>TIME</th>
                                                    <th></th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.exports.map((exp)=>{
                                                    return (
                                                        <tr>
                                                            <th scope="row">{exp.description}</th>
                                                            <td>{exp.by}</td>
                                                            <td>{exp.time}</td>
                                                            <td><Link to={exp.link} className="link-success">download</Link></td>
                                                            <td><Link to={"#api-delete-"+exp.id} className="link-danger">delete</Link></td>
                                                        </tr>
                                                    );
                                                })}
                                                
                                            </tbody>
                                        </Table>
                                    </div>

                                </CardBody>
                            </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Exports)