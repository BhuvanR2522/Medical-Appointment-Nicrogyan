import React from 'react';
import { Link } from 'react-router-dom';

function DoctorCard({ doctor }) {
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
    <div className="card doctor-card">
      <img src={doctor.image} alt={doctor.name} className="card-img" />
      <div className="card-content">
        <h3 className="card-title">{doctor.name}</h3>
        <p className="doctor-specialty">{doctor.specialty}</p>
        <span className={`availability ${availabilityInfo.class}`}>
          {availabilityInfo.text}
        </span>
        <p className="card-text">{doctor.description}</p>
        <Link to={`/doctor/${doctor.id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default DoctorCard;