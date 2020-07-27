import React, { Component } from 'react';
import { Table, Card, Badge, Button } from "reactstrap";

import { randomAvatar } from '../../../helpers/randomAvatar'

class LatestOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders : [
                { imgUrl : randomAvatar(), id : "1", name : "Nico 0xSEG", status : "Delivered", amount : "0", date : "1/04/2020", color : "success" }, // success, warning, danger
            ]
        }
    }
    
    render() {
        return (
            <React.Fragment>
                            <Card>
                                <div className="card-body">
                                    <h4 className="card-title mb-4">Latest Orders</h4>

                                    <div className="table-responsive">
                                        <Table className="table-centered table-vertical table-nowrap mb-1">

                                            <tbody>
                                                {
                                                    this.state.orders.map((order, key) =>
                                                        <tr key={key}>
                                                            <td>#{order.id}</td>
                                                            <td>
                                                                <img src={order.imgUrl} alt="user" className="avatar-xs mr-2 rounded-circle" /> {order.name}
                                                            </td>
                                                            <td><Badge color={order.color} className="badge-pill">{order.status}</Badge></td>
                                                            <td>
                                                                ${order.amount}
                                                            </td>
                                                            <td>
                                                                {order.date}
                                                            </td>
                                                            <td>
                                                                <Button color="secondary" size="sm" className="waves-effect waves-light">Edit</Button>
                                                            </td>
                                                        </tr>
                                                    )
                                                }
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </Card>
            </React.Fragment>
        );
    }
}

export default LatestOrders;