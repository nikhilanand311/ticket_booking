import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import './Register.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook


const RegistrationFormORG = () => {
  const navigate = useNavigate()
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    organizerREGNO: '',
    organizerPHONE: '',
    organizerNIC: '',
    addressLINE1: '',
    addressLINE2: '',
    organizerCITY: '',
    organizerAGREED: false,
  });

  const isNICValid = (nic) => nic.length >= 9 && nic.length <= 12 && !isNaN(nic);
  const isPhoneValid = (phone) => phone.length === 10 && !isNaN(phone);

 

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: fieldValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNICValid(formData.organizerNIC)) {
      swal('Error', 'NIC should be between 9 to 12 digits.', 'error');
      return;
    }

    if (!isPhoneValid(formData.organizerPHONE)) {
      swal('Error', 'Phone number should be exactly 10 digits.', 'error');
      return;
    }

    if (!formData.organizerAGREED) {
      swal('Error', 'You must agree to the guidelines and rules.', 'error');
      return;
    }

    const postData = {
      user: {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: 'ORGANIZER', // Set the role to 'ORGANIZER' for organizer registration
      },
      organizerREGNO: formData.organizerREGNO,
      organizerPHONE: formData.organizerPHONE,
      organizerNIC: formData.organizerNIC,
      addressLINE1: formData.addressLINE1,
      addressLINE2: formData.addressLINE2,
      organizerCITY: formData.organizerCITY,
      organizerAGREED: formData.organizerAGREED,
    };

    // Send the form data to the Django backend
    axios
      .post('http://localhost:8000/api/organizer-profiles/', postData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data);
        swal('Success', 'Registration successful!', 'success');
      })
      .catch((error) => {
        console.error('Error:', error);
        swal('Success', 'Registration successful!', 'success');
        navigate('/loginorg');
      });
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const renderStepIndicator = (currentStep) => {
    return (
      <div className="step-indicator">
        <div className={`step ${currentStep === 1 ? 'active' : ''}`}>Step 1</div>
        <div className={`step ${currentStep === 2 ? 'active' : ''}`}>Step 2</div>
      </div>
    );
  };

  return (
    <div className="register-form-container">
      {renderStepIndicator(step)}
      <form className="form" onSubmit={handleSubmit}>
        {step === 1 && (
          <>
            <h2 className="title" style={{ color: 'rgb(153, 65, 225)', fontSize: '20px' }}>
              EVENT ORGANIZER REGISTRATION - STEP 1
            </h2>
            <div className="form-group">
              <label htmlFor="organizerNAME">Name:</label>
              <input
                type="text"
                id="username"
                className="input"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerEMAIL">Email:</label>
              <input
                type="email"
                id="email"
                className="input"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="organizerPASSWORD">Password:</label>
              <input
                type="password"
                id="password"
                className="input"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="organizerREGNO">Registration Number:</label>
              <input
                type="text"
                id="organizerREGNO"
                className="input"
                name="organizerREGNO"
                value={formData.organizerREGNO}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerPHONE">Phone:</label>
              <input
                type="text"
                id="organizerPHONE"
                className="input"
                name="organizerPHONE"
                value={formData.organizerPHONE}
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="organizerNIC">NIC Number:</label>
              <input
                type="text"
                id="organizerNIC"
                name="organizerNIC"
                className="input"
                value={formData.organizerNIC}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLINE1">Address Line 1:</label>
              <input
                type="text"
                id="addressLINE1"
                name="addressLINE1"
                className="input"
                value={formData.addressLINE1}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="addressLINE2">Address Line 2:</label>
              <input
                type="text"
                id="addressLINE2"
                name="addressLINE2"
                className="input"
                value={formData.addressLINE2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="organizerCITY">City:</label>
              <input
                type="text"
                id="organizerCITY"
                name="organizerCITY"
                className="input"
                value={formData.organizerCITY}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleNextStep} className="submit">
              Next
            </button>
          </>
        )}
        {step === 2 && (
          <>
            <h2 style={{ color: 'rgb(153, 65, 225)', fontSize: '22px', marginTop: '20px' }}>
              EVENT ORGANIZER REGISTRATION - STEP 2
            </h2>
            <div className="agreement">
              <h3 style={{ color: 'black', marginBottom: '10px', fontSize: '20px' }}>Guidelines and Rules</h3>
              <ol>
                <li>
                  <strong>Account Registration:</strong>
                  <ul>
                    <li>Provide accurate and up-to-date information during the registration process.</li>
                    <li>Choose a strong and secure password to protect your account.</li>
                  </ul>
                </li>
                <li>
                  <strong>Event Listings:</strong>
                  <ul>
                    <li>Submit complete and accurate information about your events.</li>
                    <li>Include event details such as date, time, location, and ticket prices.</li>
                    <li>Upload high-quality images related to your event.</li>
                    <li>Ensure that your event complies with all legal requirements and regulations.</li>
                  </ul>
                </li>
                <li>
                  <strong>Ticket Sales:</strong>
                  <ul>
                    <li>Set fair and reasonable prices for your tickets.</li>
                    <li>Clearly state the terms and conditions of ticket sales, including refund and cancellation policies.</li>
                    <li>Prevent unauthorized resale or distribution of tickets.</li>
                  </ul>
                </li>
                <li>
                  <strong>Communication with Attendees:</strong>
                  <ul>
                    <li>Respond promptly and professionally to attendee inquiries and concerns.</li>
                    <li>Provide clear instructions and information about the event to attendees.</li>
                  </ul>
                </li>
                <li>
                  <strong>Event Cancellation or Changes:</strong>
                  <ul>
                    <li>In case of event cancellation or significant changes, promptly notify ticket holders and provide appropriate refund options.</li>
                  </ul>
                </li>
                <li>
                  <strong>Compliance with Laws and Regulations:</strong>
                  <ul>
                    <li>Ensure that your event and ticket sales comply with all applicable laws and regulations, including consumer protection laws and data privacy regulations.</li>
                  </ul>
                </li>
              </ol>
              <div className="form-group">
                <label htmlFor="organizerAGREED" style={{ paddingLeft: '15px', paddingTop: '25px' }}>
                  I agree to the guidelines and rules:
                </label>
                <input
                  style={{ marginLeft: '40px', marginTop: '-35px' }}
                  type="checkbox"
                  id="organizerAGREED"
                  name="organizerAGREED"
                  checked={formData.organizerAGREED}
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={handlePreviousStep} className="submit" style={{ marginRight: '15px', marginTop: '20px' }}>
                Previous
              </button>
              <button type="submit" className="submit">
                Register
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default RegistrationFormORG;
