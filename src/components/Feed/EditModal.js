import React, { useState } from 'react'
import { Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import axios from 'axios'
import api from '../api/api'

export default function EditModal(props) {
    const tweet = props.dataEdit.tweet
    const id = props.dataEdit.id
    const iduser = props.dataEdit.iduser
    const setupdateData = props.setupdateData
    // console.log(tweet,id,iduser)

    const isOpen= props.isOpenEdit
    const toggle = props.toggleEdit
    const [data,setData]= useState({
        tweet:tweet,
        id:id,
        iduser:iduser
    })

    const handleSubmit=()=>{
        console.log(data)
        axios.put(api+"/tweet/updateChat",{
            id:data.id,
            iduser:data.iduser,
            tweet:data.tweet
        }).then((result)=>{
            const response =result.data.data.errorCode
            if(response==="0"){
                setupdateData(true)
                toggle()
            }
        }).catch((error)=>{
            console.log(error)
        })

    }
    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
  return (
    <Modal isOpen={isOpen} toggle={toggle} className="modal-dialog-centered">
        <ModalHeader>
            Edit Tweet
        </ModalHeader>
        <ModalBody style={{textAlign:"left"}}>
            {/* <Label>
                Current Tweet
            </Label> */}
            <Input type="text" name="tweet" defaultValue={data.tweet} required placeholder="Edit Tweet" onChange={(e)=>handleChange(e)}/>
        </ModalBody>
        <ModalFooter>
            <div>
                This can’t be undone and it will be removed from your profile, the timeline of any accounts that follow you, and from Twitter search results.
            </div>
            <Button type="btn" className={"btn btn-danger"} onClick={()=>toggle()}>Cancel</Button>
            <Button type="btn" className={"btn btn-primary"} onClick={()=>handleSubmit()}>Yes</Button>
        </ModalFooter>
    </Modal>
  )
}
