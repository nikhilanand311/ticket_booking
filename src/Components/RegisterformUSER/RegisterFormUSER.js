import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const styles = {
  registerall: {
    display: 'flex',
    justifyContent: 'center',
  },
  registerform: {
    // Add styles if needed
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '100%',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '20px',
    position: 'relative',
  },
  title: {
    fontSize: '28px',
    color: 'rgb(153, 65, 225)',
    fontWeight: 600,
    letterSpacing: '-1px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '30px',
    marginBottom: '0px',
  },
  message: {
    color: 'rgba(88, 87, 87, 0.822)',
    fontSize: '14px',
  },
  input: {
    width: '100%',
    padding: '10px 10px 20px 10px',
    outline: 0,
    border: '1px solid rgba(105, 105, 105, 0.397)',
    borderRadius: '10px',
  },
  submit: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'rgb(164, 65, 225)',
    padding: '10px',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  signin: {
    textAlign: 'center',
  },
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    customerPHONE: '',
    customerNIC: '',
  });

  const isNICValid = (nic) => nic.length >= 9 && nic.length <= 12 && !isNaN(nic);
  const isPhoneValid = (phone) => phone.length === 10 && !isNaN(phone);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isNICValid(formData.customerNIC)) {
      swal('Error', 'NIC should be between 9 to 12 digits.', 'error');
      return;
    }

    if (!isPhoneValid(formData.customerPHONE)) {
      swal('Error', 'Phone number should be exactly 10 digits.', 'error');
      return;
    }

    const postData = {
      user: {
        username: formData.username,
        email: formData.email,
        password: formData.password,
        role: 'CUSTOMER',
      },
      customerPHONE: formData.customerPHONE,
      customerNIC: formData.customerNIC,
    };

    axios
      .post('http://localhost:8000/api/customer-profiles/', postData)
      .then((response) => {
        swal('Success', 'Registration successful!', 'success');
        navigate('/loginu'); // Navigate after successful registration
      })
      .catch((error) => {
        console.error('Error:', error);
        swal('Error', 'Registration failed. Please try again.', 'error');
      });
  };

  return (
    <div style={styles.registerall}>
      <div style={styles.registerform}>
        <form style={styles.form} onSubmit={handleSubmit}>
          <p style={styles.title}>REGISTER</p>
          <p style={styles.message}>Signup now and get full access to our app.</p>

          {['username', 'email', 'password', 'customerNIC', 'customerPHONE'].map((field) => (
            <label key={field}>
              <input
                required
                type={field === 'email' ? 'email' : field === 'password' ? 'password' : 'text'}
                style={styles.input}
                name={field}
                value={formData[field]}
                onChange={handleChange}
              />
              <span>{field.charAt(0).toUpperCase() + field.slice(1)}</span>
            </label>
          ))}

          <button style={styles.submit} type="submit">
            Submit
          </button>
          <p style={styles.signin}>
            Already have an account? <a href="#">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
