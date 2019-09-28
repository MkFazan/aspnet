import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Counter from './components/Counter';
import FetchData from './components/FetchData';
import Dashboard from './components/Dashboard/Contents/Index/Dashboard';
import Home from './components/Frontend/Contents/Home/Home';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/fetchdata/:startDateIndex?' component={FetchData} />
  </Layout>
);
