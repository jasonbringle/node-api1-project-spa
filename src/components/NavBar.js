import React from 'react';
import DisplayUsers from '../components/DisplayUsers';
import EditUser from '../components/EditUser';
import DeleteUsers from '../components/DeleteUsers';
import CreateUser from '../components/CreateUser';

import { BrowserRouter as Router,Route, Switch, Link } from "react-router-dom";

export default function NavBar(){
  

return (
        <Router>
            <div>
                <Link to="/">Add User</Link>
                <Link to="/get">Get Users</Link>
                <Link to="/edit">Edit User</Link>
                <Link to="/delete">Delete User</Link>
            </div>

            <Switch>
                <Route exact path="/" component={CreateUser}/>
                <Route  path="/get" component={DisplayUsers}/>
                <Route  path="/edit" component={EditUser}/>
                <Route  path="/delete" component={DeleteUsers}/>

            </Switch>
        </Router>
  );
}

