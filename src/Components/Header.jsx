import React from 'react';

const ProductListHeader = ({ title, onSearch, onFilter, onSort }) => {
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    onFilter(e.target.value);
  };

  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="product-list-header">
      <h1>{title}</h1>
      
      <div className="header-controls">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search products..."
          onChange={handleSearchChange}
        />

        {/* Filter Dropdown */}
        <select onChange={handleFilterChange}>
          <option value="">Filter by Category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
        </select>

        {/* Sort Dropdown */}
        <select onChange={handleSortChange}>
          <option value="price">Sort by Price</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
    </div>
  );
};

export default ProductListHeader;
