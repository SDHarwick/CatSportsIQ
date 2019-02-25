import React from 'react';

// Import routing components
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import {ConnectedRouter} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

// Import custom components
import Header from '../components/common/header/Header';
import Footer from '../components/common/footer/Footer';
import MainLayout from '../components/common/layout/MainLayout';
import NotFound from '../components/error/NotFound';
import LoginForm from '../containers/auth/LoginContainer';
import SignUpForm from '../containers/auth/SignUpContainer';
import Dashboard from '../containers/dashboard/DashboardContainer';
import UserManagementContainer from '../containers/userManagement/userManagementContainer';
import AuthenticatedRoute from './AuthenticatedRoute';

const Router = () => (
    <BrowserRouter>
        <div>
            <Header />
            <MainLayout>
            <Switch>
                <Route exact path="/login" component={LoginForm}/>
                <Route path="/signup" component={SignUpForm}/>
                <Route exact path="/" component={Dashboard}/>
                <Route exact path="/usermanagement" component={UserManagementContainer}/>
                <Route component={NotFound}/>
            </Switch>
            </MainLayout>
            <Footer/>
        </div>

    </BrowserRouter>
);

export default Router;


// <AuthenticatedRoute path="/sites/new" component={SiteCreateForm}/>
