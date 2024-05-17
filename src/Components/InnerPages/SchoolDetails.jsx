import React from "react";
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import image from '../assests/images/logo.png'

const SchoolDetails = () => {
    
    const navigate = useNavigate();

    const SubmitSchoolDetails = () =>{
        navigate("/uploadBook");
    }

    return (
        <div className='containers flip-card'>
            <Card border="primary" className='cardProps'>
                <Card.Body>
                <img src={image} title="poc" alt="poc" className="logo" />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>School Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter School name" />
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