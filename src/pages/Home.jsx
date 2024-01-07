import React, { useEffect, useState, useContext } from 'react';
import { MyContext } from '../App';
import Product from '../components/Product';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Home() {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		setLoading(true);
		fetch('https://api.noroff.dev/api/v1/online-shop')
			.then((res) => res.json())
			.then((json) => {
				setProducts(json);
				setFilteredProducts(json);
			})
			.finally(() => setLoading(false));
	}, []);

	const handleFilterChange = (event, value) => {
		if (value) {
			const filtered = products.filter((product) =>
				product.title.toLowerCase().includes(value.toLowerCase())
			);
			setFilteredProducts(filtered);
		} else {
			setFilteredProducts(products);
		}
	};

	const productsRender = filteredProducts.map((product) => {
		return (
			<Product
				key={product.id}
				id={product.id}
				img={product.imageUrl}
				name={product.title}
				tags={product.tags}
				price={product.price}
				review={product.reviews}
				discount={product.discountedPrice}
				all={product}
			/>
		);
	});

	return (
		<div className="container">
			{loading && (
				<div className="loading-wrapper">
					<div className="lds-circle">
						<div></div>
					</div>
				</div>
			)}
			<div className="products">
				<Autocomplete
					disablePortal
					id="combo-box-demo"
					options={products.map((product) => ({
						id: product.id,
						title: product.title.toString(),
					}))}
					getOptionLabel={(option) => option.title.toString()}
					renderOption={(props, option) => (
						<li {...props} key={`${option.id}`}>
							{option.title}
						</li>
					)}
					sx={{
						width: '100%',
						fontSize: 20,
					}}
					renderInput={(params) => <TextField {...params} label="Title" />}
					filterOptions={(options, state) => {
						const inputValue = state.inputValue.toLowerCase();
						return options.filter((option) =>
							option.title.toLowerCase().includes(inputValue)
						);
					}}
					onInputChange={handleFilterChange}
				/>
				{productsRender}
			</div>
			<hr />
		</div>
	);
}
