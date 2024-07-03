import React, { useRef } from 'react';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import './University.css'; // Import the CSS file

const UniversityCard = ({ university }) => {
  const elementRef = useRef(null);

  const handleDownload = () => {
    toPng(elementRef.current, { cacheBust: false })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'university.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div ref={elementRef} id={`university-card-${university.name}`} className="university-card">
      <table className="university-table">
        <tbody>
          <tr>
            <th>University Name</th>
            <td>{university.name}</td>
          </tr>
          <tr>
            <th>Country</th>
            <td>{university.country}</td>
          </tr>
          {university['state-province'] && (
            <tr>
              <th>State/Province</th>
              <td>{university['state-province']}</td>
            </tr>
          )}
          <tr>
            <th>Website</th>
            <td>
              <a href={university.web_pages[0]} target="_blank" rel="noopener noreferrer">
                {university.web_pages[0]}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleDownload}>Download as JPEG</button>
    </div>
  );
};

export default UniversityCard;
