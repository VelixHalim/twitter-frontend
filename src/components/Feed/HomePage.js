import React, { useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import SidebarPage from "./SidebarPage"
import "./homepage.css"
import FeedPage from './FeedPage'

export default function HomePage() {

  return (
    <>
      <div>
        <Container>
          <Row className='g-0 pt-3'>
            <Col md={2}>
              <SidebarPage/>
            </Col>
            <Col md={6} className={"feed"}>
              <FeedPage/>
            </Col>
            <Col md={4}>
              <Button className="btn-secondary" style={{borderRadius:"3em"}}>
              <h3>On Progress</h3>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
    
  )
}
