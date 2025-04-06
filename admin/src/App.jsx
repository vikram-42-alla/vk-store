import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import ProductAdd from './ProductAdd'
import Form from './Form'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/product" element={<ProductAdd />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
