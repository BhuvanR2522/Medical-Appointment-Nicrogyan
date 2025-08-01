import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getDoctor } from '../services/api';

function DoctorProfilePage() {
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
        <p>Loading doctor profile...</p>
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

  // Function to determine availability class and text
  const getAvailabilityInfo = (status) => {
    switch (status) {
      case 'available':
        return { class: 'available', text: 'Available Today' };
      case 'booked':
        return { class: 'booked', text: 'Fully Booked' };
      case 'leave':
        return { class: 'leave', text: 'On Leave' };
      default:
        return { class: '', text: 'Unknown' };
    }
  };

  const availabilityInfo = getAvailabilityInfo(doctor.availability);

  return (
    <div className="profile-page">
      <div className="profile-container">
        <div className="profile-sidebar">
          <img src={doctor.image} alt={doctor.name} className="profile-image" />
          <h1 className="profile-name">Dr. {doctor.name}</h1>
          <p className="profile-specialty">{doctor.specialty}</p>
          <div className="profile-info">
            <div className="profile-info-item">
              <i className="fas fa-graduation-cap"></i>
              <span>{doctor.education}</span>
            </div>
            <div className="profile-info-item">
              <i className="fas fa-briefcase"></i>
              <span>{doctor.experience} Years Experience</span>
            </div>
            <div className="profile-info-item">
              <i className="fas fa-star"></i>
              <span>{doctor.rating} Rating</span>
            </div>
            <div className="profile-info-item">
              <i className="fas fa-map-marker-alt"></i>
              <span>{doctor.location}</span>
            </div>
          </div>
          <span className={`availability ${availabilityInfo.class}`}>
            {availabilityInfo.text}
          </span>
          <Link to={`/booking/${doctor.id}`} className="btn btn-primary" style={{ width: '100%', marginTop: '20px' }}>
            Book Appointment
          </Link>
        </div>

        <div className="profile-main">
          <div className="profile-section">
            <h2 className="profile-section-title">About Dr. {doctor.name}</h2>
            <p>{doctor.about}</p>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Specializations</h2>
            <ul>
              {doctor.specializations && doctor.specializations.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="profile-section">
            <h2 className="profile-section-title">Weekly Schedule</h2>
            <table className="schedule-table">
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Availability</th>
                </tr>
              </thead>
              <tbody>
                {doctor.schedule && Object.entries(doctor.schedule).map(([day, slots]) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>
                      {slots.length > 0 ? (
                        slots.map((slot, index) => (
                          <span 
                            key={index} 
                            className={`time-slot ${slot.booked ? 'booked' : 'available'}`}
                          >
                            {slot.time}
                          </span>
                        ))
                      ) : (
                        <span className="time-slot booked">Not Available</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorProfilePage;