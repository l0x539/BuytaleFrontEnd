import React, { Component } from 'react';
import { connect } from "react-redux";
import axios from 'axios';
import {
    Col,
    Row,
    Card,
    CardBody,
    Button,
    Form
  } from "reactstrap";
import Dropzone from "react-dropzone";
import { Link } from "react-router-dom";

import { AvForm, AvField } from "availity-reactstrap-validation";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";
import { getUser } from '../../../helpers/getUser'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : "Settings", link : "#" },
                { title : "profile", link : "/Profile" },
            ],
            selectedFile: null
        }
        this.handleAcceptedFile = this.handleAcceptedFile.bind(this);
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("profile", this.state.breadcrumbItems);
    }

    formatBytes = (bytes, decimals = 2) => {
        if (bytes === 0) return "0 Bytes";
        const k = 1024;
        const dm = decimals < 0 ? 0 : decimals;
        const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
    };

    handleAcceptedFile = f => {
        const file = f[0];
        Object.assign(file, {
            preview: URL.createObjectURL(file),
            formattedSize: this.formatBytes(file.size)
        })

        this.setState({ selectedFile: file });
    };

    handleUpdate = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('avatar', this.state.selectedFile)
        axios.post("/api/v1/editprofile/picture", data).then(res => { // then print response status
            const user = JSON.parse(localStorage.getItem("user"));
            user.avatar = res.data[1].newfilename;
            localStorage.setItem("user", JSON.stringify(user));

            this.setState({status: res.status})
         }).catch(err => {
             console.log(err);
             this.setState({status: "error"})
         })
    };

    render() {
        const user = getUser();
        return (
            <React.Fragment>
                            <Card>
                                <CardBody>
                                    <h4 className="card-title">Edit Profile</h4>
                                    <AvForm>
                                        <AvField
                                            name="firstname"
                                            label="First Name "
                                            placeholder={user.firstname}
                                            type="text"
                                            errorMessage="Enter First Name"
                                            validate={{ required: { value: false } }}
                                        />
                                        <AvField
                                            name="lastname"
                                            label="Last Name "
                                            placeholder={user.lastname}
                                            type="text"
                                            errorMessage="Enter Last Name"
                                            validate={{ required: { value: false } }}
                                        />
                                        <AvField
                                            name="more_emails"
                                            label="Add E-Mail  "
                                            placeholder="Enter Valid Email"
                                            type="email"
                                            errorMessage="Invalid Email"
                                            validate={{
                                                required: { value: false },
                                                email: { value: true }
                                            }}
                                        />
                                        
                                    </AvForm>
                                </CardBody>
                                <Row>
                                    <Col lg="3">
                                    </Col>
                                    <Col lg="6">
                                        <CardBody>
                                            <h4 className="card-title">Update Avatar</h4>
                                            <p className="card-title-desc"> DropzoneJS is an open source library that provides
                                                                drag’n’drop file uploads with image previews.
                                            </p>
                                            <Form>
                                            <Dropzone
                                                onDrop={acceptedFile =>
                                                this.handleAcceptedFile(acceptedFile)
                                                }
                                            >
                                                {({ getRootProps, getInputProps }) => (
                                                <div className="dropzone">
                                                    <div
                                                    className="dz-message needsclick"
                                                    {...getRootProps()}
                                                    >
                                                    <input {...getInputProps()} />
                                                    <h3>Drop your avatar here or click to upload.</h3>
                                                    </div>
                                                </div>
                                                )}
                                            </Dropzone>
                                            <div
                                                className="dropzone-previews mt-3"
                                                id="file-previews"
                                            >
                                                
                                                {this.state.selectedFile===null?"":<Card
                                                className="mt-1 mb-0 shadow-none border dz-processing dz-image-preview dz-success dz-complete"
                                                >
                                                <div className="p-2">
                                                    <Row className="align-items-center">
                                                    <Col className="col-auto">
                                                        <img
                                                        data-dz-thumbnail=""
                                                        height="80"
                                                        className="avatar-sm rounded bg-light"
                                                        alt={this.state.selectedFile.name}
                                                        src={this.state.selectedFile.preview}
                                                        />
                                                    </Col>
                                                    <Col>
                                                        <Link
                                                        to="#"
                                                        className="text-muted font-weight-bold"
                                                        >
                                                        {this.state.selectedFile.name}
                                                        </Link>
                                                        <p className="mb-0">
                                                        <strong>{this.state.selectedFile.formattedSize}</strong>
                                                        </p>
                                                    </Col>
                                                    </Row>
                                                </div>
                                                </Card>}
                                                
                                            </div>
                                            </Form>
            
                                            <div className="text-center mt-4">
                                                <Button type="button" color="primary" onClick={this.handleUpdate} className="waves-effect waves-light">Update</Button>
                                            </div>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </Card>
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(Profile)
