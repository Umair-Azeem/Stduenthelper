import React, { useState } from 'react';
import SearchBar from './searchbar';
import axios from 'axios';

const StudentSearch = () => {
  const [results, setResults] = useState([]);

  const handleSearch = async (query, filter) => {
    let url = '/students'; // Default URL to get all students

    if (filter === 'subject') {
      url = `/students/subject/${query}`;
    } else if (filter === 'timeSlot') {
      const [day, time] = query.split(' ');
      url = `/students/slots?day=${day}&time=${time}`;
    } else if (filter === 'combined') {
      const [subject, day, time] = query.split(' ');
      url = `/students/search?subject=${subject}&day=${day}&time=${time}`;
      console.log(url)
    }

    try {
      const response = await axios.get(`http://localhost:3000${url}`);
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      setResults([]);
    }
  };

  const renderStudents = () => {
    if (results.length === 0) {
      return <p>No students found.</p>;
    }

    return (
      <div className="student-list">
        {results.map((student) => (
          <div key={student._id} className="student-card">
            <h2>{student.name}</h2>
            <p>Email: {student.email}</p>
            <p>University: {student.university}</p>
            <p>Age: {student.age}</p>
            <p>Subjects of Interest: {student.subjectOfInterest.join(', ')}</p>
            {/* Add more details as needed */}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {renderStudents()}
    </div>
  );
};

export default StudentSearch;
