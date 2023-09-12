import React, { Component } from "react";

import { Link, NavLink } from "react-router-dom";
import {
  Navbarsection,
  Container,
  LogoNav,
  Logotext,
  Ullist,
  Listitem,
  Anchor,
  LinkItem
} from "./Style.js";
class Navbar extends Component {
  render() {
    return (
      <Navbarsection>
        <Container>
          <LogoNav>
            <Logotext> Ultra Profile </Logotext>
          </LogoNav>
          <Ullist>
            <Listitem>
              <LinkItem to="/"> Home </LinkItem>
            </Listitem>
            <Listitem>
              <Anchor href="#"> Work </Anchor>
            </Listitem>
            <Listitem>
              <Anchor href="#"> Portfolio </Anchor>
            </Listitem>
            <Listitem>
              <Anchor href="#"> Resume </Anchor>
            </Listitem>
            <Listitem>
              <Anchor href="#"> About </Anchor>
            </Listitem>
            <Listitem>
              <LinkItem to="/contact"> Contact </LinkItem>
            </Listitem>
          </Ullist>
        </Container>
      </Navbarsection>
    );
  }
}
export default Navbar;
