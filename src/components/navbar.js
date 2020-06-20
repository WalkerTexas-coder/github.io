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
  NavbarText
} from 'reactstrap';
import Github from '../images/githubicon.png'
import LinkedIn from '../images/linkedinicon.png'
import Email from '../images/emailicon.png'
import Porsche from '../images/porscheicon.png'

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="white" light expand="md" id="navbar">
        <NavbarBrand href="/">Home</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="mailto: austinsrwalker@gmail.com" target="_blank"  >
              <img className= "navbaricons" src={Email}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/WalkerTexas-coder" target="_blank">
              <img className= "navbaricons" src={Github}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.linkedin.com/in/austin-walker-71ba364a/" target="_blank">
              <img className= "navbaricons" src={LinkedIn}/>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://pcasdr.org/" target="_blank">
              <img className= "navbaricons" src={Porsche}/>
              </NavLink>
            </NavItem>

          </Nav>
          <NavbarText>Maybe I should get rotating funny quotes here</NavbarText>
        </Collapse>
      </Navbar>
    </>
  );
}

export default Example;
