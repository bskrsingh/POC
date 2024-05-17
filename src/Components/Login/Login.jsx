import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './Login.css';
import image from '../assests/images/logo.png'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import { Button } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Login = () => {
    const navigate = useNavigate();
    const [valid, setValid] = useState(false)
    const [value, setValue] = useState('')



    const [name, setClassName] = useState('')

    const [otp1, setOtp1] = useState('')
    const [otp2, setOtp2] = useState('')
    const [otp3, setOtp3] = useState('')
    const [otp4, setOtp4] = useState('')

    const handleGetOTP = () => {
        const number = {
            otp: Math.floor(1000 + Math.random() * 9000),
            number: value
        }

        if (value) {            
            setValid(false)
            setTimeout(() => {
                setClassName('flip-card-inner-rotate')
                console.log("details", number)
                localStorage.setItem("phoneDetails", JSON.stringify(number))
            }, 1000);

            const otpSplit = number.otp.toString().split('');
            setOtp1(otpSplit[0])
            setOtp2(otpSplit[1])
            setOtp3(otpSplit[2])
            setOtp4(otpSplit[3])
        } else {
            setValid(true)
        }
    }

    const otpChange = () => {
        setClassName('')
    }

    const Login = () => {
        navigate("/schoolDetails");
    }

    return (
        <div className="containers flip-card">
            <div className={name ? `${name} flip-card-inner` : 'flip-card-inner'}>
                <div className="flip-card-front">
                    <span>Login</span>
                    <img src={image} title="poc" alt="poc" className="logo" />
                    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                    <Toast onClose={() => setValid(false)} show={valid} delay={5000} autohide bg='danger'>
                        <Toast.Body className='text-white'>Please Enter the Phone Number with Selected Country</Toast.Body>
                    </Toast>
                    </ToastContainer>

                    <PhoneInput
                        defaultCountry="IN"
                        placeholder="Enter phone number"
                        onChange={setValue} />
                    <Button type="button" variant="primary" className="btnAlign" onClick={handleGetOTP}>
                        Get OTP
                    </Button>
                </div>
                <div className="flip-card-back">
                    <h3 className="title">OTP Verification</h3>
                    <p className="sub-title">
                        Enter the OTP you received to
                        <span className="phone-number">{value}</span>
                    </p>

                    <div className="wrapper">
                        <input type="text" value={otp1} className="field 1" />
                        <input type="text" value={otp2} className="field 2" />
                        <input type="text" value={otp3} className="field 3" />
                        <input type="text" value={otp4} className="field 4" />
                    </div>
                    <Button type="button" className="btnAlign" variant="primary" onClick={Login}>
                        Login
                    </Button>
                    <Button className="resend" onClick={otpChange}>
                        Resend OTP
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login