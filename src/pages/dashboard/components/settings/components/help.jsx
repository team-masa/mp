import React, { useState} from 'react';
import { Search, Phone, Mail, FileText,  ChevronUp, ChevronDown } from 'lucide-react';
const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-[#C69749] py-2">
        <button
          className="flex justify-between items-center w-full text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-[#C69749] text-sm">{question}</span>
          {isOpen ? <ChevronUp className="text-[#C69749] w-4 h-4" /> : <ChevronDown className="text-[#C69749] w-4 h-4" />}
        </button>
        {isOpen && <p className="mt-2 text-white text-sm">{answer}</p>}
      </div>
    );
  };
  
  const Help = () => {
    const faqs = [
      { question: "How do I create an account?", answer: "Click 'Sign Up' on the homepage, enter your details, and verify your email." },
      { question: "How can I reset my password?", answer: "Click 'Forgot Password' on the login page and follow the instructions sent to your email." },
      { question: "How do I join a group?", answer: "Navigate to the group's page and click 'Join'. Some groups may require approval." },
    ];
  
    return (
      <div className="bg-[#282A3A] bg-opacity-80 max-w-3xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#735F32]">Help & Support</h1>
        
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help..."
              className="w-full p-2 pl-8 text-sm border border-[#C69749] rounded bg-[#282A3A] text-white focus:outline-none focus:ring-1 focus:ring-[#735F32]"
            />
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#C69749] w-4 h-4" />
          </div>
        </div>
  
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-[#282A3A] p-3 rounded border border-[#C69749]">
            <h2 className="text-lg font-semibold mb-2 text-[#735F32]">Contact Support</h2>
            <div className="flex items-center mb-1">
              <Phone className="mr-2 text-[#C69749] w-4 h-4" />
              <span className="text-white text-sm">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center">
              <Mail className="mr-2 text-[#C69749] w-4 h-4" />
              <span className="text-white text-sm">support@example.com</span>
            </div>
          </div>
          <div className="bg-[#282A3A] p-3 rounded border border-[#C69749]">
            <h2 className="text-lg font-semibold mb-2 text-[#735F32]">Documentation</h2>
            <button className="flex items-center text-white text-sm hover:text-[#C69749] transition-colors duration-300">
              <FileText className="mr-2 w-4 h-4" />
              View Documentation
            </button>
          </div>
        </div>
  
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3 text-[#735F32]">FAQ</h2>
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
  
        <div className="text-center">
          <p className="text-[#C69749] text-sm mb-2">Still need help?</p>
          <button className="px-4 py-2 bg-[#735F32] text-white text-sm rounded hover:bg-[#C69749] transition-colors duration-300">
            Contact Us
          </button>
        </div>
      </div>
    );
  };

  export default Help