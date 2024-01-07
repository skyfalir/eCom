import React, { useContext } from 'react';
import { MyContext } from '../App';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function CheckoutPage() {
  const navigate = useNavigate();
  const { cartProducts, setCartProducts } = useContext(MyContext);
  let totalPrice = 0;

  const handleQuantityChange = (product, operation) => {
    const updatedCartProducts = cartProducts.map((p) => {
      if (p.id === product.id) {
        if (operation === 'add') {
          return { ...p, quantity: p.quantity + 1 };
        } else if (operation === 'reduce') {
          const updatedQuantity = p.quantity - 1;
          if (updatedQuantity === 0) {
            return null; // Remove the product from the cart
          } else {
            return { ...p, quantity: updatedQuantity };
          }
        }
      }
      return p;
    }).filter(Boolean); // Remove null values from the array

    setCartProducts(updatedCartProducts);
  };

  return (
    <div className="container">
      {cartProducts.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        <div className="checkout">
          {cartProducts.map((product) => {
            const productTotalPrice = product.discountedPrice
              ? product.discountedPrice * product.quantity
              : product.price * product.quantity;
            totalPrice += productTotalPrice;

            return (
              <div className="checkout-page" key={product.id}>
                <div className="checkout-page__img-info">
                  <img className="checkout-page__img" src={product.imageUrl} alt={product.title} />
                  <div className="checkout-page__name-price">
                    <p className="checkout-page__name">{product.title}</p>
                    <p className="checkout-page__price">
                      {product.discountedPrice ? `$${product.discountedPrice}` : `$${product.price}`}
                    </p>
                  </div>
                </div>
                <div className="checkout-page__controls">
                  <button onClick={() => handleQuantityChange(product, 'add')}>↑</button>
                  <p className="checkout-page__quantity">{product.quantity}</p>
                  <button onClick={() => handleQuantityChange(product, 'reduce')}>↓</button>
                </div>
                <p className='checkout-page__total'>
                  Total: ${productTotalPrice.toFixed(2)}
                </p>
              </div>
            );
          })}
          <p className="checkout__grand-total">Total: ${totalPrice.toFixed(2)}</p>
        </div>
      )}
      {cartProducts.length !== 0 &&
      // cleans the cart after checkout
      <button
        className="checkout-page__link"
        onClick={() => (
          navigate(`/success`),
          setCartProducts([]),
          console.log(`cart is empty now!`)
        )}
      >
        Proceed to checkout
      </button>
      }
    </div>
  );
}

export default CheckoutPage;

// description: "Compact and easy to use wireless keyboard compatible with all devices."
// discountedPrice: 75.99
// id: "fbf07ebe-9f9a-4895-8a16-567acbbeef4e"
// imageUrl: "https://static.noroff.dev/api/online-shop/13-wireless-keyboard.jpg"
// price: 75.99
// rating: 4.5
// reviews: (2) [{…}, {…}]
// tags: ['electronics', 'computers']
// title: "Wireless Keyboard"