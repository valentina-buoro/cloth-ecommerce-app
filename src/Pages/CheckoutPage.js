import React from 'react'
import Cart from '../components/Cart/Cart'

const CheckoutPage = (props) => {
  return (
    <div>
      <div>Checkout page</div>
      {props.loggedIn? <Cart/>: (<>
      <h2>Please log in</h2>
      </>)}
      
    </div>
  )
}

export default CheckoutPage