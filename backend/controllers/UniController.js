const axios = require('axios');

const API_URL = 'http://universities.hipolabs.com/search';

const getAllUniversities = async (req, res) => {
  try {
    const response = await axios.get(API_URL);
    const universities = response.data.slice(0, 30); 
    res.json({ universities });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching universities', error: error.message });
  }
};

const getUniversitiesByCountry = async (req, res) => {
  const { country } = req.params;
  try {
    const response = await axios.get(`${API_URL}?country=${country}`);
    const universities = response.data.slice(0, 30);

    const provinces = [...new Set(universities.map(univ => univ['state-province']))].filter(Boolean);

    res.json({ universities, provinces });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching universities', error: error.message });
  }
};

const getUniversitiesByProvince = async (req, res) => {
  const { country, province } = req.params;

  console.log(country);
  console.log(province);
  try {
    const response = await axios.get(`${API_URL}?country=${country}&state-province=${province}`);
    const universities = response.data.slice(0, 30); 
    console.log(universities[0]);
    res.json({ universities });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching universities', error: error.message });
  }
};

module.exports = {
  getAllUniversities,
  getUniversitiesByCountry,
  getUniversitiesByProvince,
};
