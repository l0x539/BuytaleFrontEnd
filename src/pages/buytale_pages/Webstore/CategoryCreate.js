
import React, { Component } from 'react';
import { connect } from "react-redux";

import { AvForm, AvField } from "availity-reactstrap-validation";
import { Card, CardBody, FormGroup, Button, Label, ListGroup, ListGroupItem } from "reactstrap";
import Select from "react-select";

import { Row, Col } from "reactstrap";

// Form Editor
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

//Import Switch
import Switch from "react-switch";

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
            switch1: false,
            switch2: false,
            switch3: false,
            switch4: false,
            switch5: false,
            switch6: false,
            switch7: false,

        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("", this.state.breadcrumbItems);
    }

    handleSelectGroup = selectedGroup => {
        this.setState({ selectedGroup });
    };
    handleMulti = selectedMulti => {
        this.setState({ selectedMulti });
    };

    render() {
        const { selectedGroup, selectedMulti, optionGroup } = this.state;

        function Offsymbol(text){
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                  color: "#fff",
                  paddingRight: 2
                }}
              >
                {" "}
                {text}
              </div>
            );
          };
      
        function OnSymbol(text) {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100%",
                  fontSize: 12,
                  color: "#fff",
                  paddingRight: 2
                }}
              >
                {" "}
                {text}
              </div>
            );
          };

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
                                            <Editor
                                                toolbarClassName="toolbarClassName"
                                                wrapperClassName="wrapperClassName"
                                                editorClassName="editorClassName"
                                                editorStyle={{minHeight : "200px"}}
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="6">
                                        <FormGroup>
                                            <Label className="control-label"> Parent Category</Label>
                                            <Select
                                                value={selectedGroup}
                                                onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                className="select2"
                                                placeholder="Do not assign a parent category."
                                            />
                                        </FormGroup>
                                        </Col>
                                        <Col xl="6">
                                        <FormGroup>
                                            <Label className="control-label">Packages Display Type</Label>
                                            <Select
                                                value={selectedGroup}
                                                onChange={this.handleSelectGroup}
                                                options={optionGroup}
                                                className="select2"
                                            />
                                        </FormGroup>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xl="6">
                                            <FormGroup className="mb-0">
                                                <Label className="control-label">Restrict Category By Packages</Label>
                                                <Select
                                                    value={selectedMulti}
                                                    isMulti={true}
                                                    onChange={this.handleMulti}
                                                    options={optionGroup}
                                                    placeholder="Nothing Selected"
                                                    className="select2 select2-multiple"
                                                />

                                            </FormGroup>
                                        </Col>
                                        <Col xl="6">
                                            <AvField
                                                name="guiitem"
                                                label="GUI Item "
                                                placeholder="Enter the material ID to represent this category in-game"
                                                type="text"
                                                errorMessage="Enter Gui Item"
                                                validate={{ required: { value: false } }}
                                            />
                                        </Col>
                                    </Row>
                                </AvForm>
                            </CardBody>
                        </Card>
                        <Card>
                            <CardBody>
                                    <ListGroup>
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={11}>
                                                    <h4>Disable this category and remove it from the webstore. </h4>
                                                </Col>
                                                <Col xl={1}>
                                                    <Switch
                                                        uncheckedIcon={Offsymbol("No")}
                                                        checkedIcon={OnSymbol("Yes")}
                                                        onColor="#02a499"
                                                        onChange={() =>
                                                        this.setState({  switch1: !this.state.switch1 })
                                                        }
                                                        checked={this.state.switch1}
                                                        className="mr-1 mt-1"
                                                    />
                                                </Col>                      
                                            </Row>
                                        </ListGroupItem> 
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={11}>
                                                    <h4> Cumulate the purchases inside of this category.  </h4>
                                                </Col>
                                                <Col xl={1}>
                                                    <Switch
                                                        uncheckedIcon={Offsymbol("No")}
                                                        checkedIcon={OnSymbol("Yes")}
                                                        onColor="#02a499"
                                                        onChange={() =>
                                                        this.setState({  switch2: !this.state.switch2 })
                                                        }
                                                        checked={this.state.switch2}
                                                        className="mr-1 mt-1"
                                                    />
                                                </Col>                      
                                            </Row>
                                        </ListGroupItem> 
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={11}>
                                                    <h4> Disable packages that have a lower price than the current purchased package. (Requires Cumulative)  </h4>
                                                </Col>
                                                <Col xl={1}>
                                                    <Switch
                                                        uncheckedIcon={Offsymbol("No")}
                                                        checkedIcon={OnSymbol("Yes")}
                                                        onColor="#02a499"
                                                        onChange={() =>
                                                        this.setState({  switch3: !this.state.switch3 })
                                                        }
                                                        checked={this.state.switch3}
                                                        className="mr-1 mt-1"
                                                    />
                                                </Col>                      
                                            </Row>
                                        </ListGroupItem> 
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={11}>
                                                    <h4> Only allow the customer to purchase one package from this category.  </h4>
                                                </Col>
                                                <Col xl={1}>
                                                    <Switch
                                                        uncheckedIcon={Offsymbol("No")}
                                                        checkedIcon={OnSymbol("Yes")}
                                                        onColor="#02a499"
                                                        onChange={() =>
                                                        this.setState({  switch4: !this.state.switch4 })
                                                        }
                                                        checked={this.state.switch4}
                                                        className="mr-1 mt-1"
                                                    />
                                                </Col>                      
                                            </Row>
                                        </ListGroupItem> 
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={11}>
                                                    <h4>Delete pending expiry commands of other packages in this category upon a new purchase.  </h4>
                                                </Col>
                                                <Col xl={1}>
                                                    <Switch
                                                        uncheckedIcon={Offsymbol("No")}
                                                        checkedIcon={OnSymbol("Yes")}
                                                        onColor="#02a499"
                                                        onChange={() =>
                                                        this.setState({  switch5: !this.state.switch5 })
                                                        }
                                                        checked={this.state.switch5}
                                                        className="mr-1 mt-1"
                                                    />
                                                </Col>                      
                                            </Row>
                                        </ListGroupItem> 
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={11}>
                                                    <h4> Add any remaining time of other purchased packages in this category onto new purchases. </h4>
                                                </Col>
                                                <Col xl={1}>
                                                    <Switch
                                                        uncheckedIcon={Offsymbol("No")}
                                                        checkedIcon={OnSymbol("Yes")}
                                                        onColor="#02a499"
                                                        onChange={() =>
                                                        this.setState({  switch6: !this.state.switch6 })
                                                        }
                                                        checked={this.state.switch6}
                                                        className="mr-1 mt-1"
                                                    />
                                                </Col>                      
                                            </Row>
                                        </ListGroupItem> 
                                        <ListGroupItem>
                                            <Row>
                                                <Col xl={11}>
                                                    <h4> Order the packages on the webstore in this category by price.  </h4>
                                                </Col>
                                                <Col xl={1}>
                                                    <Switch
                                                        uncheckedIcon={Offsymbol("No")}
                                                        checkedIcon={OnSymbol("Yes")}
                                                        onColor="#02a499"
                                                        onChange={() =>
                                                        this.setState({  switch7: !this.state.switch7 })
                                                        }
                                                        checked={this.state.switch7}
                                                        className="mr-1 mt-1"
                                                    />
                                                </Col>                      
                                            </Row>
                                        </ListGroupItem> 
                                    </ListGroup> 
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
                            </CardBody>
                        </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(CategoryCreate)
