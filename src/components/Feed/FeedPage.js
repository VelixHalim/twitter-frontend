import React, { useEffect, useState } from 'react'
import {User, MessageCircle, Repeat, Heart,Share, MoreHorizontal, Trash2, Edit2} from 'react-feather'
import { Button, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, UncontrolledButtonDropdown } from 'reactstrap'
import {useLocation} from 'react-router-dom'
import axios from 'axios'
import api from '../api/api'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

export default function FeedPage() {
  const location = useLocation()
  // console.log(location)
  const id = location.state.id
  const [data,setData]=useState({
    tweet:"",
    id:id
  })
  const [updateData,setUpdateData] = useState(false)
  const [datas,setDatas] = useState([])
  const [isOpenEdit,setIsOpenEdit] = useState(false)
  const [dataEdit,setdataEdit] = useState({
     id:"",
     iduser:"",
     tweet:"", 
  })
  const [isOpenDelete,setIsOpenDelete] = useState(false)
  const [dataDelete,setdataDelete] = useState({
    id:""
 })
  const toggleEdit = ()=>{
    setIsOpenEdit(!isOpenEdit)
  }
  const toggleDelete = ()=>{
    setIsOpenDelete(!isOpenDelete)
  }

  const edittweet =(props)=>{
    toggleEdit()
    setdataEdit({...dataEdit,id:props.id,iduser:props.iduser,tweet:props.tweet})
  }

  const deleteTwit =(props)=>{
    console.log(props)
    toggleDelete()
    setdataDelete({...dataDelete,id:props})
  }

  const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  const newTweet=()=>{
    if(data.tweet!==""){
      axios.post(api+"/tweet/createChat",{
        iduser:data.id,
        tweet:data.tweet
      }).then((result)=>{
        const response = result.data.data.errorCode
        if(response==="0"){
          setUpdateData(true)
          setData({...data,tweet:""})
        }
      }).catch((error)=>{
        console.log(error)
      })
    }
  }

  
  const getData = ()=>{
    axios.get(api+"/tweet/getChat").
    then((result)=>{
      const response = result.data.data.errorCode
      if(response==="0"){
        setDatas(result.data.data.data)
      }
    }).catch((error)=>{
      console.log(error)
    })
  }

  useEffect(()=>{
    getData()
    setUpdateData(false)
  },[updateData])

  return (
    <>
      <div style={{color:"white"}} className="d-flex justify-content-between align-item-center py-2">
        <strong >Home</strong>
        <i className='fas'>
          <svg viewBox="0 0 24 24" aria-hidden="true" 
          className="r-4qtqp9 r-yyyyoo r-z80fyv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03" 
          style={{width:"20px"}}><g>
          <path
          fill='white' 
          d="M22.772 10.506l-5.618-2.192-2.16-6.5c-.102-.307-.39-.514-.712-.514s-.61.207-.712.513l-2.16 6.5-5.62 2.192c-.287.112-.477.39-.477.7s.19.585.478.698l5.62 2.192 2.16 6.5c.102.306.39.513.712.513s.61-.207.712-.513l2.16-6.5 5.62-2.192c.287-.112.477-.39.477-.7s-.19-.585-.478-.697zm-6.49 2.32c-.208.08-.37.25-.44.46l-1.56 4.695-1.56-4.693c-.07-.21-.23-.38-.438-.462l-4.155-1.62 4.154-1.622c.208-.08.37-.25.44-.462l1.56-4.693 1.56 4.694c.07.212.23.382.438.463l4.155 1.62-4.155 1.622zM6.663 3.812h-1.88V2.05c0-.414-.337-.75-.75-.75s-.75.336-.75.75v1.762H1.5c-.414 0-.75.336-.75.75s.336.75.75.75h1.782v1.762c0 .414.336.75.75.75s.75-.336.75-.75V5.312h1.88c.415 0 .75-.336.75-.75s-.335-.75-.75-.75zm2.535 15.622h-1.1v-1.016c0-.414-.335-.75-.75-.75s-.75.336-.75.75v1.016H5.57c-.414 0-.75.336-.75.75s.336.75.75.75H6.6v1.016c0 .414.335.75.75.75s.75-.336.75-.75v-1.016h1.098c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path></g></svg>
        </i>
      </div>
      <div className='py-2 px-3 posting border-bottom'>
        <Row>
          <Col md={2}>
            <Button className="tweet">
              <User size={30}/>
            </Button>
          </Col>
          <Col md={10}>
            <Input type='text' className='border-0' placeholder={`What's Happening?`} name="tweet" onChange={(e)=>handleChange(e)} value={data.tweet}/>
          </Col>
        </Row>
        <div style={{textAlign:"right"}}>
          <Button style={{borderRadius:"3em",backgroundColor:"rgb(29,155,240)"}} onClick={()=>newTweet()}>
              Tweet
          </Button>
        </div>
      </div>
      {
        datas.length>0?
        (datas.map((d,idx)=>{
          return(
          <div className='feed-items py-3 px-3 border-bottom'>
            {console.log(d)}
            <Row>
              <Col md={2}>
                <Button className="tweet">
                  <User size={30}/>
                </Button>
              </Col>
              <Col md={10}>
                  <strong>{d.nama}</strong>
                  <span style={{color:"gray"}}>@{d.username}</span>
                  {
                    id===d.iduser?
                    (
                      <UncontrolledButtonDropdown className='button-secondary'>
                        <DropdownToggle>
                          <MoreHorizontal size={14}/>                  
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem style={{color:"red"}} onClick={()=>deleteTwit(d.id)}>
                            <Trash2 size={20}/> Delete
                          </DropdownItem>
                          <DropdownItem onClick={()=>edittweet(d)}>
                            <Edit2 size={20}/> Edit
                          </DropdownItem>
                        </DropdownMenu>
                      </UncontrolledButtonDropdown>
                    )
                    :
                    null
                  }

                  {/* </Button> */}
                  <div style={{marginRigth:"10em"}}>
                    <p>
                      {d.tweet}
                    </p>
                  </div>
              </Col>
            </Row>
            <div className='mt-1 d-flex justify-content-between'>
              <div><i className='fas'><MessageCircle size={20}/></i></div>
              <div><i className='fas'><Repeat size={20}/></i></div>
              <div><i className='fas'><Heart size={20}/></i></div>
              <div><i className='fas'><Share size={20}/></i></div>
            </div>
          </div>
          )
        }))
        :
        null
      }
      <EditModal isOpenEdit={isOpenEdit} 
      dataEdit={dataEdit} 
      toggleEdit={toggleEdit}
      setupdateData={setUpdateData}
      />
      <DeleteModal isOpenDelete={isOpenDelete}
      dataDelete={dataDelete}
      toggleDelete={toggleDelete}
      setupdateData={setUpdateData}
      />
    </>
  )
}
