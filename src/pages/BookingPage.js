import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import BookingForm from '../components/BookingForm';
import { getDoctor } from '../services/api';

function BookingPage() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const data = await getDoctor(id);
        setDoctor(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch doctor details. Please try again later.');
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading booking page...</p>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="error-container">
        <p className="error-message">{error || 'Doctor not found'}</p>
        <Link to="/" className="btn btn-primary">
          Back to Doctors
        </Link>
      </div>
    );
  }

  return (
    <div className="booking-page">
      <div className="booking-header">
        <Link to={`/doctor/${id}`} className="btn btn-secondary">
          <i className="fas fa-arrow-left"></i> Back to Profile
        </Link>
      </div>
      
      <BookingForm doctorId={id} doctorName={doctor.name} />
    </div>
  );
}

export default BookingPage;