export const renderDiscount = (discount, price) => {
  if (discount !== undefined && discount > 0 && discount !== price) {
    // const discountedPrice = price - (price * (discount / 100));
    const discountPercentage = ((price - discount) / price) * 100
    return (
      <p className="product-price">
        ${discount}<span> %{discountPercentage.toFixed(0)}</span>
      </p>
    );
  }
  return <p className="product-price">${price}</p>;
}

export const calculateAverageRating = (review) => {
  if (review === undefined || review.length === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < review.length; i++) {
    sum += review[i].rating;
  }
  return sum / review.length;
}