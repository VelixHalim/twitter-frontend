import React from 'react'
import { Modal } from 'reactstrap'

export default function SignUpModal5() {
  return (
    <>
        <Modal>
            <div>
                <span className='arrow-up' onClick={()=>backstep()}>{`<-`}</span>
                <span className='step2'>
                    Step 4 of 4
                </span>
            </div><div style={{marginLeft:"2em", marginTop:"0em" ,fontSize:"30px", fontWeight:"700"}}>
                    Describe yourself
                </div>
                <div style={{marginLeft:"2em", marginTop:"0em" ,fontSize:"30px", fontWeight:"700"}}>
                What makes you special? Don't think too hard, just have fun with it.
                </div>
                <FormGroup>
                    <Input placeholder="Your bio"/>
                </FormGroup>
        </Modal>
    </>
  )
}
