import React from 'react'
import { Modal , Input, FormGroup} from 'reactstrap'
import "./modalSignUp.css"

export default function SignUpModal4(props) {

    const isOpenModal3 = props.isOpenModal3
    const toggleModal3= props.toggleModal3
    
    const isOpenModal4 = props.isOpenModal4
    const toggleModal4= props.toggleModal4
    
    const isOpenModal5 = props.isOpenModal5
    const toggleModal5= props.toggleModal5
    const backstep=()=>{
        toggleModal3()
        toggleModal4()
    }
    const step5=()=>{
        toggleModal4()
        toggleModal5()
    }

    return (
        <>
            <Modal isOpen={isOpenModal4} toggle={toggleModal4} fade={false} scrollable={true}>
                <div>
                    <span className='arrow-up' onClick={()=>backstep()}>{`<-`}</span>
                    <span className='step2'>
                        Step 4 of 4
                    </span>
                </div>
                <div style={{marginLeft:"2em", marginTop:"0em" ,fontSize:"30px", fontWeight:"700"}}>
                What should we call you?
                </div>
                <div style={{marginLeft:"2em", marginTop:"0em" ,fontSize:"30px", fontWeight:"700"}}>
                Your @username is unique. You can always change it later.
                </div>
                <FormGroup>
                    <Input placeholder="Your bio"/>
                </FormGroup>
            </Modal>
        </>
    )
}
