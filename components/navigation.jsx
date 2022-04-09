import React, { Component } from 'react'
import configData from '../data/config.json'
import CovidNotice from './covidNotice/Notice'
import styled from 'styled-components'

const LogoSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const LogoText = styled.div`
  flex: 1;
`
export class Navigation extends Component {
  state = {
    navbarMobileCollapsed: true,
  }

  toggleMenu = (e, forceClosed) => {
    this.setState({
      navbarMobileCollapsed: forceClosed || !this.state.navbarMobileCollapsed,
    })
    console.log(this.state)
  }

  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        {/* <CovidNotice /> */}
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              onClick={this.toggleMenu}
              className={`navbar-toggle ${
                this.state.navbarMobileCollapsed ? 'collapsed' : ''
              }`}
            >
              {' '}
              <span className="sr-only">Toggle navigation</span>{' '}
              <span className="icon-bar"></span>{' '}
              <span className="icon-bar"></span>{' '}
              <span className="icon-bar"></span>{' '}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              {configData.sitename}
            </a>
          </div>

          <div
            className={`${
              this.state.navbarMobileCollapsed ? 'collapse' : ''
            } navbar-collapse`}
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#about"
                  className="page-scroll"
                  onClick={(e) => this.toggleMenu(e, true)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="page-scroll"
                  onClick={(e) => this.toggleMenu(e, true)}
                >
                  Services
                </a>
              </li>
              {/* <li>
                <a href="#gallery-with-links" className="page-scroll" onClick={(e) => this.toggleMenu(e, true)}>
                  Gallery
                </a>
              </li> */}
              <li>
                <a
                  href="#testimonials"
                  className="page-scroll"
                  onClick={(e) => this.toggleMenu(e, true)}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="page-scroll"
                  onClick={(e) => this.toggleMenu(e, true)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navigation
