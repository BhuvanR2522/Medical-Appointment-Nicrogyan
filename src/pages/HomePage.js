import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import SearchBar from '../components/SearchBar';
import { getDoctors } from '../services/api';

function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getDoctors();
        setDoctors(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch doctors. Please try again later.');
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  // Filter doctors based on search term
  const filteredDoctors = doctors.filter(doctor => {
    const searchTermLower = searchTerm.toLowerCase();
    return (
      doctor.name.toLowerCase().includes(searchTermLower) ||
      doctor.specialty.toLowerCase().includes(searchTermLower)
    );
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading doctors...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <p className="error-message">{error}</p>
        <button className="btn btn-primary" onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Find & Book Appointments with Top Doctors</h1>
        <p>Get the best healthcare service with our qualified doctors</p>
      </div>

      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />

      {filteredDoctors.length === 0 ? (
        <div className="no-results">
          <p>No doctors found matching your search criteria.</p>
        </div>
      ) : (
        <div className="grid">
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      )}
    </div>
  );
}

export default HomePage;