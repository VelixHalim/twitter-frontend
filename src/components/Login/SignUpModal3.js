import React from 'react'
import { Button, Form, FormGroup, Input, Modal, ModalBody, ModalFooter } from 'reactstrap'
import "./modalSignUp.css"
import SignUpModal4 from './SignUpModal4'
import axios from "axios"
import api from '../api/api'
import {useNavigate} from 'react-router-dom'

export default function SignUpModal3(props) {
    const navigate = useNavigate()

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
        toggleModal2()
        toggleModal3()
    }

    const register=()=>{
        console.log(data)
        axios.post(api+"/user/postUser",{
            nama:data.nama,
            nomor:data.nomor,
            email:data.email,
            birthdate:data.year+"-"+data.month+"-"+data.day,
            username:data.username,
            password:data.password
        }).then((result)=>{
            const response = result.data.data.errorCode
            if(response==="0"){
                // navigate("/home",{state:{role:"user"}})
                toggleSignIn()
                toggleModal3()
                
            }
        }).catch((error)=>{
            console.log(error)
        })
    }

    return (
        <>
            <Modal  isOpen={isOpenModal3} toggle={toggleModal3} fade={false} scrollable={true}>
                <div>
                    <span className='arrow-up' onClick={()=>backstep()}>{`<-`}</span>
                    <span className='step2'>
                        Step 3 of 3
                    </span>
                </div>
                <div style={{marginLeft:"2em", marginTop:"0em" ,fontSize:"30px", fontWeight:"700"}}>
                    Create your account
                </div>
                <ModalBody>
                    <div style={{maxWidth:"400px", marginLeft:"2.5em"}}>
                        <Form>
                            <FormGroup>
                                <Input type='text' name="name" id='name' placeholder='name' defaultValue={data.nama}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type='email' name="email" id='email' placeholder='email' defaultValue={data.email}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type="text" name="birthdate" id='birthdate' placeholder='birthdate' defaultValue={data.year+"-"+data.month+"-"+data.day}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type='text' name="username" id='username' placeholder='username' defaultValue={data.username}/>
                            </FormGroup>
                            <FormGroup>
                                <Input type='text' name="nomor" id='nomor' placeholder='nomor' defaultValue={data.nomor}/>
                            </FormGroup>
                        </Form>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <div style={{color:"gray", fontSize:"12px", marginLeft:"3.5em"}}>
                        By signing up, you agree to the <a href="#" style={{color:"rgb(29,155,240)"}}>Terms of Service</a> 
                        and Privacy Policy, including <a href="#" style={{color:"rgb(29,155,240)"}}>Cookie Use</a>. Twitter 
                        may use your contact information, including your 
                        email address and phone number for purposes 
                        outlined in our Privacy Policy, like keeping your 
                        account secure and personalizing our services, 
                        including ads. <a href="#" style={{color:"rgb(29,155,240)"}}>Learn more</a>. Others will be able to 
                        find you by email or phone number, when provided, 
                        unless you choose otherwise <a href="#" style={{color:"rgb(29,155,240)"}}>here</a>.
                    </div>
                </ModalFooter>
                <div>
                    <Button type='button' className='btn btn-primary btn-2-sign-3' onClick={()=>register()}>
                        Register
                    </Button>
                </div>
            </Modal>
            <SignUpModal4 
                isOpenModal3={isOpenModal3} toggleModal3 ={toggleModal3} 
                isOpenModal4={isOpenModal4} toggleModal4 ={toggleModal4} 
                isOpenModal5={isOpenModal5} toggleModal5 ={toggleModal5} 
            />
        </>
    )
}
