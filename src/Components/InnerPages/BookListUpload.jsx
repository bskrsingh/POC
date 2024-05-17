import React from "react";
import { useNavigate  } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import image from '../assests/images/logo.png';

const BooKListUpload = () => {
    const navigate = useNavigate();

    const UploadBooks = () =>{
        navigate("/bookDetails");
    }

    return (
        <div className='containers flip-card'>
            <Card border="primary" className='cardProps'>
                <Card.Body>
                <img src={image} title="poc" alt="poc" className="logo" />
                    <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Book List</Form.Label>
                            <Form.Control type="file" placeholder="Enter School name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Quote</Form.Label>
                            <Form.Control type="text" placeholder="Enter School name" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={UploadBooks}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BooKListUpload