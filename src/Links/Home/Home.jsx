import React, { useState } from 'react'
import { Row, Col, Modal, Button } from 'react-bootstrap';
import "./Home.css"
import Projects from '../../Common/Projects/Projects'
import Karosel from '../../Common/Karosel/Karosel'
import me from "../../Images/me.png";
import resume from "../../Images/Anthony Bernard Cereno.png";
import file from "./Anthony.pdf";
const Home = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row style={{ minHeight: "calc(100vh - 96px)" }} className="text-light bg-dark full-bleed">
        <Col xs={12} md={6} className='d-flex flex-column'>
          <div style={{ "--delay": "0.2s" }} className='hero slide-in-bck-bottom'>
            <img
              className='hero-img'
              width={171}
              height={180}
              alt="Web Developer"
              src={me}
            />
          </div>
          <h1 className='flicker-2 tracking-in-expand'>Anthony Bernard Cereno</h1>
          <h6 style={{ "--delay": "0.4s" }} className='tracking-in-expand slide-in-bck-bottom'>Fullstack Web Developer</h6>
          <div class="d-flex justify-content-evenly w-100">
            <button style={{ "--delay": "0.6s" }} type="button" class="btn btn-primary d-inline-block slide-in-bck-bottom">
              <a className='text-light text-unstyled' href={file} download>Download CV</a>
            </button>
            <Button style={{"--delay": "0.8s"}}className='slide-in-bck-bottom' variant="primary" onClick={handleShow}>
              View Only CV
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className='d-flex justify-content-center align-items-center'>
          <Karosel />
        </Col>
        <Row>
          <Projects />
        </Row>
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Anthony Bernard Cereno CV</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className='img-fluid' src={resume} alt="Anthony Bernard Cereno" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Home