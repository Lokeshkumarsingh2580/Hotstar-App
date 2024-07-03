import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="contact-us-page bg-[#1F1E24] text-white p-6 min-h-screen">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
        <p className="text-lg mb-4">
          If you have any questions, feedback, or need assistance, please feel
          free to reach out to us. Fill out the form below and our support team
          will get back to you as soon as possible.
        </p>
        <form
          onSubmit={handleSubmit}
          className="bg-[#2C2C34] p-6 rounded-lg shadow-md"
        >
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#1F1E24] text-white border border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#1F1E24] text-white border border-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 rounded bg-[#1F1E24] text-white border border-gray-700"
              rows="5"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
