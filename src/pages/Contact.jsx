import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [formErrors, setFormErrors] = useState({
    fullName: false,
    subject: false,
    email: false,
    body: false,
  })

  function handleChange(e) {
    setForm(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const fieldLengths = {
    fullName: 3,
    subject: 5,
    email: 0,
    body: 10,
  };
  
function validateForm(form, setFormErrors) {
  let isValid = true;
  const emailPattern = /\S+@\S+\.\S+/;

  Object.keys(form).forEach((key) => {
    if (form[key].length < fieldLengths[key]) {
      setFormErrors((prevState) => ({
        ...prevState,
        [key]: true,
      }));
      isValid = false;
    } else {
      setFormErrors((prevState) => ({
        ...prevState,
        [key]: false,
      }));
    }

    if (key === "email" && !emailPattern.test(form[key])) {
      setFormErrors((prevState) => ({
        ...prevState,
        [key]: true,
      }));
      isValid = false;
    }
  });

  return isValid;
}

  function handleSubmit(e) {
    e.preventDefault();
    if (validateForm(form, setFormErrors)) {
      setFormErrors({
        fullName: false,
        subject: false,
        email: false,
        body: false,
      });
      console.log(form)
    }
  }

  return (
    <div className="container contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
          />
          {formErrors.fullName && (
            <p className="error">{`Name requires a minimum of ${fieldLengths.fullName} characters.`}</p>
          )}
        </div>
        <div>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
          />
          {formErrors.subject && (
            <p className="error">{`Subject requires a minimum of ${fieldLengths.subject} characters.`}</p>
          )}
        </div>
        <div>
          <label htmlFor="subject">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
          {formErrors.email && <p className="error">Email is not valid</p>}
        </div>
        <div>
          <textarea
            type="text"
            name="body"
            id="body"
            cols="30"
            rows="10"
            value={form.body}
            onChange={handleChange}
          />
          {formErrors.body && (
            <p className="error">{`Body requires a minimum of ${fieldLengths.body} characters.`}</p>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
}