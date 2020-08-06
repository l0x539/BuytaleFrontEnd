
import React, { Component } from 'react';
import { connect } from "react-redux";

import { AvForm, AvField } from "availity-reactstrap-validation";
import { Card, CardBody, FormGroup, Button, Label, CardHeader } from "reactstrap";
import Select from "react-select";

import { Row, Col, Form } from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class CategoryCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Webstore", link : "#" },
                { title : "Create Category", link : "/category/create" },
            ],
            selectedGroup: null,
            selectedMulti: null,
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("", this.state.breadcrumbItems);
    }

    render() {
        const { selectedMulti, optionGroup } = this.state;
        return (
            <React.Fragment>
                        <Card>
                            <CardBody>
                                <h4 className="card-title">Categories</h4>
                                <p className="card-title-desc">Create a new Category.</p>
                                <AvForm>
                                    <Row>
                                        <Col>
                                            <AvField
                                                name="name"
                                                label="Name  "
                                                placeholder="Enter the name of the category"
                                                type="text"
                                                errorMessage="Enter a Category Name"
                                                validate={{ required: { value: true } }}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <h4 className="card-title">Description</h4>
                                            <Form method="post">
                                                <Editor
                                                    toolbarClassName="toolbarClassName"
                                                    wrapperClassName="wrapperClassName"
                                                    editorClassName="editorClassName"
                                                    editorStyle={{minHeight : "500px"}}
                                                />
                                            </Form>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="12">
                                        <FormGroup className="mb-0">
                                            <Label className="control-label">Packages</Label>
                                            <Select
                                                value={selectedMulti}
                                                isMulti={true}
                                                onChange={this.handleMulti}
                                                options={optionGroup}
                                                className="select2 select2-multiple"
                                            />

                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    {this.state.selectedMulti?this.state.selectedMulti.map((tpackage, i)=>{
                                        return (
                                            <Row key={i}>
                                                <Col>
                                                    <Card>
                                                        <CardHeader>
                                                            {tpackage.value}
                                                        </CardHeader>
                                                        <CardBody>
                                                            <AvField
                                                                name={tpackage.label + '_q'}
                                                                label={tpackage.value}
                                                                placeholder="0"
                                                                type="number"
                                                                errorMessage="Enter a quantity"
                                                                validate={{
                                                                    required: { value: true },
                                                                    pattern: {
                                                                    value: "^[0-9]+$",
                                                                    errorMessage: "Only Digits"
                                                                    }
                                                                }}
                                                            />
                                                        </CardBody>
                                                    </Card>
                                                </Col>
                                            </Row>
                                            );
                                        }):null
                                    }
                                    
                                    <Row>
                                        <Col xl="12">
                                            <FormGroup className="mb-0">
                                            <Label className="control-label"></Label>
                                                <div>
                                                    <Button type="submit" color="primary" className="waves-effect waves-light mr-1">
                                                        Create
                                                    </Button>
                                                    <Button type="reset" color="secondary" className="waves-effect" onClick={this.cancelEvent}>
                                                        Cancel
                                                    </Button>
                                                </div>
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </AvForm>
                            </CardBody>
                        </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CategoryCreate)
