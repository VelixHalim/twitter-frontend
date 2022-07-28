import React ,{useState} from 'react'
import {Modal, ModalBody, ModalHeader, Container, Input, Row, Col, ModalFooter, Button} from 'reactstrap'
import "./modalSignUp.css"
import SignUpModal2 from './SignUpModal2'
export default function SignUpModal(props) {
    console.log(props)
    const isOpen = props.isOpen
    const toggle = props.toggle

    const isOpenModal2 = props.isOpenModal2
    const toggleModal2 = props.toggleModal2

    const isOpenModal3 = props.isOpenModal3
    const toggleModal3 = props.toggleModal3
    const isOpenModal4 = props.isOpenModal4
    const toggleModal4 = props.toggleModal4
    const isOpenModal5 = props.isOpenModal5
    const toggleModal5 = props.toggleModal5

    const isOpenSignIn = props.isOpenSignIn
    const toggleSignIn = props.toggleSignIn
    
    const [data, setData]=useState({
        nama:"",
        email:"",
        nomor:"",
        username:"",
        password:"",
        day:"",
        month:"",
        year:""
    })

    const step2=()=>{
        toggleModal2()
        toggle()
    }

    const handleChange=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    
    console.log(data)
    return (
        <>
      <Modal isOpen={isOpen} toggle={toggle} fade={false} >
        <div>
            <span className='x-up' onClick={()=>toggle()}>x</span>
            <span className='step'>
                Step 1 of 3
            </span>
        </div>
        <div style={{marginLeft:"3em", marginTop:"2em" ,fontSize:"24px", fontWeight:"700"}}>
            Create your account
        </div>
        <ModalBody>
            <div className='input-1-sign'>
                <Input 
                    type="text" 
                    required 
                    placeholder='Name' 
                    name='nama'
                    value={data.name}
                    onChange={(e)=>handleChange(e)}
                    />
            </div>
                <div className='input-1-sign'>
                    <Input 
                        type="email" 
                        required 
                        placeholder='Email'
                        name='email'
                        value={data.email}
                        onChange={(e)=>handleChange(e)}
                        />
                    {/* <div className='secondary' onClick={()=>setuse()}>
                        use phone instead
                    </div> */}
                </div>
                <div className='input-1-sign'>
                    <Input 
                        type="text" 
                        required 
                        placeholder='Phone'
                        name='nomor'
                        value={data.nomor}
                        onChange={(e)=>handleChange(e)}
                        />
                </div>
                <div className='input-1-sign'>
                    <Input 
                        type="text" 
                        required 
                        placeholder='Username'
                        name='username'
                        value={data.username}
                        onChange={(e)=>handleChange(e)}
                        />
                </div>
                <div className='input-1-sign'>
                    <Input 
                        type="password" 
                        required 
                        placeholder='Password'
                        name='password'
                        value={data.password}
                        onChange={(e)=>handleChange(e)}
                        />
                    {/* <div className='secondary' onClick={()=>setuse()}>
                        use email instead
                    </div> */}
                </div>
            <div style={{textAlign:"left", marginLeft:"3em", fontWeight:"700", marginTop:"1em"}}>
                Date of birth
            </div>
            <div style={{textAlign:"justify",marginLeft:"4em", fontSize:"12px", marginTop:"0.5em", marginRight:"4em", color:"gray"}}>
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
            </div>
            <div className='input-1-sign'>
                <Row>
                    <Col>
                        <Input type='select' name='month' required value={data.month} onChange={(e)=>handleChange(e)} >
                            <option>Month</option>
                            <option value={"01"}>January</option>
                            <option value={"02"}>February</option>
                            <option value={"03"}>March</option>
                            <option value={"04"}>April</option>
                            <option value={"05"}>May</option>
                            <option value={"06"}>June</option>
                            <option value={"07"}>July</option>
                            <option value={"08"}>August</option>
                            <option value={"09"}>September</option>
                            <option value={"10"}>October</option>
                            <option value={"11"}>November</option>
                            <option value={"12"}>December</option>
                        </Input>
                    </Col>
                    <Col>
                        <Input type='select'  name="day" required value={data.day} onChange={(e)=>handleChange(e)}>
                            <option>Day</option>
                            <option value={"01"}>1</option>
                            <option value={"02"}>2</option>
                            <option value={"03"}>3</option>
                            <option value={"04"}>4</option>
                            <option value={"05"}>5</option>
                            <option value={"06"}>6</option>
                            <option value={"07"}>7</option>
                            <option value={"08"}>8</option>
                            <option value={"09"}>9</option>
                            <option value={"10"}>10</option>
                            <option value={"11"}>11</option>
                            <option value={"12"}>12</option>
                            <option value={"13"}>13</option>
                            <option value={"14"}>14</option>
                            <option value={"15"}>15</option>
                            <option value={"16"}>16</option>
                            <option value={"17"}>17</option>
                            <option value={"18"}>18</option>
                            <option value={"19"}>19</option>
                            <option value={"20"}>20</option>
                            <option value={"21"}>21</option>
                            <option value={"22"}>22</option>
                            <option value={"23"}>23</option>
                            <option value={"24"}>24</option>
                            <option value={"25"}>25</option>
                            <option value={"26"}>26</option>
                            <option value={"27"}>27</option>
                            <option value={"28"}>28</option>
                            <option value={"29"}>29</option>
                            <option value={"30"}>30</option>
                            <option value={"31"}>31</option>
                        </Input>
                    </Col>
                    <Col>
                        <Input type='select' name='year' required value={data.year} onChange={(e)=>handleChange(e)}>
                            <option>Year</option>
                            <option value={"2022"}>2022</option>
                            <option value={"2021"}>2021</option>
                            <option value={"2020"}>2020</option>
                            <option value={"2019"}>2019</option>
                            <option value={"2018"}>2018</option>
                            <option value={"2017"}>2017</option>
                            <option value={"2016"}>2016</option>
                            <option value={"2015"}>2015</option>
                            <option value={"2014"}>2014</option>
                            <option value={"2013"}>2013</option>
                            <option value={"2012"}>2012</option>
                            <option value={"2011"}>2011</option>
                            <option value={"2010"}>2010</option>
                            <option value={"2009"}>2009</option>
                            <option value={"2008"}>2008</option>
                            <option value={"2007"}>2007</option>
                            <option value={"2006"}>2006</option>
                            <option value={"2005"}>2005</option>
                            <option value={"2004"}>2004</option>
                            <option value={"2003"}>2003</option>
                            <option value={"2002"}>2002</option>
                            <option value={"2001"}>2001</option>
                            <option value={"2000"}>2000</option>
                            <option value={"1999"}>1999</option>
                            <option value={"1998"}>1998</option>
                            <option value={"1997"}>1997</option>
                            <option value={"1996"}>1996</option>
                            <option value={"1995"}>1995</option>
                            <option value={"1994"}>1994</option>
                            <option value={"1993"}>1993</option>
                            <option value={"1992"}>1992</option>
                            <option value={"1991"}>1991</option>
                            <option value={"1990"}>1990</option>
                            <option value={"1989"}>1989</option>
                            <option value={"1988"}>1988</option>
                            <option value={"1987"}>1987</option>
                            <option value={"1986"}>1986</option>
                            <option value={"1985"}>1985</option>
                            <option value={"1984"}>1984</option>
                            <option value={"1983"}>1983</option>
                            <option value={"1982"}>1982</option>
                            <option value={"1981"}>1981</option>
                            <option value={"1980"}>1980</option>
                        </Input>
                    </Col>
                </Row>
            </div>
            <div>
                <Button type="button" className="btn btn-light btn-2-sign" onClick={()=>step2()}> 
                    Next
                </Button>
            </div>
        </ModalBody>
      </Modal>
      <SignUpModal2
        toggle ={toggle}  
        isOpenModal2={isOpenModal2} toggleModal2 ={toggleModal2} 
        isOpenModal3={isOpenModal3} toggleModal3 ={toggleModal3} 
        isOpenModal4={isOpenModal4} toggleModal4 ={toggleModal4} 
        isOpenModal5={isOpenModal5} toggleModal5 ={toggleModal5} 
        isOpenSignIn={isOpenSignIn} toggleSignIn={toggleSignIn}
        data={data}
        /> 
      </>
    )
}
