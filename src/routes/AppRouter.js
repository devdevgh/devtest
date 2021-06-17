import React from 'react';
import {
    HashRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import HomePage from '../components/page/HomePage';
import ProductPage from '../components/page/ProductPage';
import Navbar from '../components/ui/Navbar';
import NotFoundPage from '../components/ui/NotFoundPage';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/product" component={ProductPage} />

                <Route exact path="/" component={HomePage} />

                <Route component={NotFoundPage} />

            </Switch>
        </Router>
    )
}

export default AppRouter
