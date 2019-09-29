import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';

export default props => (
    <div>
        <Header />
        <Sidebar />
    </div>
);
