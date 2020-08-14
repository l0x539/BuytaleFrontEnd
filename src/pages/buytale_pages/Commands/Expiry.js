import React, { Component } from 'react';
import { connect } from "react-redux";

import { Row, Col, Button, Card, CardBody } from "reactstrap";

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

class Expiry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Commands", link : "#" },
                { title : "Command Expiry", link : "/commands/expiry" },
            ],
            selectedGroup: null,
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Command Expiry", this.state.breadcrumbItems);
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
                                                <i className="mdi mdi-calendar fa-fw m-4 fa-5x"></i>
                                            </div>
                                        </Col>
                                        <Col xl={7} className="my-auto">
                                                <h5 className="font-size-16">Command Expiry</h5> Using this setting you can remove pending commands from the plugin queue after a certain period of time.
                                            
                                        </Col>
                                        <Col xl={3} className="my-auto">
                                                <Select
                                                    value={selectedGroup}
                                                    onChange={this.handleSelectGroup}
                                                    options={optionGroup}
                                                    className="select2"
                                                />
                                        </Col>
                                        <Col className="my-auto text-right">
                                            <Button type="button" color="primary" size="lg" className="waves-effect waves-light">Update</Button>
                                        </Col>
                                    </Row>
                                    
                                    
                            </CardBody>
                        </Card> 
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Expiry)