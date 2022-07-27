import "./startpage.css"

import React, {useState} from 'react'
import { Button } from "reactstrap"
import SignInModal from "./SignInModal"
import SignUpModal from "./SignUpModal"

export default function LoginPage() {
    const [isOpen, setIsOpen]=useState(false)
    const setToggle=()=>{
        setIsOpen(!isOpen)
    }

    const [isOpenSignUp, setIsOpenSignUp] = useState(false)
    const setToggleSignUp =()=>{
        setIsOpenSignUp(!isOpenSignUp)
    }

    const [isOpenSignUp2, setIsOpenSignUp2] = useState(false)
    const setToggleSignUp2 =()=>{
        setIsOpenSignUp2(!isOpenSignUp2)
    }
    const [isOpenSignUp3, setIsOpenSignUp3] = useState(false)
    const setToggleSignUp3 =()=>{
        setIsOpenSignUp3(!isOpenSignUp3)
    }
    const [isOpenSignUp4, setIsOpenSignUp4] = useState(false)
    const setToggleSignUp4 =()=>{
        setIsOpenSignUp4(!isOpenSignUp4)
    }
    const [isOpenSignUp5, setIsOpenSignUp5] = useState(false)
    const setToggleSignUp5 =()=>{
        setIsOpenSignUp5(!isOpenSignUp5)
    }


    return (
        <>
            <div className="start">
                <div className="container-l">
                    <svg viewBox="0 0 24 24" 
                        style={{width:"300px"}}
                        aria-hidden="true" 
                        class="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr">
                            <g>
                                <path 
                                fill="white"
                                d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                                </path>
                            </g>
                    </svg>
                </div>
                <div className="container-r">
                    <div className="icon-r">
                        <svg viewBox="0 0 24 24" 
                            style={{width:"50px"}}
                            aria-hidden="true" 
                            class="r-jwli3a r-4qtqp9 r-yyyyoo r-rxcuwo r-1777fci r-m327ed r-dnmrzs r-494qqr r-bnwqim r-1plcrui r-lrvibr">
                                <g>
                                    <path 
                                    fill="white"
                                    d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z">
                                    </path>
                                </g>
                        </svg>
                        <h1>Happening now</h1>
                        <h2>Join Twitter today.</h2>
                        <div className="signup">
                            <div>                                
                                <Button type="button" className="btn btn-light btn-1">
                                    <svg version="1.1" 
                                    style={{width:"20px", marginRight:"10px"}}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 48 48" class="LgbsSe-Bz112c">
                                        <g>
                                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"></path>
                                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"></path>
                                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"></path>
                                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"></path>
                                            <path fill="none" d="M0 0h48v48H0z"></path>
                                        </g>
                                    </svg> 
                                    Sign Up with Google
                                </Button>
                            </div>
                            <div>
                                <Button type="button" className="btn btn-light btn-2"> 
                                    <svg 
                                        style={{width:"25px", marginRight:"10px"}}
                                        viewBox="0 0 24 24" 
                                        aria-hidden="true" 
                                        class="r-4qtqp9 r-yyyyoo r-z80fyv r-1d4mawv r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-19wmn03"><g><path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45z"></path>
                                        </g>
                                    </svg>
                                    Sign Up with Apple
                                </Button>
                            </div>
                            <div className="signin-or">
                                <div className="sign-line"></div>
                                <div className="sing-in-email">
                                    or
                                </div>
                                <div className="sign-line"></div>
                            </div>
                            <Button type="button" className="btn btn-primary btn-3" onClick={()=>setToggleSignUp()}>  
                                Sign Up with Phone or Email
                            </Button>
                            <div className="term">
                                By signing up, you agree to the <a href="" style={{color:"rgb(29,155,240) !important;"}}>Terms of Service</a> and <a href="" style={{color:"rgb(29,155,240) !important;"}}>Privacy Policy</a>, including <a href="" style={{color:"rgb(29,155,240) !important;"}}>Cookie Use.</a>
                            </div>
                            <div className="question">
                                Already have an account?
                            </div>
                            <Button type="button" className="btn btn-outline-light btn-4" onClick={()=>setToggle()}>Sign in</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <a href="#" className="link">About</a>
                <a href="#" className="link">Help Center</a>
                <a href="#" className="link">Terms of Service</a>
                <a href="#" className="link">Privacy Policy</a>
                <a href="#" className="link">Cookie Policy</a>
                <a href="#" className="link">Accessibility</a>
                <a href="#" className="link">Ads info</a>
                <a href="#" className="link">Blog</a>
                <a href="#" className="link">Status</a>
                <a href="#" className="link">Careers</a>
                <a href="#" className="link">Brand Resources</a>
                <a href="#" className="link">Advertising</a>
                <a href="#" className="link">Marketing</a>
                <a href="#" className="link">Twitter for Business</a>
                <a href="#" className="link">Developers</a>
                <a href="#" className="link">Directory</a>
                <a href="#" className="link">Settings</a>
                <a href="#" className="link">© 2022 Twitter, Inc.</a>
            </div>
            <SignInModal isOpen={isOpen} toggle={setToggle} toggleRegis={setToggleSignUp}/> 
            <SignUpModal 
            isOpenSignIn={isOpen} toggleSignIn={setToggle}
            isOpen={isOpenSignUp} toggle={setToggleSignUp} 
            isOpenModal2={isOpenSignUp2} toggleModal2={setToggleSignUp2}
            isOpenModal3={isOpenSignUp3} toggleModal3={setToggleSignUp3}
            isOpenModal4={isOpenSignUp4} toggleModal4={setToggleSignUp4}
            isOpenModal5={isOpenSignUp5} toggleModal5={setToggleSignUp5}
            />
        </>
    )
}
