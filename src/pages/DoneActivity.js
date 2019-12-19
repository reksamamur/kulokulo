import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
// import Appbar from "../components/Appbar";

import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import { db } from "../firebase";
import Dexie from "dexie";

function DoneActivity() {
  return (
    <Container fluid>
      <div className="d-flex align-items-center justify-content-center min-vh-100">
        <div className="displayin justify-content-center align-items-center">
          <h1 className="subheading mt-6">
            <CheckCircleOutlineIcon /> Selesai
          </h1>{" "}
          <br />
          <Button
            className="btn btn-outline"
            variant="outline-primary"
            href="/"
          >
            Kembali
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default DoneActivity;
