import React, { Component } from 'react';
import { connect } from "react-redux";

import {
    Card,
    CardBody,
    Collapse,
    Col,
    Row,
    ListGroup,
    ListGroupItem,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem,
    Button
  } from "reactstrap";
  import { Link } from "react-router-dom";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class Packages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Webstore", link : "#" },
                { title : "Packages", link : "/packages" },
            ],
            cols: [],
            Categories: [
                {
                    id: 0,
                    name: "Category 1",
                    packages: [
                        {
                            id: 1,
                            name: "Eaxample Package",
                            price: "$15.00"
                        },
                        {
                            id: 2,
                            name: "Package2",
                            price: "$3.00"
                        }
                    ],
                    subpackages: [
                        {
                            id: 3,
                            name: "Subpackage Example",
                            content: [
                                {
                                    id: 4,
                                    name: "Eaxample SubPackage",
                                    price: "$15.00"
                                }
                            ]

                        }
                    ]
                    
                },
                {
                    id: 5,
                    name: "Category 1",
                    packages: [
                        {
                            id: 6,
                            name: "Eaxample Package",
                            price: "$15.00"
                        },
                        {
                            id: 7,
                            name: "Package2",
                            price: "$3.00"
                        }
                    ],
                    subpackages: [
                        {
                            id: 8,
                            name: "Subpackage Example",
                            content: [
                                {
                                    id: 9,
                                    name: "Eaxample SubPackage",
                                    price: "$15.00"
                                }
                            ]

                        }
                    ]
                    
                }
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("Packages", this.state.breadcrumbItems);
    }

    toggle_acc = (col) => {
        if (this.state.cols.includes(col)) {
            let arr = this.state.cols;
            arr.splice(arr.indexOf(col), 1);
            this.setState({ cols: arr });
            return
        }
        let arr = this.state.cols;
        arr.push(col);
        this.setState({ cols:  arr});
    }

    CustomToggle = ({ children, onClick }, ref) => (
        <a
          href="/packages"
          ref={ref}
          onClick={(e) => {
            e.preventDefault();
            onClick(e);
          }}
        >
          {children}
        </a>
      )
      

    render() {
        // TODO implement a draggable list.
        return (
            <React.Fragment>
                            <Row>
                                <Col className="p-3">
                                    <div className="text-md-right">
                                        <div className="btn-group mr-1 mt-2">
                                            <Button type="button" color="primary" className="waves-effect waves-light">Mass Edit</Button>
                                        </div>
                                        <div className="btn-group mr-1 mt-2">
                                            <Dropdown
                                                isOpen={this.state.btnSuccess1}
                                                toggle={() =>
                                                    this.setState({ btnSuccess1: !this.state.btnSuccess1 })
                                                }
                                            >
                                                <DropdownToggle tag="button" className="btn btn-success">
                                                    Add New <i className="mdi mdi-chevron-down"></i>
                                                </DropdownToggle>
                                                <DropdownMenu>
                                                    <DropdownItem href="/category/create">Category</DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem href="#">Package</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                        <div className="btn-group mr-1 mt-2">
                                            <Button type="button" color="primary" className="waves-effect waves-light">Primary</Button>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Card>
                                <CardBody>

                                    <h4 className="card-title">{this.state.Categories.length} Categories</h4>
                                    <div id="accordion">
                                        {this.state.Categories.map((category) => {
                                            return (
                                                <Card key={category.id}>
                                                    <CardBody>
                                                        <div className="card mb-1 shadow-none">
                                                            <div className="card-header p-3" id={category.id}>
                                                                <h6 className="m-0 font-size-14">
                                                                    <Row>
                                                                        <Col sm={4}>
                                                                            {category.name}
                                                                        </Col>
                                                                        <Col sm={1}>
                                                                            ID:{category.id}
                                                                        </Col>
                                                                        <Col sm={5} className="text-center text-md-right">
                                                                            <Link to={"/Categories/create/parent/"+category.id}>Create subcategory</Link>
                                                                        </Col>
                                                                        <Col sm={1} className="text-center text-md-right">
                                                                            <Dropdown
                                                                                isOpen={this.state.drop === category.id}
                                                                                toggle={() => {
                                                                                    this.setState({ drop: this.state.drop===category.id?null:category.id })
                                                                                }
                                                                                
                                                                                }
                                                                            >
                                                                            <DropdownToggle tag="a" className="" >
                                                                                <i className="fas fa-ellipsis-h" id="dropdown-custom-components"></i>
                                                                            </DropdownToggle>
                                                                            <DropdownMenu>
                                                                                    <DropdownItem href="#">Clone</DropdownItem>
                                                                                    <DropdownItem href="#">Edit</DropdownItem>
                                                                                    <DropdownItem href="#">Delete</DropdownItem>
                                                                            </DropdownMenu>
                                                                            </Dropdown>
                                                                        </Col>
                                                                        <Col sm={1} className="text-center text-md-right">
                                                                            <Link
                                                                                to="#"
                                                                                className="text-dark"
                                                                                onClick={()=>{this.toggle_acc(category.id)}} 
                                                                                style={{ cursor : "pointer" }}
                                                                            >
                                                                                {this.state.cols.includes(category.id)?<i className="mdi mdi-chevron-up"></i>:<i className="mdi mdi-chevron-down"></i>}
                                                                            </Link>
                                                                        </Col>
                                                                    </Row>
                                                                </h6>
                                                            </div>

                                                            <Collapse isOpen={this.state.cols.includes(category.id)}>
                                                                <CardBody>
                                                                    {
                                                                        category.packages.length < 1?
                                                                        <ListGroup>
                                                                                <ListGroupItem>Drag a package here or or <Link to="">Create one</Link></ListGroupItem>
                                                                        </ListGroup>
                                                                        :""
                                                                    }
                                                                    {category.packages.map((pack)=>{
                                                                        return (
                                                                                <ListGroup key={pack.id}>
                                                                                    
                                                                                    <ListGroupItem>
                                                                                        <Row>
                                                                                            <Col sm={4}>
                                                                                                {pack.name}
                                                                                            </Col>
                                                                                            <Col sm={1}>
                                                                                                ID:{pack.id}
                                                                                            </Col>
                                                                                            <Col sm={5} className="text-center">
                                                                                                {pack.price}
                                                                                            </Col>
                                                                                            <Col sm={1} className="text-center text-md-right">
                                                                                            </Col>
                                                                                            <Col sm={1} className="text-center text-md-right">
                                                                                                <Dropdown
                                                                                                    isOpen={this.state.drop === pack.id}
                                                                                                    toggle={() => {
                                                                                                        this.setState({ drop: this.state.drop===pack.id?null:pack.id })
                                                                                                    }
                                                                                                    
                                                                                                    }
                                                                                                >
                                                                                                <DropdownToggle tag="a" className="" >
                                                                                                    <i className="fas fa-ellipsis-h" id="dropdown-custom-components"></i>
                                                                                                </DropdownToggle>
                                                                                                <DropdownMenu>
                                                                                                        <DropdownItem href="#">Clone</DropdownItem>
                                                                                                        <DropdownItem href="#">Edit</DropdownItem>
                                                                                                        <DropdownItem href="#">Delete</DropdownItem>
                                                                                                </DropdownMenu>
                                                                                                </Dropdown>
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </ListGroupItem>
                                                                                </ListGroup>    
                                                                        )
                                                                    })}
                                                                    {category.subpackages.map((subpack) => {
                                                                        return (
                                                                            <div className="card mb-1 shadow-none" key={subpack.id}>
                                                                                <div className="card-header p-3" id={subpack.id}>
                                                                                    <h6 className="m-0 font-size-14">
                                                                                        <Row>
                                                                                            <Col sm={4}>
                                                                                                {subpack.name}
                                                                                            </Col>
                                                                                            <Col sm={1}>
                                                                                                ID:{subpack.id}
                                                                                            </Col>
                                                                                            <Col sm={5} className="text-center text-md-right">
                                                                                            </Col>
                                                                                            <Col sm={1} className="text-center text-md-right">
                                                                                                <Dropdown
                                                                                                    isOpen={this.state.drop===subpack.id}
                                                                                                    toggle={() => {
                                                                                                        this.setState({ drop: this.state.drop===subpack.id?null:subpack.id });
                                                                                                    }
                                                                                                    }
                                                                                                >
                                                                                                <DropdownToggle tag="a" className="" >
                                                                                                    <i className="fas fa-ellipsis-h" id="dropdown-custom-components"></i>
                                                                                                </DropdownToggle>
                                                                                                <DropdownMenu>
                                                                                                        <DropdownItem href="#">Clone</DropdownItem>
                                                                                                        <DropdownItem href="#">Edit</DropdownItem>
                                                                                                        <DropdownItem href="#">Delete</DropdownItem>
                                                                                                </DropdownMenu>
                                                                                                </Dropdown>
                                                                                            </Col>
                                                                                            <Col sm={1} className="text-center text-md-right">
                                                                                                <Link
                                                                                                    to="#"
                                                                                                    className="text-dark"
                                                                                                    onClick={()=>{this.toggle_acc(subpack.id)}} 
                                                                                                    style={{ cursor : "pointer" }}
                                                                                                >
                                                                                                    {this.state.cols.includes(subpack.id)?<i className="mdi mdi-chevron-up"></i>:<i className="mdi mdi-chevron-down"></i>}
                                                                                                </Link>
                                                                                            </Col>
                                                                                        </Row>
                                                                                    </h6>
                                                                                </div>

                                                                                <Collapse isOpen={this.state.cols.includes(subpack.id)}>
                                                                                    <CardBody>
                                                                                        {
                                                                                            subpack.content.length < 1?
                                                                                            <ListGroup>
                                                                                                    <ListGroupItem>Drag a package here or or <Link to="">Create one</Link></ListGroupItem>
                                                                                            </ListGroup>
                                                                                            :""
                                                                                        }
                                                                                        {subpack.content.map((pack)=>{
                                                                                            return (
                                                                                                    <ListGroup key={pack.id}>
                                                                                                        <ListGroupItem>
                                                                                                            <Row>
                                                                                                                <Col sm={4}>
                                                                                                                    {pack.name}
                                                                                                                </Col>
                                                                                                                <Col sm={1}>
                                                                                                                    ID:{pack.id}
                                                                                                                </Col>
                                                                                                                <Col sm={5} className="text-center">
                                                                                                                    {pack.price}
                                                                                                                </Col>
                                                                                                                <Col sm={1} className="text-center text-md-right">
                                                                                                                </Col>
                                                                                                                <Col sm={1} className="text-center text-md-right">
                                                                                                                    <Dropdown
                                                                                                                        isOpen={this.state.drop===pack.id}
                                                                                                                        toggle={() => {
                                                                                                                            this.setState({ drop: this.state.drop===pack.id?null:pack.id });
                                                                                                                        }
                                                                                                                        }
                                                                                                                    >
                                                                                                                    <DropdownToggle tag="a" className="" >
                                                                                                                        <i className="fas fa-ellipsis-h" id="dropdown-custom-components"></i>
                                                                                                                    </DropdownToggle>
                                                                                                                    <DropdownMenu>
                                                                                                                            <DropdownItem href="#">Clone</DropdownItem>
                                                                                                                            <DropdownItem href="#">Edit</DropdownItem>
                                                                                                                            <DropdownItem href="#">Delete</DropdownItem>
                                                                                                                    </DropdownMenu>
                                                                                                                    </Dropdown>
                                                                                                                </Col>
                                                                                                            </Row>
                                                                                                        </ListGroupItem>
                                                                                                    </ListGroup>    
                                                                                            )
                                                                                        })}
                                                                                    </CardBody>
                                                                                </Collapse>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </CardBody>
                                                            </Collapse>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                            )

                                        })}
                                    </div>
                                </CardBody>
                            </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Packages)