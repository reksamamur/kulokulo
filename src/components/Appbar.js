import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav } from "react-bootstrap";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { NavLink } from "react-router-dom";
import Badge from "react-bootstrap/Badge";

import { indexdb } from "../data/cart";

function Bar() {
  const [tmenu, setTmenu] = useState([]);

  useEffect(() => {
    tget();
  }, []);

  async function tget() {
    return indexdb
      .table("cart")
      .each(cart => setTmenu(prevTmenu => [...prevTmenu, cart]));
  }

  return tmenu;
}

const Appbar = ({ colorN, logo }) => {
  const cart = Bar();

  const checkBadge = () => {
    if (cart.length === 0) {
      return <Badge variant="danger"></Badge>;
    } else {
      return <Badge variant="danger">{cart.length}</Badge>;
    }
  };

  return (
    <Navbar variant="light" fixed="top" className="bg-transparent">
      <Navbar.Brand href="/">
        <img
          src={require("../assets/img/" + logo + ".png")}
          width="80"
          height="80"
          className="d-inline-block align-top"
          alt="Kulo logo"
        />
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <NavLink
        className="p-3"
        variant="button"
        style={{ color: colorN }}
        to="/cart"
      >
        <ShoppingCartIcon />
        {checkBadge()}
      </NavLink>
      <NavLink
        className="p-3"
        variant="button"
        style={{ color: colorN }}
        to="/listmenu"
      >
        <MenuIcon />
      </NavLink>
    </Navbar>
  );
};

export default Appbar;
