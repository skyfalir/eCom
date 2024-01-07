import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Tags from '../Tags/index.jsx';
import { Rating } from '@mui/material';
import { MyContext } from '../../App';
import { renderDiscount, calculateAverageRating } from '../../utils/utils.jsx';
import './Product.css';

function Product({ img, name, tags, price, discount, review, id, all }) {
	const navigate = useNavigate();
	const { cartProducts, setCartProducts } = useContext(MyContext);
	const avgRating = calculateAverageRating(review);
	const numberOfReviewers = review === undefined ? 0 : review.length;

	const handleAddToCartClick = (product, event) => {
		event.stopPropagation();
		const existingProductIndex = cartProducts.findIndex((p) => p.id === product.id);

		if (existingProductIndex !== -1) {
			const updatedCartProducts = [...cartProducts];
			const existingProduct = updatedCartProducts[existingProductIndex];
			const updatedProduct = {
				...existingProduct,
				quantity: existingProduct.quantity + 1,
			};
			updatedCartProducts[existingProductIndex] = updatedProduct;
			setCartProducts(updatedCartProducts);
		} else {
			const updatedProduct = { ...product, quantity: 1 };
			setCartProducts([...cartProducts, updatedProduct]);
		}
	};

	return (
		<div className="product" onClick={() => navigate(`/product/${id}`)}>
			<img src={img} alt="product name" className="product-img" />
			<div className="information">
				<h2 className="product-name">{name}</h2>
				<Tags tags={tags} />

				<div className="product-reviews-price">
					<div className="product-review">
						{avgRating !== 0 ? (
							<Rating
								name="read-only"
								value={avgRating}
								precision={0.5}
								readOnly
							/>
						) : (
							<span>No reviews yet</span>
						)}
						{numberOfReviewers !== 0 && <span>({numberOfReviewers})</span>}
					</div>
					<hr className="product-hr"></hr>

					{renderDiscount(discount, price)}
				</div>
				<button
					className="add-to-cart"
					onClick={(e) => handleAddToCartClick(all, e)}
				>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default Product;
