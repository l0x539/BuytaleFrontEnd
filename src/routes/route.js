import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";


// Get all Auth methods
import { isUserAuthenticated, deleteUserLocalStorage, isUserAuth } from '../helpers/authUtils';

class AppRoute extends Component {

  constructor(props) {
      super(props);
      this.state = {
        isloggedin: isUserAuthenticated()
      }
      this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, values) {
      this.props.checkLogin(values.username, values.password, this.props.history);
  }

  componentDidMount() {
      isUserAuth().then(resp => {
        if (resp) {
          this.setState({isloggedin: true});
        } else {
          deleteUserLocalStorage();
          this.setState({isloggedin: false});
        }
      })
  }

  render() {
    const {
      component: Component,
      isAuthProtected,
      layout : Layout,
      ...rest
    } = this.props;
    return <Route
    {...rest}
      render={props => {
        if (isAuthProtected && !this.state.isloggedin) {
          console.log("condition checked")
          return (
            <Redirect to={{ pathname: "/login", state: { from: this.props.location } }} exact />
          );
        }

        return (
          <Layout>
            <Component {...this.props} />
          </Layout>
        );
      }}
    />
  }
}
// const AppRoute = ({
//   component: Component,
//   isAuthProtected,
//   layout : Layout,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={props => {
//       if (isAuthProtected && !isUserAuthenticated()) {
//         console.log("condition checked")
//         return (
//           <Redirect to={{ pathname: "/login", state: { from: props.location } }} exact />
//         );
//       }

//       return (
//         <Layout>
//           <Component {...props} />
//         </Layout>
//       );
//     }}
//   />
// );

export default AppRoute;

