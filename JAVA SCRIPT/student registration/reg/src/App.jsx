import { useState } from "react";

export default function StudentRegistrationForm() {
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    password: "",
    course: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    if (
      !formData.studentName ||
      !formData.email ||
      !formData.password ||
      !formData.course ||
      !formData.mobileNumber
    ) {
      alert("Please fill in all fields.");
      return;
    }
    alert(`Registered Successfully!\nName: ${formData.studentName}\nEmail: ${formData.email}`);
  };

  const pageStyle = {
    minHeight: "100vh",
    backgroundColor: "#f0f0f0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Segoe UI, sans-serif",
  };

  const formContainerStyle = {
    backgroundColor: "#ffffff",
    padding: "40px 36px",
    borderRadius: "12px",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.12)",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  const headingStyle = {
    margin: "0 0 6px 0",
    fontSize: "22px",
    fontWeight: "bold",
    textAlign: "center",
    color: "#1a1a2e",
  };

  const fieldStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  const labelStyle = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#444",
  };

  const inputStyle = {
    width: "100%",
    padding: "11px 14px",
    border: "1px solid #cccccc",
    borderRadius: "8px",
    fontSize: "15px",
    boxSizing: "border-box",
    color: "#333",
    outline: "none",
  };

  const buttonStyle = {
    width: "100%",
    padding: "13px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "6px",
  };

  return (
    <div style={pageStyle}>
      <div style={formContainerStyle}>
        <h2 style={headingStyle}>Student Registration Form</h2>

        <div style={fieldStyle}>
          <label style={labelStyle}>Student Name</label>
          <input
            style={inputStyle}
            type="text"
            name="studentName"
            placeholder="Enter your full name"
            value={formData.studentName}
            onChange={handleChange}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Email</label>
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Password</label>
          <input
            style={inputStyle}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Course</label>
          <input
            style={inputStyle}
            type="text"
            name="course"
            placeholder="Enter your course"
            value={formData.course}
            onChange={handleChange}
          />
        </div>

        <div style={fieldStyle}>
          <label style={labelStyle}>Mobile Number</label>
          <input
            style={inputStyle}
            type="tel"
            name="mobileNumber"
            placeholder="Enter your mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
          />
        </div>

        <button style={buttonStyle} onClick={handleRegister}>
          Register
        </button>
      </div>
    </div>
  );
}