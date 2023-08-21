import React from 'react'
import Cart from '../components/Cart/Cart'
import { Link } from 'react-router-dom'

const CheckoutPage = (props) => {
  return (
    <div>
      <div>Checkout page</div>
      {props.loggedIn? <Cart/>: (<>
      <h2>Please <Link to='/login'>log in</Link></h2>
      </>)}
      
    </div>
  )
}

export default CheckoutPage