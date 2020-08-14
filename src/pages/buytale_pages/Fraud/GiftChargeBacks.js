import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody } from "reactstrap";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

//Import Multiple Select
import Select from "react-select";


const optionGroup = [
    {
      label: "USD",
      options: [
        { label: "EN", value: "EN" },
        { label: "UK", value: "UK" },
      ]
    },
    {
      label: "EURO",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" }
      ]
    }
  ];

class GiftChargeBacks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Fraud", link : "#" },
                { title : "Gift Card Purchase Chargebacks", link : "/giftcards/chargebacks" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Gift Card Purchase Chargebacks", this.state.breadcrumbItems);
    }

    render() {
        const { selectedGroup } = this.state;
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                    <Row>
                                        <Col xl={1}>
                                            <div className="rounded-circle bg-dark text-white d-inline-block">
                                                <i className="fas fa-undo fa-fw m-4 fa-4x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Gift Card Purchase Chargebacks</h5> If a giftcard is subject to a chargeback, select what happens to purchases made using that giftcard.
                                            
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Select
                                                value={selectedGroup}
                                                onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                className="select2"
                                            />
                                        </Col>
                                    </Row>
                            </CardBody>
                        </Card>   
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(GiftChargeBacks)