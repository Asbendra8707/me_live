import React from 'react'
import './skillcard.css'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import { FaCode } from "react-icons/fa";
import { SiBackendless } from "react-icons/si";
import { GrDatabase } from "react-icons/gr";
import { CiSliderVertical } from "react-icons/ci";
import { DiResponsive } from "react-icons/di"
import { BsUiRadiosGrid } from "react-icons/bs"

import Container from 'react-bootstrap/Container';

import ProgressBar from 'react-bootstrap/ProgressBar';


function Cardsskill() {
  return (
    <>
      <div className='container rounded-4 p-3 my-5' style={{ backgroundColor: '#14471a' }}>
        <h1 className='text-center text-white ' data-aos="fade-right">I Specialize In a</h1>
        <h1 className='text-center' data-aos="fade-left">Range Of 💪Skills</h1>

        <Row xs={1} md={3} className="g-4 my-3">
          <Col>
            <Card className='skill-card' data-aos="fade-down-right">
              <Card.Header className='header'><FaCode className='database' /></Card.Header>
              <Card.Body>
                <Card.Title className='card-title'>Front-end Development</Card.Title>
                <Card.Text className='card-text'>
                  I am expert in HTML5,CSS3,JavaScript(Es6+),Reactjs,Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='skill-card' data-aos="fade-down">
              <Card.Header className='header'><SiBackendless className='database' /></Card.Header>
              <Card.Body>
                <Card.Title>Back-end Development</Card.Title>
                <Card.Text>
                  I am expert in Node.js,Express,JavaScript.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='skill-card' data-aos="fade-down-left">
              <Card.Header className='header'><GrDatabase className='database' /></Card.Header>
              <Card.Body>
                <Card.Title>Database Management</Card.Title>
                <Card.Text>
                  I am expert in MongoDB.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='skill-card' data-aos="fade-up-right">
              <Card.Header className='header'><CiSliderVertical className='database' /></Card.Header>
              <Card.Body>
                <Card.Title>Version Control</Card.Title>
                <Card.Text>
                  I am expert in Git & GitHub.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='skill-card' data-aos="fade-up">
              <Card.Header className='header'><DiResponsive className='database' /></Card.Header>
              <Card.Body>
                <Card.Title>Responsive Design</Card.Title>
                <Card.Text>
                  Creating visually appealing and functional website across devices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className='skill-card' data-aos="fade-up-left">
              <Card.Header className='header'><BsUiRadiosGrid className='database' /></Card.Header>
              <Card.Body>
                <Card.Title>UI/UX Design</Card.Title>
                <Card.Text>
                  Wireframing,prototyping,userflow analysis.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <div>
        <Container className='my-5'>
          <h1 className='text-center' data-aos="fade-right">MY SKILLS</h1>
          <Row>
            <Col>
              <h5 className='stexth5 text-white' data-aos="fade-right"> HTML <h6 className='d-flex'> 95%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={95} label={`${95}%`} /></h6>
              </h5>
              <h5 className='stexth5 text-white' data-aos="fade-right">CSS <h6 className='d-flex'> 90%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={90} label={`${90}%`} /></h6>
              </h5>
              <h5 className='stexth5 text-white' data-aos="fade-right"> JAVASCRIPT <h6 className='d-flex'> 60%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={60} label={`${60}%`} /></h6>
              </h5>
              <h5 className='stexth5 text-white' data-aos="fade-right"> REACT JS <h6 className='d-flex'> 85%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={85} label={`${85}%`} /></h6>
              </h5>
              <h5 className='stexth5 text-white' data-aos="fade-right"> MONGODB <h6 className='d-flex'> 60%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={60} label={`${60}%`} /></h6>
              </h5>
            </Col>
            <Col xs={6} md={6} className=''>
              <h5 className='stexth5 text-white' data-aos="fade-left"> EXPRESS <h6 className='d-flex'> 60%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={60} label={`${60}%`} /></h6>
              </h5>           
              <h5 className='stexth5 text-white' data-aos="fade-left"> NODE JS <h6 className='d-flex'> 75%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={75} label={`${75}%`} /></h6>
              </h5>           
              <h5 className='stexth5 text-white' data-aos="fade-left"> REDUX <h6 className='d-flex'> 55%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={55} label={`${55}%`} /></h6>
              </h5>           
              <h5 className='stexth5 text-white' data-aos="fade-left">GIT & GITHUB <h6 className='d-flex'> 85%
                <ProgressBar className='mx-2 w-75' variant='success' animated now={85} label={`${85}%`} /></h6>
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Cardsskill