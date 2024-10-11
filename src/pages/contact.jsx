import React, { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 3) newErrors.name = "Name must be at least 3 characters long.";
    if (formData.subject.length < 3) newErrors.subject = "Subject must be at least 3 characters long.";
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Email is invalid.";
    if (formData.message.length < 3) newErrors.message = "Message must be at least 3 characters long.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length === 0) {
      console.log("Form Data:", formData);
      setSuccessMessage("Message sent. You'll hear from us shortly!");
      setFormData({
        name: "",
        subject: "",
        email: "",
        message: ""
      });
      setErrors({});
    } else {
      setErrors(newErrors);
      setSuccessMessage("");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  return (
    <div className="flex flex-column justify-center">
      <div className="border-2 border-stone-400 w-5/6 md:w-3/4 lg:w-1/2 rounded-md p-5">
        <h1 className="text-center mb-2">Contact us using this form!</h1>
        
        {successMessage && <p className="text-green-500 text-center">{successMessage}</p>}

        <form className="flex flex-col gap-0.5" onSubmit={handleSubmit}>
          
          <label htmlFor="name">Full name: </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 border-stone-400 rounded-md px-2 py-1"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500">{errors.name}</p>}

          <label htmlFor="subject">Subject: </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="border-2 border-stone-400 rounded-md px-2 py-1"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && <p className="text-red-500">{errors.subject}</p>}

          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            className="border-2 border-stone-400 rounded-md px-2 py-1"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}

          <label htmlFor="message">Message: </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="border-2 border-stone-400 rounded-md px-2 py-1"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <p className="text-red-500">{errors.message}</p>}

          <input
            type="submit"
            value="Submit"
            className="mt-3 px-2 py-2 bg-cyan-400 rounded-md w-3/4 mx-auto"
          />
        </form>
      </div>
    </div>
  );
}
