// Mock data for doctors
const mockDoctors = [
  {
    id: '1',
    name: 'Dr. Rajesh Sharma',
    specialty: 'Cardiologist',
    image: 'https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg',
    availability: 'available',
    description: 'Specialized in cardiovascular diseases with over 10 years of experience.',
    education: 'MD, All India Institute of Medical Sciences',
    experience: 10,
    rating: 4.8,
    location: 'Apollo Hospitals',
    about: 'Dr. Rajesh Sharma is a board-certified cardiologist with extensive experience in treating heart conditions. He specializes in preventive cardiology and heart failure management. Dr. Sharma is known for his patient-centered approach and dedication to providing comprehensive care.',
    specializations: [
      'Preventive Cardiology',
      'Heart Failure Management',
      'Coronary Artery Disease',
      'Cardiac Rehabilitation'
    ],
    schedule: {
      'Monday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: true },
        { time: '11:00', booked: false },
        { time: '14:00', booked: false },
        { time: '15:00', booked: true }
      ],
      'Tuesday': [
        { time: '09:00', booked: true },
        { time: '10:00', booked: false },
        { time: '11:00', booked: false },
        { time: '14:00', booked: true },
        { time: '15:00', booked: false }
      ],
      'Wednesday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: false },
        { time: '11:00', booked: true }
      ],
      'Thursday': [
        { time: '14:00', booked: false },
        { time: '15:00', booked: false },
        { time: '16:00', booked: true }
      ],
      'Friday': [
        { time: '09:00', booked: true },
        { time: '10:00', booked: true },
        { time: '11:00', booked: false }
      ],
      'Saturday': [],
      'Sunday': []
    }
  },
  {
    id: '2',
    name: 'Dr. Priya Patel',
    specialty: 'Dermatologist',
    image: 'https://img.freepik.com/free-photo/dr-priya-patel-dermatologist-white-coat-with-stethoscope-posing-modestly-white-wall_496169-1508.jpg',
    availability: 'booked',
    description: 'Expert in skin conditions and cosmetic dermatology with a focus on patient education.',
    education: 'MD, Christian Medical College, Vellore',
    experience: 8,
    rating: 4.9,
    location: 'Fortis Hospital, Delhi',
    about: 'Dr. Priya Patel is a board-certified dermatologist specializing in medical, surgical, and cosmetic dermatology. She has a particular interest in skin cancer prevention and treatment, acne, and anti-aging procedures. Dr. Patel is committed to helping patients achieve healthy, beautiful skin through personalized treatment plans.',
    specializations: [
      'Medical Dermatology',
      'Cosmetic Dermatology',
      'Skin Cancer Screening',
      'Acne Treatment'
    ],
    schedule: {
      'Monday': [
        { time: '09:00', booked: true },
        { time: '10:00', booked: true },
        { time: '11:00', booked: true }
      ],
      'Tuesday': [
        { time: '14:00', booked: true },
        { time: '15:00', booked: true },
        { time: '16:00', booked: true }
      ],
      'Wednesday': [
        { time: '09:00', booked: true },
        { time: '10:00', booked: true },
        { time: '11:00', booked: true }
      ],
      'Thursday': [
        { time: '14:00', booked: true },
        { time: '15:00', booked: true },
        { time: '16:00', booked: true }
      ],
      'Friday': [
        { time: '09:00', booked: true },
        { time: '10:00', booked: true },
        { time: '11:00', booked: true }
      ],
      'Saturday': [],
      'Sunday': []
    }
  },
  {
    id: '3',
    name: 'Dr. Vikram Mehta',
    specialty: 'Neurologist',
    image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg',
    availability: 'leave',
    description: 'Specializes in neurological disorders with a research background in Alzheimer\'s disease.',
    education: 'MD, Armed Forces Medical College, Pune',
    experience: 12,
    rating: 4.7,
    location: 'Medanta Hospital, Gurugram',
    about: 'Dr. Vikram Mehta is a highly respected neurologist with expertise in diagnosing and treating complex neurological conditions. He has conducted extensive research on Alzheimer\'s disease and other neurodegenerative disorders. Dr. Mehta takes a comprehensive approach to patient care, combining the latest medical advances with compassionate treatment.',
    specializations: [
      'Alzheimer\'s Disease',
      'Parkinson\'s Disease',
      'Multiple Sclerosis',
      'Epilepsy Management'
    ],
    schedule: {
      'Monday': [],
      'Tuesday': [],
      'Wednesday': [],
      'Thursday': [],
      'Friday': [],
      'Saturday': [],
      'Sunday': []
    }
  },
  {
    id: '4',
    name: 'Dr. Ananya Desai',
    specialty: 'Pediatrician',
    image: 'https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg',
    availability: 'available',
    description: 'Dedicated to providing comprehensive care for children from infancy through adolescence.',
    education: 'MD, Kasturba Medical College, Manipal',
    experience: 7,
    rating: 4.9,
    location: 'Rainbow Children\'s Hospital, Bangalore',
    about: 'Dr. Ananya Desai is a compassionate pediatrician who provides comprehensive healthcare for children from birth through adolescence. She specializes in preventive care, developmental assessments, and managing common childhood illnesses. Dr. Desai is known for her gentle approach and ability to connect with young patients and their families.',
    specializations: [
      'Well-Child Care',
      'Developmental Assessments',
      'Childhood Immunizations',
      'Adolescent Medicine'
    ],
    schedule: {
      'Monday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: true },
        { time: '11:00', booked: false }
      ],
      'Tuesday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: false },
        { time: '11:00', booked: true }
      ],
      'Wednesday': [
        { time: '14:00', booked: true },
        { time: '15:00', booked: false },
        { time: '16:00', booked: false }
      ],
      'Thursday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: true },
        { time: '11:00', booked: false }
      ],
      'Friday': [
        { time: '14:00', booked: false },
        { time: '15:00', booked: false },
        { time: '16:00', booked: true }
      ],
      'Saturday': [],
      'Sunday': []
    }
  },
  {
    id: '5',
    name: 'Dr. Arjun Singh',
    specialty: 'Orthopedic Surgeon',
    image: 'https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg',
    availability: 'available',
    description: 'Specializes in sports medicine and joint replacement surgery with minimally invasive techniques.',
    education: 'MD, King George\'s Medical University, Lucknow',
    experience: 15,
    rating: 4.8,
    location: 'Max Super Speciality Hospital, Mumbai',
    about: 'Dr. Arjun Singh is a board-certified orthopedic surgeon specializing in sports medicine and joint replacement surgery. He is known for his expertise in minimally invasive techniques that promote faster recovery and better outcomes. Dr. Singh works closely with physical therapists to ensure comprehensive care for his patients throughout their rehabilitation process.',
    specializations: [
      'Sports Medicine',
      'Joint Replacement',
      'Arthroscopic Surgery',
      'Fracture Care'
    ],
    schedule: {
      'Monday': [
        { time: '09:00', booked: true },
        { time: '10:00', booked: false },
        { time: '11:00', booked: false }
      ],
      'Tuesday': [
        { time: '14:00', booked: false },
        { time: '15:00', booked: true },
        { time: '16:00', booked: false }
      ],
      'Wednesday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: false },
        { time: '11:00', booked: true }
      ],
      'Thursday': [
        { time: '14:00', booked: true },
        { time: '15:00', booked: false },
        { time: '16:00', booked: false }
      ],
      'Friday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: true },
        { time: '11:00', booked: false }
      ],
      'Saturday': [],
      'Sunday': []
    }
  },
  {
    id: '6',
    name: 'Dr. Meera Iyer',
    specialty: 'Psychiatrist',
    image: 'https://img.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827776.jpg',
    availability: 'available',
    description: 'Experienced in treating various mental health conditions with a holistic approach to care.',
    education: 'MD, Jawaharlal Institute of Postgraduate Medical Education & Research',
    experience: 9,
    rating: 4.7,
    location: 'NIMHANS, Bangalore',
    about: 'Dr. Meera Iyer is a compassionate psychiatrist who specializes in the diagnosis and treatment of mental health disorders. She takes a holistic approach to mental healthcare, considering biological, psychological, and social factors that affect her patients\' wellbeing. Dr. Iyer is dedicated to reducing the stigma around mental health and providing supportive, evidence-based care.',
    specializations: [
      'Anxiety Disorders',
      'Depression',
      'PTSD',
      'Medication Management'
    ],
    schedule: {
      'Monday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: true },
        { time: '11:00', booked: false }
      ],
      'Tuesday': [
        { time: '14:00', booked: false },
        { time: '15:00', booked: false },
        { time: '16:00', booked: true }
      ],
      'Wednesday': [
        { time: '09:00', booked: true },
        { time: '10:00', booked: false },
        { time: '11:00', booked: false }
      ],
      'Thursday': [
        { time: '14:00', booked: false },
        { time: '15:00', booked: true },
        { time: '16:00', booked: false }
      ],
      'Friday': [
        { time: '09:00', booked: false },
        { time: '10:00', booked: false },
        { time: '11:00', booked: true }
      ],
      'Saturday': [],
      'Sunday': []
    }
  }
];

// Simulate API calls with promises and timeouts
export const getDoctors = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDoctors);
    }, 500); // Simulate network delay
  });
};

export const getDoctor = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const doctor = mockDoctors.find(doc => doc.id === id);
      if (doctor) {
        resolve(doctor);
      } else {
        reject(new Error('Doctor not found'));
      }
    }, 500); // Simulate network delay
  });
};

export const bookAppointment = (appointmentData) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // In a real app, this would send data to a server
      console.log('Booking appointment:', appointmentData);
      resolve({ success: true, appointmentId: Math.random().toString(36).substr(2, 9) });
    }, 1000); // Simulate network delay
  });
};