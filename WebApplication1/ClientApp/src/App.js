import React from 'react';
import { Route } from 'react-router';
import FetchData from './components/FetchData';
import Dashboard from './components/Dashboard/Contents/Index/Dashboard';
import Home from './components/Frontend/Contents/Home/Home';
import LayoutFront from './components/Frontend/Layout/LayoutFront';
import LayoutDashboard from './components/Dashboard/Layout/LayoutDashboard';

class App extends React.Component {

    render() {

        let path = window.location.pathname.split('/');
        if (path[1] == "dashboard") {
            return <LayoutDashboard>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
            </LayoutDashboard>
        } else {
            return <LayoutFront>
                <Route exact path='/' component={Home} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
            </LayoutFront>;
        }
    }
}

export default App;
