import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter , Routes, Route } from "react-router-dom";
import './index.css';
import Login from './Components/Login/Login';
import SchoolDetails from './Components/InnerPages/SchoolDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import BooKListUpload from './Components/InnerPages/BookListUpload';
import BookDetails from './Components/InnerPages/BookDetails';
import BookListing from './Components/InnerPages/BookListing';

import swDev from './swDev';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/schoolDetails" element={<SchoolDetails />} />
        <Route path="/uploadBook" element={<BooKListUpload />} />
        <Route path="/bookDetails" element={<BookDetails />} />
        <Route path="/bookListing" element={<BookListing />} />
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
swDev();