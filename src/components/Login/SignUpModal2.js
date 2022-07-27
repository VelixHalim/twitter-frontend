import React from 'react'
import { Button, Col, Input, Modal, ModalBody, Row } from 'reactstrap'
import './modalSignUp.css'
import SignUpModal3 from './SignUpModal3'

export default function SignUpModal2(props) {
    const toggle = props.toggle

    const isOpenModal2 = props.isOpenModal2
    const toggleModal2= props.toggleModal2
    
    const isOpenModal3 = props.isOpenModal3
    const toggleModal3= props.toggleModal3
    
    const isOpenModal4 = props.isOpenModal4
    const toggleModal4= props.toggleModal4
    
    const isOpenModal5 = props.isOpenModal5
    const toggleModal5= props.toggleModal5

    const isOpenSignIn = props.isOpenSignIn
    const toggleSignIn = props.toggleSignIn
    const data = props.data
    const backstep=()=>{
        toggle()
        toggleModal2()
    }
    const step3=()=>{
        toggleModal2()
        toggleModal3()
    }
    return (
        <>
        <Modal isOpen={isOpenModal2} toggle={toggleModal2} fade={false} scrollable={true}>
            <div>
                <span className='arrow-up' onClick={()=>backstep()}>{`<-`}</span>
                <span className='step2'>
                    Step 2 of 3
                </span>
            </div>
            <div style={{marginLeft:"2em", marginTop:"0em" ,fontSize:"30px", fontWeight:"700"}}>
                Customize your experience
            </div>
            <div style={{marginLeft:"3em", marginTop:"2em" ,fontSize:"20px", fontWeight:"700"}}>
                Track where you see Twitter content across the web
            </div>
            <div>
                <Row>
                    <Col md={10}>
                        <p style={{marginLeft:"4.1em", fontSize:"14px", marginTop:"1em", textAlign:"justify"}}>
                        Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.
                        </p>
                    </Col>
                    <Col md={2}>
                        <div style={{marginTop:"0.5em"}}>
                            <Input type='checkbox' checked={true}/>
                        </div>
                    </Col>
                </Row>
            </div>
            <ModalBody>
                <div style={{textAlign:"left", marginLeft:"2.7em", color:"gray", fontSize:"14px", marginRight:"3em"}}>
                    By signing up, you agree to our <a href="#" style={{color:"rgb(29,155,240)"}}>Terms, 
                    Privacy Policy</a>, and <a href="" style={{color:"rgb(29,155,240)"}}>Cookie Use</a>. Twitter may use your 
                    contact information, including your email address and
                    phone number for purposes outlined in our Privacy 
                    Policy. <a href="#" style={{color:"rgb(29,155,240)"}}>Learn more</a>
                </div>
                <Button type='button' className='btn btn-light btn-2-sign-2' onClick={()=>step3()}>
                    Next
                </Button>
            </ModalBody>
        </Modal>
        <SignUpModal3 
            isOpenSignIn={isOpenSignIn} toggleSignIn={toggleSignIn}
            isOpenModal2={isOpenModal2} toggleModal2 ={toggleModal2} 
            isOpenModal3={isOpenModal3} toggleModal3 ={toggleModal3} 
            isOpenModal4={isOpenModal4} toggleModal4 ={toggleModal4} 
            isOpenModal5={isOpenModal5} toggleModal5 ={toggleModal5} 
            data={data}
        />
        </>
    )
}
