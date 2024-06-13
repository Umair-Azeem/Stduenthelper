import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [subject, setSubject] = useState('');
  const [day, setDay] = useState('');
  const [time, setTime] = useState('');

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleDayChange = (e) => {
    setDay(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleSearch = () => {
    if (subject && day && time) {
      onSearch(`${subject} ${day} ${time}`, 'combined');
    } else if (subject) {
      onSearch(subject, 'subject');
    } else if (day && time) {
      onSearch(`${day} ${time}`, 'timeSlot');
    } else {
      onSearch('', 'all');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
      <input
        type="text"
        value={subject}
        onChange={handleSubjectChange}
        placeholder="Enter subject..."
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <input
        type="text"
        value={day}
        onChange={handleDayChange}
        placeholder="Enter day..."
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <input
        type="text"
        value={time}
        onChange={handleTimeChange}
        placeholder="Enter time slot..."
        style={{ padding: '8px', marginRight: '10px' }}
      />
      <button onClick={handleSearch} style={{ padding: '8px' }}>
        Search
      </button>
    </div>
  );
};

export default SearchBar;
