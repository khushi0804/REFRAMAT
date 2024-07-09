import React, { useState } from 'react';
import ProductList from './components/ProductList';
import SearchBar from './components/SearchBar';
import Filter from './components/Filter';

const categories = [
    'Category 1',
    'Category 2',
    'Category 3',
    'Category 4',
    'Category 5',
    'Category 6',
    'Category 7',
    'Category 8',
    'Category 9',
    'Category 10'
];

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    return (
        <div className="app">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <Filter categories={categories} setCategory={setCategory} />
            <ProductList category={category} />
        </div>
    );
};

export default App;
