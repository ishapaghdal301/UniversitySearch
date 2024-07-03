import React, { useState, useEffect } from 'react';
import './SearchForm.css'

const SearchForm = ({ onSearch }) => {
  const [country, setCountry] = useState('');
  const [provinces, setProvinces] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');

  useEffect(() => {
    if (country) {
      fetch(`http://localhost:8000/api/universities/${country}`)
        .then(response => response.json())
        .then(data => {
          setProvinces(data.provinces);
          setSelectedProvince('');
        })
        .catch(error => console.error('Error fetching provinces:', error));
    }
  }, [country]);

  const handleSearch = () => {
    onSearch(country, selectedProvince);
  };

  return (
    <div className="search-form-container">
      <input className="search-input"
        type="text"
        value={country}
        onChange={e => setCountry(e.target.value)}
        placeholder="Enter country"
      />
      {provinces.length > 0 && (
        <select
         className='province-select'
          value={selectedProvince}
          onChange={e => setSelectedProvince(e.target.value)}
        >
          <option value="">Select province</option>
          {provinces.map(province => (
            <option key={province} value={province}>
              {province}
            </option>
          ))}
        </select>
      )}
      <button className="search-button" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;
