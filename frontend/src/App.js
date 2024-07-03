import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchForm from './Home/SearchForm';
import UniversityList from './University/Universities';
import './App.css';

const App = () => {
  const [universities, setUniversities] = useState([]);
  const [searchCriteria, setSearchCriteria] = useState({ country: '', province: '' });

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        let response;
        if (searchCriteria.country) {
          const url = searchCriteria.province
            ? `http://localhost:8000/api/universities/${searchCriteria.country}/${searchCriteria.province}`
            : `http://localhost:8000/api/universities/${searchCriteria.country}`;
          response = await axios.get(url);
        } else {
          response = await axios.get('http://localhost:8000/api/universities');
        }
        setUniversities(response.data.universities);
      } catch (error) {
        console.error('Error fetching universities:', error);
      }
    };

    fetchUniversities();
  }, [searchCriteria]); 

  const handleSearch = (country, province) => {
    setSearchCriteria({ country, province });
  };

  return (
    <div className="App">
      <h1>Universities</h1>
      <SearchForm onSearch={handleSearch} />
      <UniversityList universities={universities} />
    </div>
  );
};

export default App;
