import React from 'react'
import { Link } from 'react-router-dom'


function CheckoutSuccessPage() {
  return (
    <div className="container">
      <div className="checkout-success-page">
        <h1 className="checkout-success-page__title">
          Congratulations on your purchase!
        </h1>
        <Link className="checkout-success-page__link" to="/">Continue Shopping</Link>
      </div>
    </div>

  )
}

export default CheckoutSuccessPage