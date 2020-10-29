import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import titleArr from '../../pages.json'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import BarBtn from "../BarBtn";

/* This defines the actual bar going down the screen */
const StyledSideNav = styled.div`
  position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
  height: 100%;
  width: 15vw;
  z-index: 1;      /* Stay on top of everything */
  top: 3.4em;      /* Stay at the top */
  background-color: #f0e2c7;
  overflow-x: hidden;     /* Disable horizontal scroll */
  padding-top: 10px;
`;

const SideNav = () => {
    return ( <>
    <StyledSideNav>
    {titleArr.length
                ? titleArr.map(({ title, linkName }, id) => (
                    <Link class="deco-none" to={`/${linkName}`}>
                      <BarBtn title={title} key={id} />
                    </Link>
                  ))
                : "Page under construction folks!"}
    </StyledSideNav>
    </> );
}
const RouterSideNav = withRouter(SideNav); 
export default RouterSideNav;