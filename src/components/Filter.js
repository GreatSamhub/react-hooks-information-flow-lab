import React from "react";

function Filter({ categories, selectedCategory, onCategoryChange }) {
  return (
    <div className="Filter">
      <select name="filter" categories={categories} value={selectedCategory} onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
