import React, { Component } from "react";
import ContactBox from "../Components/ContactBox";
import ac from "../assets/ac.jpg";

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      mobile: "",
      problem: "",
      emailError: ""
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "name" || name === "problem"){
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    if (name === "mobile"){
      if (!/^[0-9]*$/.test(value)) return;
    }   
    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) {
        this.setState({ emailError: "Please enter a valid email address" });
      } else {
        this.setState({ emailError: "" });
      }
    }

    this.setState({ [name]: value });
  };

  isFormValid = () => {
    const { name, email, mobile } = this.state;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      name.trim() !== "" &&
      emailPattern.test(email) &&
      mobile.length === 10
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!this.isFormValid()) {
      alert("Please fill all details correctly");
      return;
    }

    alert("Form submitted successfully!");

    this.setState({
      name: "",
      email: "",
      mobile: "",
      problem: "",
      emailError: ""
    });
  };

  render() {
    const { name, email, mobile, problem, emailError } = this.state;

    return (
      <div className="main">
        <div className="left">
          <div className="card">
            <h1 className="title">PLM Service Centre - Contact</h1>
            <p>We Provide repair services 24 / 7, include Door Step Service</p>

            <div className="service-row">
              <p>
                <strong>Get some help.</strong> - Call the Help Line appliance
                repair experts at +91-9080511494 or Submit the below form and we
                will call back within a day.
              </p>

              <img src={ac} alt="Air conditioner" />
            </div>

            <div className="service-form">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
              />

              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />

              {emailError && (
                <p style={{ color: "red", fontSize: "12px" }}>
                  {emailError}
                </p>
              )}

              <input
                type="text"
                placeholder="Mobile"
                name="mobile"
                maxLength={10}
                value={mobile}
                onChange={this.handleChange}
              />

              <textarea
                placeholder="Description of Problem..."
                name="problem"
                value={problem}
                onChange={this.handleChange}
              />

              <button
                className="btn"
                onClick={this.handleSubmit}
                disabled={!this.isFormValid()}
              >
                SUBMIT
              </button>
            </div>

            <div>
              <h2 className="title">
                For More information For Direct Visit, Estimate, Repair Services.
              </h2>
              <p>
                If you are searching for “Home appliances service near me”, we
                are just one call away!
              </p>
              <p>
                <strong>WhatsApp / call - 9342232571 / 9344600166</strong>
              </p>
            </div>
          </div>
        </div>

        <ContactBox />
      </div>
    );
  }
}
