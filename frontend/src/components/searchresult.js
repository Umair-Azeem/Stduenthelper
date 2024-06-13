import React from 'react';
import './studentcard.css'

const SearchResults = ({ results }) => {
  return (
    <div>
      {results.length > 0 ? (
        results.map((student) => (
          <div key={student._id}>
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>University: {student.university}</p>
            <p>Subject of Interest: {student.subjectOfInterest}</p>
            {/* Display other relevant details */}
          </div>
        ))
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
