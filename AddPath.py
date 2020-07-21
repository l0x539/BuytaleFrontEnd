
import os
import sys

# Add path file
input("Don't Run this unless you know what its doing! ")

_PROJECT_DIR = "D:\\0x539\\Coding\\NodeJS\\Buytale\\BuytaleFrontEnd"
_OS_SEP = "\\" if os.name == "nt" else "/"

def make_path(path):
	ROOT = ""
	if path[1] == ":":
		_ROOT = path[:2]
	PATHS = path.split(_OS_SEP)[:-1]
	for i in range(len(PATHS)):
		CH_DIR = ROOT + f"{_OS_SEP}".join(PATHS[:i+1])
		if not os.path.exists(CH_DIR):
			os.makedirs(CH_DIR)

def create_file(path):
	breadcrumb = path.split("buytale_pages")[1].split(_OS_SEP)[1]
	file_name = path.split(_OS_SEP)[-1][:-3]
	FILE = \
"""
import React, { Component } from 'react';
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";


class """ + file_name + """ extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breadcrumbItems : [
                { title : "Buytale", link : "/" },
                { title : \"""" + breadcrumb + """\", link : "#" },
                { title : "", link : "/" },
            ],
        }
    } 

    componentDidMount(){
        this.props.setBreadcrumbItems("", this.state.breadcrumbItems);
    }

    render() {
        return (
            <React.Fragment>
                              
            </React.Fragment>
        );
    }
}

export default connect(null, { setBreadcrumbItems })(""" + file_name +""")
"""
	with open(path, "w") as f:
		f.write(FILE)
		f.close()

with open(_PROJECT_DIR+"\\src\\routes\\index.js".replace("\\", _OS_SEP), "r") as f:
	for line in f.readlines():
		if "import" in line and "from" in line and "../pages" in line and not "Extra Pages" in line:
			path = line.split(" ")[3][1:-2].replace("..", _PROJECT_DIR + _OS_SEP +"src")[:-1] + ".js"
			path = path.replace('/', _OS_SEP)
			print(path)
			if not os.path.isfile(path):
				print(f"Making {path}")
				make_path(path)
				create_file(path)
	f.close()
