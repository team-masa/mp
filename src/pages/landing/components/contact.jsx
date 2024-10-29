import React, { useState } from "react";
import { Search, Phone, Mail, FileText } from "lucide-react";
import Navbar from "../../../components/navbar";

const ContactContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, i.e. send data to an API
    console.log(formData);
  };

  return (
    <div className="bg-[#1F2029] min-h-screen">
      <Navbar />
      <div className="bg-[#282A3A] bg-opacity-90 w-full max-w-3xl p-6 sm:p-8 rounded shadow-md mx-auto">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-[#C69749] text-center">Help & Support</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#1F2029] p-4 sm:p-6 rounded border border-[#C69749]">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-[#C69749]">Contact Support</h2>
            <div className="flex items-center mb-3">
              <Phone className="mr-3 text-[#C69749] w-5 h-5" />
              <span className="text-[#C69749] text-sm sm:text-base">(233) 570 217 936</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-3 text-[#C69749] w-5 h-5" />
              <span className="text-[#C69749] text-sm sm:text-base">teammasa00@gmail.com</span>
            </div>
          </div>
          <div className="bg-[#1F2029] p-4 sm:p-6 rounded border border-[#C69749]">
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-[#C69749]">Documentation</h2>
            <button className="flex items-center text-[#C69749] text-sm sm:text-base hover:text-[#735F32] transition-colors duration-300">
              <FileText className="mr-3 w-5 h-5" />
              View Documentation
            </button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-[#C69749]">Suggest Changes or Ask Questions</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-[#C69749] mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-[#C69749] rounded bg-[#1F2029] text-[#C69749] focus:outline-none focus:ring-2 focus:ring-[#735F32]"
                required
              />
            </div>
            <div>
              <label className="block text-[#C69749] mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-[#C69749] rounded bg-[#1F2029] text-[#C69749] focus:outline-none focus:ring-2 focus:ring-[#735F32]"
                required
              />
            </div>
            <div>
              <label className="block text-[#C69749] mb-2" htmlFor="message">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 sm:p-4 border border-[#C69749] rounded bg-[#1F2029] text-[#C69749] focus:outline-none focus:ring-2 focus:ring-[#735F32]"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#735F32] text-white text-lg rounded hover:bg-[#C69749] transition-colors duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
