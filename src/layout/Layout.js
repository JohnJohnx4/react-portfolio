import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

const Layout = (props) => {
  return (
    <>
      <div>
        <Navbar pills color='light' light expand='md'>
          <NavbarBrand href='/'>John C.</NavbarBrand>
          <Nav className='mr-auto' navbar></Nav>
        </Navbar>
      </div>
      {props.children}
    </>
  );
};

export default Layout;
