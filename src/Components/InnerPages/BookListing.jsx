import React, { useMemo, useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';
import image from '../assests/images/logo.png';

import Card from 'react-bootstrap/Card';

const BookDetails = () => {

    const [bookrowData,setBookRowData] = useState([]);
    useEffect(()=>{
        let url = 'https://jsonplaceholder.typicode.com/users';
        fetch(url).then((resp)=>{
            resp.json().then(res=>{
                console.log("listing",res)
                setBookRowData(res)
            })
        })
    },[])

    const [bookcolumnDefs] = useState([
        { field: "username", headerName:'Publications', checkboxSelection: false, editable: true,tooltipField:'username'},
        { field: "name", headerName:'Author', checkboxSelection: false, editable: true,tooltipField:'name'},
        { field: "pubDate", headerName:'Publication Date', filter: 'agNumberColumnFilter', checkboxSelection: false, editable: true,tooltipField:'pubDate', },
        { field: "website", headerName:'Website', checkboxSelection: false, editable: true,tooltipField:'website',},
    ]);

    const [filerowData] = useState([
        { filePrint: 'File 1', specsPages: 120, pubDate: '12-May-2023' },
        { filePrint: 'File 2', specsPages: 300, pubDate: '14-May-2023' }
    ]);

    const [filecolumnDefs] = useState([
        { field: "filePrint", checkboxSelection: false, editable: true,tooltipField:'filePrint', },
        { field: "specsPages", checkboxSelection: false, editable: true,tooltipField:'specsPages', },
        { field: "pubDate", filter: 'agNumberColumnFilter', checkboxSelection: false, editable: true,tooltipField:'pubDate', },
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
                        <span className='heading'>Book</span>
                        <AgGridReact
                            rowData={bookrowData}
                            columnDefs={bookcolumnDefs}
                            defaultColDef={defaultColDef}
                            rowSelection="multiple"
                            suppressRowClickSelection={true}                           
                            pagination={true}                   
                            autofitCols = {true}
                            domLayout = 'autoHeight'
                            paginationPageSize={5}
                        />
                    </div>

                    <div className="ag-theme-quartz">
                    <span className='heading'>File</span>
                        <AgGridReact
                            rowData={filerowData}
                            columnDefs={filecolumnDefs}
                            defaultColDef={defaultColDef}
                            rowSelection="multiple"
                            suppressRowClickSelection={true}
                            pagination={true}                    
                            autofitCols = {true}
                            domLayout = 'autoHeight'
                            paginationPageSize={5}
                        />
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}

export default BookDetails