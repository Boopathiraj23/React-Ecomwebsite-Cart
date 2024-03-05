import React from 'react'
import Search from './Search'
import { Link } from 'react-router-dom'

const Header = ({cart_in}) => {
  return <nav class="navbar row">
  <div class="col-12 col-md-3">
    <div class="navbar-brand">
     <Link to={'/Return'}> <img width="100px" height='50px' className='rounded-circle' src="../images/logo.png" /> </Link>
    </div>
  </div>

  <div class="col-12 col-md-6 mt-2 mt-md-0">
    <Search/>
  </div>

  <div class="col-12 col-md-3 mt-4 mt-md-0 text-center">
   <Link to={'/cart/'} ><span id="cart" class="ml-3">Cart</span>
        <span class="ml-1" id="cart_count">{cart_in.length}</span>
   
   </Link> 
  </div>
</nav>
}

export default Header
