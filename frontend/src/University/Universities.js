import React from 'react';
import University from './University';

const UniversityList = ({ universities }) => {
  return (
    <div className="university-list">
      {universities.map(university => (
        <University key={university.name + university.web_pages[0]} university={university} />
      ))}
    </div>
  );
};

export default UniversityList;
