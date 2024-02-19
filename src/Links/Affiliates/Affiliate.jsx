import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import affiliate from "../../Assets/affiliate";
import "./Affiliate.css";
const Affiliate = () => {
  return (
    <>
      <h1 className='d-flex justify-content-center align-items-center pt-5 pb-5 text-light bg-dark full-bleed'>Affiliated Companies</h1>
      <Row xs={1} md={2} style={{ minHeight: "calc(100vh - 96px)" }} className="text-light bg-dark full-bleed g-4 pt-5 pb-5">
        {affiliate.map((item) => (
          <Col key={item.id}>
            <Card>
              <Card.Img variant="top" src={item.pic} alt={item.title} />
              <Card.Body>
                <Card.Title><a href={item.link}>{item.title}</a></Card.Title>
                <Card.Text>
                  {item.description1}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Affiliate