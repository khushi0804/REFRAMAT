import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = ({ category }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = category
                    ? await axios.get(`/api/products/category/${category}`)
                    : await axios.get('/api/products');
                setProducts(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchProducts();
    }, [category]);

    return (
        <div className="product-list">
            {products.map(product => (
                <div key={product.id} className="product-card">
                    <img src={product.image_url} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
