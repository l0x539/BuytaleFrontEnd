import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Card, CardBody, FormGroup } from "reactstrap";

//Import Multiple Select
import Select from "react-select";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

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

class Currency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Webstore", link : "#" },
                { title : "Currency", link : "/design/currency" },
            ],
            selectedGroup: null,
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Currency", this.state.breadcrumbItems);
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
                                                <i className="fa fa-credit-card fa-fw m-4 fa-3x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Currency</h5> The currency that package prices will be shown in.
                                            
                                        </Col>
                                        <Col className="my-auto">
                                            <FormGroup>
                                                <Select
                                                    value={selectedGroup}
                                                    onChange={this.handleSelectGroup}
                                                    options={optionGroup}
                                                    className="select2"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                    
                                    
                            </CardBody>
                        </Card>  
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Currency)