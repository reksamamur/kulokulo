import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Row, Col, ListGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Appbar from "../components/Appbar";
import { Link } from "react-router-dom";

import { db } from "../firebase";

function Menus() {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    db.collection("menus").onSnapshot(snapshot => {
      const newMenus = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setMenus(newMenus);
    });
  }, []);

  return menus;
}

const ListMenuActivity = () => {
  const menus = Menus();

  const color = "black";
  const logo= "logo";

  return (
    <Container fluid>
      <Appbar colorN={color} logo={logo} />
      <div className="p-3 mt-6">
        <h1 className="subheading">Menu</h1>
        <ListGroup variant="flush" className="mt-4">
          {menus.map(menu => (
            <ListGroup.Item key={menu.id}>
              <h3 className="subheading1 mb-3 mt-4">{menu.nama_kategori}</h3>
              <Row>
                {menu.list.map(item => (
                  <Col className="col-md-3" key={item.lid}>
                    <Link
                      className="allcaps card_custom_btn"
                      eventKey="link-1"
                      to={`/listmenu/${item.lid}`}
                    >
                      <div>
                        <img
                          className="card-img-top"
                          src={item.image}
                        />
                        <div className="card-body">
                          <h5 className="sfmono card-title allcaps">
                            {item.nama_menu}
                          </h5>
                          <p className="card-text span_price_nm">
                            <b>Rp.</b> {item.price}K
                          </p>
                        </div>
                      </div>
                    </Link>
                  </Col>
                ))}
              </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </Container>
  );
};
export default ListMenuActivity;
