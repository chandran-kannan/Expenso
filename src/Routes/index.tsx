import React from 'react'
import {BrowserRouter, Route } from "react-router-dom"
import Button from '../Components/Button';
import { Routes } from 'react-router';


const RoutesWrapper = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Button />}>
        </Route>
      </Routes>
    </BrowserRouter>
     
  )
}

export default RoutesWrapper