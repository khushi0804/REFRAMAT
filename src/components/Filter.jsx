import React from 'react';

const Filter = ({ categories, setCategory }) => {
    return (
        <div className="filter">
            <button onClick={() => setCategory('')}>All Products</button>
            {categories.map((cat) => (
                <button key={cat} onClick={() => setCategory(cat)}>
                    {cat}
                </button>
            ))}
        </div>
    );
};

export default Filter;
