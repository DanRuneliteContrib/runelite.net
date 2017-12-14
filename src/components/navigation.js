import React from 'react'
import { NavLink as ActiveLink } from 'redux-first-router-link'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faCogs, faNewspaper, faFileAlt } from '@fortawesome/fontawesome-free-solid'
import { faGithub, faDiscord } from '@fortawesome/fontawesome-free-brands'
import hero from '../_data/hero'

class Navigation extends React.Component {
  constructor (props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = { isOpen: false }
  }

  toggle () {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render () {
    return (
      <Navbar color='faded' light expand='md'>
        <NavbarBrand tag={ActiveLink} to='/'><img src={hero.logo} alt='Logo' width='30' height='30' /> Home</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink tag={ActiveLink} to='/features'><FontAwesomeIcon icon={faCogs} /> Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ActiveLink} to='/blog'><FontAwesomeIcon icon={faNewspaper} /> Blog</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/runelite/runelite/wiki'><FontAwesomeIcon icon={faFileAlt} /> Wiki</NavLink>
            </NavItem>
          </Nav>
          <Nav navbar className='ml-auto'>
            <NavItem>
              <NavLink href='https://discord.gg/mePCs8U'><FontAwesomeIcon icon={faDiscord} /> Discord</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href='https://github.com/runelite'><FontAwesomeIcon icon={faGithub} /> GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    )
  }
}

export default Navigation