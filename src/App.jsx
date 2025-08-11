import React from 'react'
import Welcome from './Welcome.jsx'
import { Route, Routes } from 'react-router-dom'
import SignUP from './SignUP.jsx'
import SignIn from './SignIn.jsx'
import Admin from './Admin.jsx'
import Customer from './Customer.jsx'
import ProductManagement from './ProductManagement.jsx'
import UserManagement from './UserManagement.jsx'
import Add_product from './product/Add_product.jsx'
import Update_product from './product/Update_product.jsx'
import Delete_product from './product/Delete_product.jsx'
import Search_product from './product/Search_product.jsx'
import UpdateUser from './users/UpdateUser.jsx'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        <Route path='/signUp' element={<SignUP />}></Route>
        <Route path='/signIn' element={<SignIn />}></Route>
        <Route path='/admin' element={<Admin />}></Route>
        <Route path='/customer' element={<Customer />}></Route>

        <Route path='/productManagement' element={<ProductManagement />}></Route>
        <Route path='/userManagement' element={<UserManagement />}></Route>

        <Route path='/add_Product' element={<Add_product />}></Route>
        <Route path='/update_Product' element={<Update_product />}></Route>
        <Route path='/delete_Product' element={<Delete_product />}></Route>
        <Route path='/search_Product' element={<Search_product />}></Route>

        <Route path='updateUser' element={<UpdateUser />}></Route>

      </Routes>
    </div>
  )
}
