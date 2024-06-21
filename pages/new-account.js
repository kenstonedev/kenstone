"use client";

import React, { useState } from "react";

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    title: "",
    fullName: "",
    phoneNumber: "",
    homeAddress: "",
    emailId: "",
    panNumber: "",
    aadharNumber: "",
    bankName: "",
    bankBranch: "",
    ifscCode: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleGenerateSignInDetails = () => {
    // TO DO: Implement logic to generate sign in details
    console.log("Generate sign in details clicked");
  };

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <div style={styles.page}>
        <div style={styles.container}>
          <img
            src="https://s3-alpha-sig.figma.com/img/9276/7575/8c205aa8560a614b8d34a06a056f545e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cai7KTBtEEwU2-fy4qdz9kblexcgaORUw-usJqCn5QJqaRNGQZYs4nk73r-yxYGI2VaD-ye2WY9xbWf-8oPNbtH2W5-Ob6Eic1Ps38QYi8RZiqv8VeM1XjTXX798r~uojlrhiB0TEfSdEecEWsVWQTirfS~QxqRbhu34fxuVajpZWYBnzp4pP6cNaVyDmdC6CLHbjbFL3vvaWxdzzWa3ki2vP6yVK87Qbe-~vaOc4uvsWONog-ErjncfpdF8L59RZfS0u9yg92GhhSXcxyuFssblmkmFdziOBJbt-S2IG9sxQJYzaZ6sb~jpDAkac590HFpYJ0DrDu2W6PvHzs5QXg__" // Replace with your image path
            alt="Logo"
            style={styles.image}
          />
          <div style={styles.formContainer}>
            <form style={styles.form}>
              <div style={styles.formRow}>
                <label style={{ ...styles.label, width: "20%" }}>
                  Title:
                  <select
                    name="title"
                    value={formValues.title}
                    onChange={handleInputChange}
                    style={styles.input}
                  >
                    <option value="">Mr/Mrs/Ms</option>
                    <option value="Mr">Mr</option>
                    <option value="Mrs">Mrs</option>
                    <option value="Ms">Ms</option>
                  </select>
                </label>
                <label style={{ ...styles.label, width: "40%" }}>
                  Full Name:
                  <input
                    type="text"
                    name="fullName"
                    value={formValues.fullName}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter Full Name"
                  />
                </label>
                <label style={{ ...styles.label, width: "40%" }}>
                  Email - ID:
                  <input
                    type="email"
                    name="emailId"
                    value={formValues.emailId}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter the e-mail address"
                  />
                </label>
              </div>
              <div style={styles.formRow}>
                <label style={{ ...styles.label, width: "50%" }}>
                  Phone Number:
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formValues.phoneNumber}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter the Phone Number"
                  />
                </label>
                <label style={{ ...styles.label, width: "25%" }}>
                  Aadhar Number:
                  <input
                    type="text"
                    name="aadharNumber"
                    value={formValues.aadharNumber}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter the Aadhar Number"
                  />
                </label>
                <label style={{ ...styles.label, width: "25%" }}>
                  Pan Number:
                  <input
                    type="text"
                    name="panNumber"
                    value={formValues.panNumber}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter the Pan Number"
                  />
                </label>
              </div>
              <div style={styles.formRow}>
                <label style={{ ...styles.label, width: "100%" }}>
                  Home Address:
                  <input
                    type="text"
                    name="homeAddress"
                    value={formValues.homeAddress}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter the Full Address"
                  />
                </label>
              </div>
              <div style={styles.formRow}>
                <label style={{ ...styles.label, width: "30%" }}>
                  Bank Name:
                  <input
                    type="text"
                    name="bankName"
                    value={formValues.bankName}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter the Bank Name"
                  />
                </label>
                <label style={{ ...styles.label, width: "40%" }}>
                  Bank Branch:
                  <input
                    type="text"
                    name="bankBranch"
                    value={formValues.bankBranch}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="Please enter the Branch Name"
                  />
                </label>
                <label style={{ ...styles.label, width: "30%" }}>
                  IFSC Code:
                  <input
                    type="text"
                    name="ifscCode"
                    value={formValues.ifscCode}
                    onChange={handleInputChange}
                    style={styles.input}
                    placeholder="please enter the IFSC Code"
                  />
                </label>
              </div>
              <button
                type="button"
                onClick={handleGenerateSignInDetails}
                style={styles.button}
              >
                Generate Sign In Details
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "white",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif", // Change to a regular 400 weight font
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "30.87px",
    fontFamily: "sans-serif", // Inherit the font from parent (page)
  },
  image: {
    width: "290.53px",
    height: "113.16px",
    marginBottom: "20px",
  },
  formContainer: {
    backgroundColor: "#FFFFFF",
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontFamily: "sans-serif", // Inherit the font from parent (container)
  },
  formTitle: {
    marginBottom: "30px",
    fontFamily: "sans-serif", // Inherit the font from parent (formContainer)
  },
  form: {
    width: "1289.45px",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    fontFamily: "sans-serif", // Inherit the font from parent (formContainer)
    height: "549.87px",
  },
  formRow: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    fontFamily: "sans-serif", // Inherit the font from parent (formContainer)
  },
  label: {
    color: "black",
    fontWeight: "bold",
    display: "flex",
    flexDirection: "column",
    paddingRight: "5px",
    paddingLeft: "5px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    fontFamily: "sans-serif", // Inherit the font from parent (formContainer)
  },
  input: {
    width: "100%",
    padding: "10px",
    boxSizing: "border-box",
    backgroundColor: "#6C819A",
    border: "none",
    color: "white",
    borderRadius: "20px",
    fontFamily: "sans-serif", // Inherit the font from parent (formContainer)
    fontSize: "12px", // Default font size for input fields
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Box shadow added
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    fontSize: "10px",
    cursor: "pointer",
    backgroundColor: "#023A51",
    color: "white",
    border: "none",
    borderRadius: "50px",
    fontFamily: "sans-serif", // Inherit the font from parent (formContainer)
    fontWeight: "normal", // Ensure normal weight (400) is used
    width: "197px",
    height: "50px",
    alignContent: "center",
    alignSelf: "center",
  },
};

export default SignUpForm;
