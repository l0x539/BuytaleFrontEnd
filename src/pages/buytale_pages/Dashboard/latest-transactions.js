import React, { Component } from 'react';
import { Table, Card, CardBody, Button } from "reactstrap";
import { getAvatar } from '../../../helpers/getAvatar'

class LatestTransactions extends Component {
    constructor(props) {
        super(props);
        this.state = {
            transactions : [
                { imgUrl : getAvatar(), name : "Nico OxSEG", status : "Confirm", amount : "0", date : "1/04/2020", color : "success" },  // success, warning, danger
            ],
        }
    }
    
    render() {
        return (
            <React.Fragment>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title mb-4">Latest Transactions</h4>

                                    <div className="table-responsive">
                                        <Table className="table-centered table-vertical table-nowrap">

                                            <tbody>
                                                {
                                                    this.state.transactions.map((transaction, key) =>
                                                        <tr key={key}>
                                                            <td>
                                                                <img src={transaction.imgUrl} alt="user" className="avatar-xs rounded-circle mr-2" /> {transaction.name}
                                                            </td>
                                                            <td><i className={"mdi mdi-checkbox-blank-circle  text-" + transaction.color}></i> {transaction.status}</td>
                                                            <td>
                                                                ${transaction.amount}
                                                                <p className="m-0 text-muted font-14">Amount</p>
                                                            </td>
                                                            <td>
                                                                {transaction.date}
                                                                <p className="m-0 text-muted font-14">Date</p>
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
                                </CardBody>
                            </Card>
            </React.Fragment>
        );
    }
}

export default LatestTransactions;