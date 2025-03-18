import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ChevronDown, Mail, MessageCircle, PhoneCall, HelpCircle, Sparkles } from "lucide-react";

const faqs = [
    {
      question: "How do I register to vote?",
      answer: "Register online through the Voter Portal using your government-issued ID.",
    },
    {
      question: "Can I vote without a voter ID?",
      answer: "Some states allow voting without an ID. Check local regulations for clarity.",
    },
    {
      question: "What if I recently changed my address?",
      answer: "Update your address through the Voter Portal to ensure correct voting location.",
    },
    {
      question: "When is the next election?",
      answer: "Check upcoming election dates on our 'Election Calendar' page.",
    },
    {
      question: "How do I check my voter status?",
      answer: "Use our 'Check Status' tool to verify your voter registration details.",
    },
  ];

export default function HelpSupport() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-8 md:p-16 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#121212] text-white">
      {/* FAQ Section */}
      <div className="col-span-1 lg:col-span-2">
        <h1 className="text-5xl font-extrabold bg-white bg-clip-text text-transparent mb-8">
          How Can We Assist You?
        </h1>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h2 className="text-xl font-semibold">{faq.question}</h2>
                <ChevronDown className={`w-6 h-6 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
              </div>
              {openIndex === index && (
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Contact & Support Options */}
      <div className="space-y-8">
        {/* Redesigned Contact Form */}
        <div className="bg-[#1e1e1e] p-8 rounded-2xl shadow-xl relative overflow-hidden">
  <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2 text-white">
    <Sparkles className="text-[#FFD166] w-10 h-10 mr-2" /> Need More Support?
  </h2>

  <p className="mb-4 text-gray-300 leading-relaxed">
    Our team is ready to assist you with any questions or issues. Submit your request and we’ll respond promptly!
  </p>

  <form className="space-y-6 relative z-10">
    {/* Name Input */}
    <div className="relative">
      <Input
        type="text"
        placeholder="Enter your name"
        required
        className="bg-[#2C2F42] border border-transparent text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-[#5A96E3] transition-all w-full py-3 px-4"
      />
    </div>

    {/* Email Input */}
    <div className="relative">
      <Input
        type="email"
        placeholder="Enter your email"
        required
        className="bg-[#2C2F42] border border-transparent text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-[#5A96E3] transition-all w-full py-3 px-4"
      />
    </div>

    {/* Issue Description */}
    <div className="relative">
      <Textarea
        placeholder="Describe your issue in detail..."
        rows={5}
        required
        className="bg-[#2C2F42] border border-transparent text-white placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-[#5A96E3] transition-all text-md w-full py-3 px-4"
      />
    </div>

    {/* Submit Button */}
    <Button className="w-full bg-[#5A96E3] hover:bg-[#7D67D2] transition-all text-white font-semibold py-6 text-md rounded-xl shadow-lg">
      Send Request
    </Button>
  </form>
</div>



        {/* Support Options */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-4 px-6 py-3 rounded-xl bg-[#1e1e1e] transition duration-300 shadow-md">
            <Mail className="w-5 h-5 text-yellow-400" /> Email Support
          </button>
          <button className="flex items-center gap-4 px-6 py-3 rounded-xl bg-[#1e1e1e] transition duration-300 shadow-md">
            <MessageCircle className="w-5 h-5 text-green-400" /> Live Chat
          </button>
          <button className="flex items-center gap-4 px-6 py-3 rounded-xl bg-[#1e1e1e] transition duration-300 shadow-md">
            <PhoneCall className="w-5 h-5 text-blue-400" /> Call Us
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="flex items-center gap-2 text-pink-400 hover:underline">
              <HelpCircle /> Voter Guide
            </a>
            <a href="#" className="flex items-center gap-2 text-yellow-400 hover:underline">
              <HelpCircle /> Polling Station
            </a>
            <a href="#" className="flex items-center gap-2 text-green-400 hover:underline">
              <HelpCircle /> ID Requirements
            </a>
            <a href="#" className="flex items-center gap-2 text-blue-400 hover:underline">
              <HelpCircle /> Update Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
