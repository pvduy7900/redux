import React from 'react';
import { Route, Switch} from 'react-router-dom'
import Homepage from '../HomePage/HomePage'
import Loginpage from '../LoginPage/LoginPage'
import RegisterPage from '../RegisterPage/RegisterPage'
import PrivateRoute from '../Routes/PrivateRoute'
import DashboardPage from '../DashboarPage/DashboardPage'


const Routes = (props) => {
    return (
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/login" component={Loginpage} />
            <Route exact path="/register" component={RegisterPage} />
            <PrivateRoute exact path="/dashboard" component={DashboardPage} />
        </Switch>
    );
};
export default Routes
