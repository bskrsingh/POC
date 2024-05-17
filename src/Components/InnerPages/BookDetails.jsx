import React, { useMemo, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import { useNavigate } from 'react-router-dom';
import image from '../assests/images/logo.png';

import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

const BookDetails = () => {

    const [rowData,setData] = useState([]);

        useEffect(()=>{
            let url = 'https://jsonplaceholder.typicode.com/comments';
            fetch(url).then((resp)=>{
                resp.json().then((res)=>{
                    console.log('dta', res);
                    setData(res)
                })
            })
        },[]);

    const navigate = useNavigate();

    const SaveBookDetails = () => {
        navigate("/bookListing");
    }

    const [columnDefs] = useState([
        { field: "id", headerName:'ID', checkboxSelection: false, tooltipField:'id', editable: true },
        { field: "name", headerName:'Title', checkboxSelection: false,tooltipField:'name', editable: true},
        { field: "body", headerName:'Comment',tooltipField:'body', editable: true},
    ]);

    const defaultColDef = useMemo(() => {
        return {
            filter: 'agTextColumnFilter',
            floatingFilter: false,
            flex :1,
            minWidth:60
        }
    }, []);

    return (
        <div className='containers card'>
            <Card border="primary" className='cardProps'>
                <Card.Body>
                    <img src={image} title="poc" alt='poc' className="logo" />
                    <div className="ag-theme-quartz">
                        <AgGridReact
                            rowData={rowData}
                            columnDefs={columnDefs}
                            defaultColDef={defaultColDef}
                            rowSelection="multiple"
                            suppressRowClickSelection={true}
                            pagination={true}                   
                            autofitCols = {true}
                            domLayout = 'autoHeight'
                            paginationPageSize={10}
                        />
                    </div>
                    <Button variant="primary" type="submit" className='m10' onClick={SaveBookDetails}>
                            Submit
                        </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookDetails