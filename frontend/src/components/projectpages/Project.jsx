import React from 'react'
import './project.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Project() {
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
        <div className='text-center'>
          <h1 className='' style={{ fontFamily: '"Playfair Display", serif' }} data-aos="fade-right">My Projects</h1>
        </div>
        <div>
          <Row xs={1} md={3} className="g-4">
            <Col>
              <Card className='scard' data-aos="fade-right">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="1.png" className='cimg' />
                </a>
                <Card.Body>
                  <Card.Title className='ctitle'>Login Page</Card.Title>
                  <Card.Text>
                    This is a game login page ui that, I build using HTML and CSS.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scard' data-aos="fade-down">
                <Card.Img variant="top" src="2.png" className='cimg' />
                <Card.Body>
                  <Card.Title className='ctitle'>Food Website </Card.Title>
                  <Card.Text>
                    Hotel or cloud kitchen Website ,I created using HTML,CSS and JavaScript.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scard' data-aos="fade-left">
                <Card.Img variant="top" src="3.png" className='cimg' />
                <Card.Body>
                  <Card.Title className='ctitle'>Portfolio page</Card.Title>
                  <Card.Text>
                    I build my Portfolio using HTML and CSS.This is my introduction web page.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scard' data-aos="fade-up-right">
                <a href="https://tictactoeplayer02.netlify.app/" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="5.png" className='cimg' />
                </a>
                <Card.Body>
                  <Card.Title className='ctitle'>Tic Tac Toe</Card.Title>
                  <Card.Text>
                    I build Tic Tac Toe Game using HTML,CSS and JavaScript.Using Html and Css for Frontend and JavaScript for backend.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scard' data-aos="fade-up">
                <a href="https://asbendra-todo-app.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="4.png" className='cimg' />
                </a>
                <Card.Body>
                  <Card.Title className='ctitle'>ToDos App</Card.Title>
                  <Card.Text>
                    I bulid todo App using React,Bootstrap,Express,MongoDB for database and Node.js for Fetch data.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className='scard' data-aos="fade-up-left">
                <a href="https://todo-rtk-app.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <Card.Img variant="top" src="6.png" className='cimg' />
                </a>
                <Card.Body>
                  <Card.Title className='ctitle'>Todo App</Card.Title>
                  <Card.Text>
                    I bulid todo App using React, Redux-Tool-kit for handling hooks,Bootstrap,Express,MongoDB for database and Node.js for Fetch data.
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

export default Project