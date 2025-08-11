import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductManagement() {
  return (
    <div>
        <h3>Manage your products here:</h3>
        <Link to={'/add_product'}>Add New Product</Link><br />
        <Link to={'/update_product'}>Update existing Product</Link><br />
        <Link to={'/delete_product'}>Delete Product</Link><br />
        <Link to={'/search_product'}>Search Product</Link><br />
    </div>
  )
}
