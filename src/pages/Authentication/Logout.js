import React, { Component } from 'react';

class Logout extends Component {

    constructor(props) {
        super(props);
        this.state = {  };
    }

    componentDidMount() {
     
        // Remove all Item from localstorage and redirect to login page
        fetch("/api/v1/logout", {
            credentials: "same-origin"
          }).then(() => {
            localStorage.removeItem('user');
            this.props.history.push('/login');
          }).catch(err => "Couldn't logout");
        
    }

    render() {
        return (
            <React.Fragment>
               <h1>&nbsp;</h1>
            </React.Fragment>
        );
    }
}


export default Logout;

