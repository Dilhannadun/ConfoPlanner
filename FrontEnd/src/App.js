import React from "react";
import "App.css";

import Nav from "./Nav";
import Header from "./Components/Common/Header";
import Footer from "./Components/Common/Footer";
import Home from "./Components/Home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  withRouter,
} from "react-router-dom";
import Admin from "./Components/Admin/Dashboard";
import AllPendings from "./Components/Admin/AllPendings";
import AllAprovings from "./Components/Admin/AllAproveds";
import ManageUsers from "./Components/Admin/ManageUsers";
import PaymentChk from "./Components/Admin/PaymentChecking";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Download from "./Components/Home/Download";
import Login from "./Components/Common/Login";
import Register from "./Components/Common/Register";
import Profile from "./Components/Profile/Profile";
import AddPaper from "./Components/Profile/AddPaper";
import General from "./Components/Profile/General";
import ViewSchedule from "./Components/Editor/ViewSchedule";
import AddWorkShop from "./Components/Profile/AddWorkShop";

const useStyles = makeStyles((theme) => ({}));

const App = () => (
  <Router>
    <Container maxWidth="lg">
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin/all-pendings" exact component={AllPendings} />
          <Route path="/admin/all-approvings" exact component={AllAprovings} />
          <Route path="/admin/manage-users" exact component={ManageUsers} />
          <Route path="/admin/check-payments" exact component={PaymentChk} />
          <Route path="/admin" exact component={Admin} />
          <Route path="/download" exact component={Download} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/general" exact component={General} />
          <Route path="/addpaper" exact component={AddPaper} />
          <Route path="/editor" exact component={ViewSchedule} />
          <Route path="/addworkshop" exact component={AddWorkShop} />
        </Switch>
      </main>
    </Container>
  </Router>
);

export default App;
