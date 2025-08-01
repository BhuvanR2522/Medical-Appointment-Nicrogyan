import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="search-container">
      <div className="search-bar">
        <input
          type="text"
          className="search-input"
          placeholder="Search by doctor name or specialty..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchBar;