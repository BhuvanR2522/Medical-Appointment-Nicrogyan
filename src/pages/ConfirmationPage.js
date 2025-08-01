import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function ConfirmationPage() {
  const location = useLocation();
  const { booking, success } = location.state || {};

  if (!booking || !success) {
    return (
      <div className="error-container">
        <p className="error-message">No booking information found.</p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="booking-success">
      <i className="fas fa-check-circle"></i>
      <h2>Appointment Confirmed!</h2>
      <p>Your appointment with Dr. {booking.doctorName} has been scheduled successfully.</p>
      
      <div className="confirmation-details">
        <h3>Appointment Details</h3>
        <div className="confirmation-item">
          <strong>Patient:</strong> {booking.name}
        </div>
        <div className="confirmation-item">
          <strong>Email:</strong> {booking.email}
        </div>
        <div className="confirmation-item">
          <strong>Date:</strong> {formatDate(booking.date)}
        </div>
        <div className="confirmation-item">
          <strong>Time:</strong> {booking.time}
        </div>
        {booking.reason && (
          <div className="confirmation-item">
            <strong>Reason for Visit:</strong> {booking.reason}
          </div>
        )}
      </div>
      
      <p className="confirmation-note">
        A confirmation email has been sent to {booking.email}. Please arrive 15 minutes before your scheduled appointment.
      </p>
      
      <div className="confirmation-actions">
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ConfirmationPage;