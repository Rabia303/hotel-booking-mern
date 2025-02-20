import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate

const Room_Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
  });

  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigation

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); 
    setSuccessMessage(""); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.checkIn || !formData.checkOut || !formData.guests) {
      setError("Please fill all the fields before booking.");
      return;
    }
    setSuccessMessage("Booking Successful! Your room has been reserved.");

    // Delay navigation to show success message
    setTimeout(() => {
      navigate("/confirmation"); // Navigate to confirmation page
    }, 1500);
  };

  return (
    <div style={styles.pageWrapper}>
      {successMessage && <div style={styles.successBox}>{successMessage}</div>}
      <div className="section big-55-height over-hide z-bigger">
        <div className="parallax parallax-top" style={{ backgroundImage: 'url("./src/assets/img/1.jpg")' }} />
        <div className="dark-over-pages" />
        <div className="hero-center-section pages">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 parallax-fade-top">
                <div className="hero-text">Room Details</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          <div style={styles.roomDetails}>
            <h2 style={styles.heading}>Your Room</h2>
            <img src="room-image.jpg" alt="Room" style={styles.image} />
            <p style={styles.roomTitle}>Luxury Super Deluxe</p>
            <ul style={styles.roomInfo}>
              <li>30 sq ft</li>
              <li>3 Guests</li>
              <li>3 Beds</li>
              <li>City View</li>
            </ul>
          </div>

          <div style={styles.bookingForm}>
            <h2 style={styles.heading}>Book Your Stay</h2>
            <form onSubmit={handleSubmit} style={styles.form}>
              <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} style={styles.input} />
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={styles.input} />
              <input type="date" name="checkIn" value={formData.checkIn} onChange={handleChange} style={styles.input} />
              <input type="date" name="checkOut" value={formData.checkOut} onChange={handleChange} style={styles.input} />
              <input type="number" name="guests" placeholder="Guests" value={formData.guests} onChange={handleChange} style={styles.input} min="1" />
              {error && <p style={styles.error}>{error}</p>}
              <Link to="/confirmation"><button type="submit" style={styles.button}>Book Now</button></Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageWrapper: {
    backgroundColor: "#1a1a1a",
    color: "white",
    fontFamily: "Arial, sans-serif",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    padding: "120px 20px",
    position: "relative",
  },
  container: {
    backgroundColor: "#2c2c2c",
    padding: "40px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(255, 255, 255, 0.2)",
    maxWidth: "900px",
    width: "100%",
    textAlign: "center",
    marginTop: "20px",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    justifyContent: "space-between",
  },
  roomDetails: {
    textAlign: "left",
    width: "50%",
  },
  bookingForm: {
    textAlign: "left",
    width: "50%",
  },
  heading: {
    fontSize: "22px",
    marginBottom: "20px",
    borderBottom: "2px solid white",
    paddingBottom: "10px",
  },
  image: {
    width: "100%",
    borderRadius: "10px",
    marginBottom: "20px",
  },
  roomTitle: {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  roomInfo: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
    color: "#ccc",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginTop: "20px",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#444",
    color: "white",
    outline: "none",
  },
  error: {
    color: "red",
    fontSize: "14px",
    marginBottom: "10px",
  },
  successBox: {
    backgroundColor: "#28a745",
    color: "white",
    padding: "15px",
    borderRadius: "5px",
    position: "absolute",
    top: "20px",
    left: "50%",
    transform: "translateX(-50%)",
    fontSize: "18px",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    padding: "16px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "white",
    color: "black",
    fontSize: "20px",
    cursor: "pointer",
  },
};

export default Room_Booking;
