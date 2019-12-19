import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Row, Col, Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Appbar from "../components/Appbar";

import { db } from "../firebase";
import Dexie from "dexie";

import Toast from "../components/Toast";

function DetailActivity({ match }) {
  const indexdb = new Dexie("coffee_cart");
  useEffect(() => {
    getParam();
  }, []);

  const color = "black";
  const logo = "logo";

  const [price, setPrice] = useState(0);
  const [bgColor, setbgColor] = useState("");
  const [image, setImage] = useState("");
  const [header, setHeader] = useState("");
  const [desc, setDesc] = useState("");
  const [sid, setSid] = useState("");
  const [namem, setNamem] = useState("");

  const [show, setShow] = useState(false);

  const unit = 1;
  const id = match.params.id;

  const handleAddData = () => {
    const indexdb = new Dexie("coffee_cart");
    indexdb.version(1).stores({
      cart: "++id, ide, nama_menu, image, price, unit"
    });

    indexdb.table("cart").add({
      ide: sid,
      nama_menu: namem,
      image: image,
      price: price,
      unit: unit
    });
    window.location.reload();
  };

  const getParam = e => {
    console.log(id);

    db.collection("menus").onSnapshot(snapshot => {
      const newMenus = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      newMenus.map(menu => {
        menu.list.map(item => {
          if (id === item.lid) {
            setPrice(item.price);
            setbgColor(item.color);
            setImage(item.image);
            setHeader(item.title);
            setDesc(item.desc);
            setSid(item.lid);
            setNamem(item.nama_menu);
          }
        });
      });
    });
  };

  return (
    <Container fluid>
      <Appbar colorN={color} logo={logo} />
      
      <div>
        <Row>
          <Col
            xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}
            className="p-5 d-flex align-items-center"
            style={{ backgroundColor: bgColor }}
          >
            <div className="displayin">
              <h1 className="header">{header}</h1>
              <br />
              <p className="parag">{desc}</p>
              <br />
              <Button
                className="btn btn-outline"
                variant="outline-primary"
                onClick={handleAddData}
              >
                Pesan sekarang
              </Button>
              <span className="span_price">
                <b>Rp.</b> {price}K
              </span>
            </div>
          </Col>
          <Col
            xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}
            className="d-flex align-items-center mv100-p justify-content-center"
            style={{ backgroundColor: bgColor }}
          >
            <Image className="sizeimg" src={image} rounded />
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default DetailActivity;
