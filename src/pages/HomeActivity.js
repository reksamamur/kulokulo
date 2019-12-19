import React from "react";

//Boostrap stuff
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Image, Nav, Container } from "react-bootstrap";

//custom cimponent
import Appbar from "../components/Appbar";

//image
import foto2 from "../assets/img/foto2.png";
import foto3 from "../assets/img/foto3.png";
import foto4 from "../assets/img/foto4.png";

//css
import "../App.css";

//router
import { Link } from "react-router-dom";

import { db } from "../firebase";

class HomeActivity extends React.Component {
  state = {
    color: "white",
    logo: "logo",
    menus: []
  };

  listenScrollEvent = e => {
    if (window.scrollY > 920) {
      this.setState({ color: "black" });
      this.setState({ logo: "logo" });
    }

    if (window.scrollY < 920) {
      this.setState({ color: "black" });
      this.setState({ logo: "logoWhite" });
    }

    if (window.scrollY > 3800) {
      this.setState({ color: "white" });
      this.setState({ logo: "logoWhite" });
    }

    if (window.scrollY < 512) {
      this.setState({ color: "white" });
      this.setState({ logo: "logo" });
    }

    if (window.scrollY > 512) {
      this.setState({ color: "black" });
      this.setState({ logo: "logo" });
    }

    if (window.scrollY > 3700) {
      this.setState({ color: "white" });
      this.setState({ logo: "logoWhite" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
    db.collection("menus").onSnapshot(snapshot => {
      const newMenus = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      this.setState({ menus: newMenus });
    });
  }

  menuFooterList = e => {
    return this.state.menus.map(menu => (
      <Col key={menu.id} xs={6} md={4}>
        <h5>{menu.nama_kategori}</h5>
        <Nav className="flex-column m-3">
          {menu.list.map(kitem => (
            <Link
              key={kitem.lid}
              className="navwhite allcaps"
              eventKey="link-1"
              to={`/listmenu/${kitem.lid}`}
            >
              {kitem.nama_menu}
            </Link>
          ))}
        </Nav>
      </Col>
    ));
  };

  render() {
    return (
      <Container fluid>
        <Appbar colorN={this.state.color} logo={this.state.logo} />
        <div>
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              className="order-2 p-5 d-flex align-items-center creamycolor"
            >
              <div className="displayin">
                <h1 className="header">The best coffee for the best you.</h1>
                <br />
                <Button
                  className="btn btn-outline"
                  variant="outline-primary"
                  href="/listmenu"
                >
                  Lihat menu nya
                </Button>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              className="order-1 d-flex align-items-center creamyimage mv100"
            ></Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col className="d-flex align-items-center justify-content-center mv100-p creamycolor">
              <Image className="sizeimg" src={foto2} rounded />
            </Col>
            <Col className="p-5 d-flex align-items-center creamycolor">
              <div className="displayin">
                <h1 className="header">
                  Sudah coba
                  <br /> Es Kopi Keju ?
                </h1>
                <br />
                <p className="parag">
                  Rasakan nikmatnya kesegaran es kopi susu dipadu gurihnya krim
                  keju khas Kulo. Pasti mau lagi
                </p>
                <br />
                <Button
                  className="btn btn-outline"
                  variant="outline-primary"
                  href={`/listmenu/${"lid-1"}`}
                >
                  Cek detail
                </Button>
              </div>
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              className="p-5 d-flex align-items-center avocadocolor"
            >
              <div className="displayin">
                <h1 className="header">
                  Cicip Uniknya <br />
                  Avocatto
                </h1>
                <br />
                <p className="parag">
                  Perpaduan alpukat legit dengan espresso cucok! Cobain yuk!
                </p>
                <br />
                <Button
                  className="btn btn-outline"
                  variant="outline-primary"
                  href={`/listmenu/${"lid-2"}`}
                >
                  Cek detail
                </Button>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              className="d-flex justify-content-center align-items-center mv100-p avocadocolor"
            >
              <Image className="sizeimg" src={foto3} rounded />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 1 }}
              className="p-5 d-flex align-items-center oreocolor"
            >
              <div className="displayin">
                <h1 className="header">
                  Cobain deh <br />
                  Cookies N Cream
                </h1>
                <br />
                <p className="parag">
                  Saat sore hari seperti ini, fikiran udah pasti kusut kan ya
                  karena aktivitas seharian ini. Perpaduan alpukat legit dengan
                  espresso cucok! Cobain yuk!
                </p>
                <br />
                <Button
                  className="btn btn-outline"
                  variant="outline-primary"
                  href={`/listmenu/${"lid-6"}`}
                >
                  Cek detail
                </Button>
              </div>
            </Col>
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 2 }}
              className="d-flex justify-content-center align-items-center mv100-p oreocolor"
            >
              <Image className="sizeimg" src={foto4} rounded />
            </Col>
          </Row>
        </div>
        <div>
          <Row>
            <Col sm={4} className="p-5 d-flex align-items-center footercolor">
              <div className="colorWhite sfmono">
                <h5>
                  KEDAI KOPI | <b>KULO &trade;</b>{" "}
                </h5>
                <br />
                <Nav className="flex-column">
                  <Nav.Link className="navwhite" eventKey="link-1">
                    - About us
                  </Nav.Link>
                  <Nav.Link className="navwhite" eventKey="link-2">
                    - Contact us
                  </Nav.Link>
                </Nav>
              </div>
            </Col>
            <Col
              sm={8}
              className="p-5 d-flex align-items-center min-vh-100 footercolor colorWhite"
            >
              <div className="displayin">
                <h1 className="subheading">Menu</h1>
                <br />
                <Row>{this.menuFooterList()}</Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }
}

export default HomeActivity;