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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div>
        <Navbar color='light' light expand='md'>
          <NavbarBrand href='/'>John C.</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/about/'>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/projects/'>Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/contact/'>Contact Me</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      {props.children}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          height: '60px',
          lineHeight: '60px',
          backgroundColor: '#f5f5f5',
          textAlign: 'center',
        }}
        className='text-muted'
      >
        This site was developed by John P. Correia. Source code can be found on{' '}
        <a href='https://github.com/JohnJohnx4/portfolio'>Github</a>
      </div>
    </>
  );
};

export default Layout;
