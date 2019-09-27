import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>WebApplication1</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer to={'/pages'} exact>
          <NavItem>
            <Glyphicon glyph='th-list' /> Pages
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/users'}>
          <NavItem>
            <Glyphicon glyph='user' /> Users
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/settings'}>
          <NavItem>
            <Glyphicon glyph='cog' /> Settings
          </NavItem>
        </LinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
