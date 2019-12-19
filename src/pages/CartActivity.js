import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";
import Appbar from "../components/Appbar";

import { indexdb } from "../data/cart";

function Cart() {
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

const CartActivity = () => {
  const cart = Cart();

  const handleOrder = () => {
    indexdb.table("cart").clear();
    window.location.replace('/');
  }

  const viewDataOn = () => {
    return (
      <div className="mb-10">
        <h1 className="subheading mt-6">List order</h1>
        {cart.map((item, index) => (
          <div className="card m-2">
            <div className="row no-gutters">
              <div className="col-md-2">
                <img src={item.image} className="card-img" />
              </div>
              <div className="col">
                <div className="m-2">
                  <h5 className="card-title">{item.nama_menu}</h5>
                  <span className="card-text">
                    <b>Rp.</b> {item.price}K
                  </span>
                  <br />
                  <div className="text-right">
                    <Button
                      variant="outline-danger"
                      className="p-1"
                      onClick={() => {
                        // alert(index+1)
                        indexdb.cart.delete(item.id);
                        window.location.reload();
                      }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  var total = 0;
  for (var i in cart) {
    total += cart[i].price;
  }

  const nowOrder = () => {
    return (
      <Container>
        <div className="displayin">
          <h4 className="parag mt-4">Total Rp. {total}K</h4>
          <button type="button" class="btn mb-2 btn-primary-cus btn-sm btn-block" onClick={handleOrder}>
            Order
          </button>
        </div>
      </Container>
    );
  };

  const view = () => {
    if (total === 0) {
      return (
        <Container fluid>
          <div className="d-flex align-items-center justify-content-center min-vh-100">
            <div className="displayin align-items-center">
              <h1 className="subheading mt-6">Kosong nih, jajan yuk</h1>
              <br />
              <Button
                className="btn btn-outline"
                variant="outline-primary"
                href="/listmenu"
              >
                Lihat menu nya dulu
              </Button>
            </div>
          </div>
        </Container>
      );
    } else {
      return (
        <div>
          <Container>
            <div className="displayin p-3">{viewDataOn()}</div>
            <div class="fixed-bottom navbar-light bg-light">{nowOrder()}</div>
          </Container>
        </div>
      );
    }
  };

  return (
    <Container fluid>
      <Appbar colorN="black" logo="logo" />
      {view()}
    </Container>
  );
};

export default CartActivity;
