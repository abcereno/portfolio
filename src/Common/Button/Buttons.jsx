import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const Buttons = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');

  const handleShow = () => setShow(true);

  const handleClose = () => {
    // Check if the email is provided
    if (email) {
      // Save the email or perform any additional processing
      console.log('Email entered:', email);

      // Redirect the user to the desired link with the referral code
      const referralLink = `https://cozmojo.com/products/massage-oil?sca_ref=${encodeURIComponent(email)}`;
      window.location.href = referralLink;

      // Close the modal
      setShow(false);
    } else {
      // Optionally show an error message or handle the case where no email is provided
      console.log('Email is required!');
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Claim Now!!
      </Button>

      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Email for 50% COUPON</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
              required
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShow(false)}>
            I dont want Coupon
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Get Coupon
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Buttons;
