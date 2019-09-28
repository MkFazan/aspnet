import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import NavMenu from './Dashboard/Navigations/NavMenu';
import Footer from './Dashboard/Footer/Footer';

export default props => (
    <div>
        <NavMenu />
        {props.children}
        <Footer />
    </div>
);
