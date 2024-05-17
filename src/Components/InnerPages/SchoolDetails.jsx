import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import image from '../assests/images/logo.png';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const SchoolDetails = () => {

    const [valid, setValid] = useState(false);
    const [schoolName] = ('');

    const navigate = useNavigate();

    const SubmitSchoolDetails = () => {
            setValid(false)
            navigate("/uploadBook");
    }

    return (
        <div className='containers flip-card'>
            <Card border="primary" className='cardProps'>
                <Card.Body>
                    <img src={image} title="poc" alt="poc" className="logo" />
                    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 1 }}>
                    <Toast onClose={() => setValid(false)} show={valid} delay={3000} autohide bg='danger'>
                        <Toast.Body className='text-white'>Please Enter the School Name First!</Toast.Body>
                    </Toast>
                    </ToastContainer>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>School Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter School name" value={schoolName} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={SubmitSchoolDetails}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default SchoolDetails