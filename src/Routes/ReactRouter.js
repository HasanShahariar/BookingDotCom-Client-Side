import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Header from "../components/Shared/Header/Header";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
import Footer from "../components/Shared/Footer/Footer";
import ContactUs from "../components/Contact Us/ContactUs";
import ServiceDetails from "../components/ServiceDetails/ServiceDetails";
import AuthProvider from "../contexts/AuthProvider";
import PrivateRoute from "../components/Login/PrivateRoute/PrivateRoute";
import NotFound from "../components/NotFound/NotFound";

import MyOrders from "../components/MyOrders/MyOrders";
import ManageAllOrders from "../components/ManageAllOrders/ManageAllOrders";

const ReactRouter = () => {
  console.log("router");
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            
            <Route exact path="/myOrders">
              <MyOrders></MyOrders>
            </Route>
            <Route exact path="/manageAllOrders">
              <ManageAllOrders></ManageAllOrders>
            </Route>
            
            <Route path="/contactus">
              <ContactUs></ContactUs>
            </Route>
            <PrivateRoute exact path="/service/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/signup">
              <Signup></Signup>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
            <Footer></Footer>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
};

export default ReactRouter;
