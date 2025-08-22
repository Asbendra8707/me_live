import React from 'react'
import './services.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Services = () => {
  return (
    <>
      <div style={{
        display: 'flex',
        backgroundColor: '#14471a',
        borderRadius: '16px',
        padding: '52px',
        gap: '52px',
        color: '#fff',
        // height:'900px',
        // marginTop:'90px',
        alignItems: 'center',
        flexWrap: 'wrap'
      }} className='container my-5'>
        <div className=''>
          <h1 className='' style={{ fontFamily: '"Playfair Display", serif' }} data-aos="fade-right">My Services</h1>
        </div>
        <div>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className='scard' data-aos="fade-up">
                <Card.Img variant="top" src="servicesbackend.jpg" className='cimg' />
                <Card.Body>
                  <Card.Title className='ctitle'>Backend Development</Card.Title>
                  <Card.Text>
                  I work on the backend to handle server-side logic, manage databases, create APIs, and ensure secure, smooth application functionality.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scard' data-aos="fade-down-left">
                <Card.Img variant="top" src="servicesFrontend.jpg" className='cimg' />
                <Card.Body>
                  <Card.Title className='ctitle'>Frontend Development</Card.Title>
                  <Card.Text>
                  Frontend is the user-facing part of a website, built with HTML, CSS, and JavaScript, ensuring design, interactivity, and responsiveness.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scard' data-aos="fade-down">
                <Card.Img variant="top" src="servicesgithub.jpg" className='cimg' />
                <Card.Body>
                  <Card.Title className='ctitle'>Git & GitHub Handler</Card.Title>
                  <Card.Text>
                  I use Git as a version control system to track and manage my code changes,collaborating with others, and maintaining my projects effectively.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default Services