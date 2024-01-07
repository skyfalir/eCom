import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@mui/material';
import Tags from '../components/Tags/index.jsx';
import { renderDiscount, calculateAverageRating } from '../utils/utils.jsx';
import { MyContext } from '../App';
import { Link } from 'react-router-dom';
import '../css/productpage.css'

function ProductPage() {
  const { id } = useParams();
  const { cartProducts, setCartProducts } = useContext(MyContext);
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({
    reviews: []
  });

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.noroff.dev/api/v1/online-shop/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleAddToCartClick = (product, event) => {
    event.stopPropagation();

    const existingProductIndex = cartProducts.findIndex(p => p.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCartProducts = [...cartProducts];
      const existingProduct = updatedCartProducts[existingProductIndex];
      const updatedProduct = { ...existingProduct, quantity: existingProduct.quantity + 1 };
      updatedCartProducts[existingProductIndex] = updatedProduct;
      setCartProducts(updatedCartProducts);
    } else {
      const updatedProduct = { ...product, quantity: 1 };
      setCartProducts([...cartProducts, updatedProduct]);
    }
  };

  const avgRating = calculateAverageRating(product.reviews);
  const numberOfReviewers = product.reviews === undefined ? 0 : product.reviews.length;

  return (
    <div className="product-page">
      <div className="container">
        <Link className="goback" to="..">← Go back</Link>
        {loading && (
          <div className="loading-wrapper">
            <h2 className="loading">Loading...</h2>
          </div>
        )}
        <div className="wrapper">
          <img src={product.imageUrl} alt={product.title} />
          <div className="information">
            <div className="ttp">
              <h1 className="title">{product.title}</h1>
              <Tags tags={product.tags} />
              <div className="product-reviews-price">
                {renderDiscount(product.discountedPrice, product.price)}
            </div>
              <div className="review">
                {avgRating !== 0 && <Rating name="read-only" value={avgRating} precision={0.5} readOnly />}
                <span>{numberOfReviewers !== 0 && `(${numberOfReviewers})`}</span>
              </div>
            </div>
            <p className="description">{product.description}</p>
            {product.reviews.map((review) => (
              <div key={review.id} className='review'>
                <h3>{review.username}</h3>
                <p>Rating: <Rating name="read-only" value={review.rating} precision={0.5} readOnly /></p>
                <p>{review.description}</p>
              </div>
            ))}
          <button
            className="add-to-cart"
            onClick={(e) => handleAddToCartClick(product, e)}
          >add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;