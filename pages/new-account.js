import React, { useState, useEffect } from "react";
import { db } from "../firebase"; // Ensure the path is correct
import { collection, addDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

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
        cibilScore: "", // New field for CIBIL score
    });

    const [userEmail, setUserEmail] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
            } else {
                setUserEmail("");
            }
        });
        return unsubscribe;
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    };

    const handleGenerateSignInDetails = async () => {
        try {
            const docData = { ...formValues, userEmail, status: "pending" };
            const docRef = await addDoc(collection(db, "clients"), docData);
            console.log("Document written with ID: ", docRef.id);
            // Clear form after successful submission
            setFormValues({
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
                cibilScore: "",
            });
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div style={{ fontFamily: "sans-serif" }}>
            <div style={styles.page}>
                <div style={styles.container}>
                    <img
                        src="https://s3-alpha-sig.figma.com/img/9276/7575/8c205aa8560a614b8d34a06a056f545e?Expires=1719792000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cai7KTBtEEwU2-fy4qdz9kblexcgaORUw-usJqCn5QJqaRNGQZYs4nk73r-yxYGI2VaD-ye2WY9xbWf-8oPNbtH2W5-Ob6Eic1Ps38QYi8RZiqv8VeM1XjTXX798r~uojlrhiB0TEfSdEecEWsVWQTirfS~QxqRbhu34fxuVajpZWYBnzp4pP6cNaVyDmdC6CLHbjbFL3vvaWxdzzWa3ki2vP6yVK87Qbe-~vaOc4uvsWONog-ErjncfpdF8L59RZfS0u9yg92GhhSXcxyuFssblmkmFdziOBJbt-S2IG9sxQJYzaZ6sb~jpDAkac590HFpYJ0DrDu2W6PvHzs5QXg__"
                        alt="Logo"
                        style={styles.image}
                    />
                    <div style={styles.formContainer}>
                        <form style={styles.form}>
                            <div style={styles.formRow}>
                                <label
                                    style={{ ...styles.label, width: "20%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "40%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "40%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "50%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "25%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "25%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "100%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "30%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "40%" }}
                                >
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
                                <label
                                    style={{ ...styles.label, width: "30%" }}
                                >
                                    IFSC Code:
                                    <input
                                        type="text"
                                        name="ifscCode"
                                        value={formValues.ifscCode}
                                        onChange={handleInputChange}
                                        style={styles.input}
                                        placeholder="Please enter the IFSC Code"
                                    />
                                </label>
                            </div>
                            {/* New input for CIBIL Score */}
                            <div style={styles.formRow}>
                                <label
                                    style={{ ...styles.label, width: "30%" }}
                                >
                                    CIBIL Score:
                                    <input
                                        type="text"
                                        name="cibilScore"
                                        value={formValues.cibilScore}
                                        onChange={handleInputChange}
                                        style={styles.input}
                                        placeholder="Enter CIBIL Score"
                                    />
                                </label>
                            </div>
                            {/* Submit button */}
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
        fontFamily: "sans-serif",
    },
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30.87px",
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
    },
    form: {
        width: "1289.45px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        height: "549.87px",
    },
    formRow: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
    },
    label: {
        color: "black",
        fontWeight: "bold",
        display: "flex",
        flexDirection: "column",
        paddingRight: "5px",
        paddingLeft: "5px",
        textShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
    },
    input: {
        width: "100%",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "#6C819A",
        border: "none",
        color: "white",
        borderRadius: "20px",
        fontSize: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
        width: "197px",
        height: "50px",
    },
};

export default SignUpForm;
