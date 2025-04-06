// Help.jsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  ChevronDown,
  Mail,
  MessageCircle,
  PhoneCall,
  HelpCircle,
  Sparkles,
  X,
} from "lucide-react";
import SearchPage from "../searchPage/Search.jsx";
import axios from "axios";
import ReactMarkdown from "react-markdown";

const faqs = [
  {
    question: "How do I register to vote?",
    answer:
      "Register online through the Voter Portal using your government-issued ID.",
  },
  {
    question: "Can I vote without a voter ID?",
    answer:
      "Some states allow voting without an ID. Check local regulations for clarity.",
  },
  {
    question: "What if I recently changed my address?",
    answer:
      "Update your address through the Voter Portal to ensure correct voting location.",
  },
  {
    question: "When is the next election?",
    answer: "Check upcoming election dates on our 'Election Calendar' page.",
  },
  {
    question: "How do I check my voter status?",
    answer:
      "Use our 'Check Status' tool to verify your voter registration details.",
  },
];

const RaiseIssue = () => {
  const [formData, setFormData] = useState({
    epic: "",
    name: "",
    email: "",
    issue: "",
  });
  const [loading, setLoading] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showGeminiModal, setShowGeminiModal] = useState(false);
  const [geminiResponse, setGeminiResponse] = useState("");

  const API = import.meta.env.VITE_API_URL;
  const API_BASE_URL = `${API}/api`;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1: Call backend to review the issue via Gemini
  const handleGeminiReview = async () => {
    setLoading(true);
    setMessage("");
    try {
      // Send the form data with confirm flag set to false.
      const response = await axios.post(`${API_BASE_URL}/issues`, {
        ...formData,
        confirm: false,
      });
      setGeminiResponse(response.data.geminiResponse);
      setShowGeminiModal(true);
    } catch (error) {
      setMessage("Failed to review your issue with Gemini. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  // Step 2: If the user confirms, submit the issue officially.
  const handleConfirmSubmit = async () => {
    setConfirmLoading(true);
    try {
      const response = await axios.post(`${API_BASE_URL}/issues`, {
        ...formData,
        confirm: true,
      });
      setMessage(response.data.message);
      setFormData({ epic: "", name: "", email: "", issue: "" });
      setShowGeminiModal(false);
    } catch (error) {
      setMessage("Failed to submit issue. Please try again.");
    } finally {
      setConfirmLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-[#1e1e1e] p-8 rounded-2xl shadow-xl relative overflow-hidden">
        <h2 className="text-3xl font-extrabold mb-4 flex items-center gap-2 text-white">
          <Sparkles className="text-[#FFD166] w-10 h-10 mr-2" /> Raise Your
          Issue
        </h2>
        <p className="mb-4 text-gray-300 leading-relaxed">
          Our team is ready to assist you with any questions or issues. Submit
          your request and we’ll respond promptly!
        </p>
        <form>
          <input
            type="text"
            name="epic"
            placeholder="Enter your EPIC"
            value={formData.epic}
            onChange={handleChange}
            className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
            required
          />
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
            required
          />
          <textarea
            name="issue"
            placeholder="Describe your issue in detail..."
            value={formData.issue}
            onChange={handleChange}
            className="w-full p-2 mb-3 bg-gray-800 border border-gray-700 rounded"
            required
          />
          {/* Animated Gradient Button with fixed design */}
          <Button
            type="button"
            onClick={handleGeminiReview}
            disabled={loading}
            className="w-full rounded-full p-2 text-black gradient-animate"
          >
            {loading ? "Processing..." : "Review with Gemini"}
          </Button>
        </form>
        {message && <p className="mt-3 text-sm text-center">{message}</p>}
      </div>

      {/* Gemini Chatbot Response Modal with fixed dimensions and scrollable content */}
      <Dialog
        open={showGeminiModal}
        onOpenChange={(open) => !open && setShowGeminiModal(false)}
      >
        <DialogContent className="bg-[#1e1e1e] text-white border-none shadow-2xl rounded-lg p-6">
          <DialogTitle className="text-2xl font-extrabold">
            Gemini Chatbot Response
          </DialogTitle>
          <div className="mt-4 text-gray-300 prose prose-invert max-h-80 overflow-y-auto">
            <ReactMarkdown>{geminiResponse}</ReactMarkdown>
          </div>
          <DialogFooter className="mt-6 flex gap-4">
            <Button
              variant="outline"
              onClick={handleConfirmSubmit}
              disabled={confirmLoading}
            >
              {confirmLoading ? "Submitting..." : "Confirm Submission"}
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowGeminiModal(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Custom CSS for Animated Gradient */}
      <style jsx>{`
        @keyframes gradientAnimation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .gradient-animate {
          background: linear-gradient(90deg, #8c52ff, #5ce1e6);
          background-size: 200% 200%;
          animation: gradientAnimation 5s ease infinite;
        }
      `}</style>
    </div>
  );
};

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="p-8 md:p-16 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 bg-[#121212] text-white">
        {/* FAQ Section */}
        <div className="col-span-1 lg:col-span-2">
          <SearchPage />
          <h1 className="text-5xl font-extrabold bg-white bg-clip-text text-transparent mb-8">
            How Can We Assist You?
          </h1>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#1e1e1e] p-6 rounded-xl shadow-lg hover:shadow-xl transition-transform duration-300"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between cursor-pointer">
                  <h2 className="text-xl font-semibold">{faq.question}</h2>
                  <ChevronDown
                    className={`w-6 h-6 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openIndex === index && (
                  <p className="mt-4 text-gray-300">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* RaiseIssue Section */}
        <RaiseIssue />
        {/* Support Options */}
        <div className="flex flex-col gap-4">
          <button className="flex items-center gap-4 px-6 py-3 rounded-xl bg-[#1e1e1e] transition duration-300 shadow-md">
            <Mail className="w-5 h-5 text-[#facc15]" /> Email Support
          </button>
          <button className="flex items-center gap-4 px-6 py-3 rounded-xl bg-[#1e1e1e] transition duration-300 shadow-md">
            <MessageCircle className="w-5 h-5 text-[#22c55e]" /> Live Chat
          </button>
          <button className="flex items-center gap-4 px-6 py-3 rounded-xl bg-[#1e1e1e] transition duration-300 shadow-md">
            <PhoneCall className="w-5 h-5 text-[#3b82f6]" /> Call Us
          </button>
        </div>
        {/* Quick Links */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <a
              href="#"
              className="flex items-center gap-2 text-[#ec4899] hover:underline"
            >
              <HelpCircle /> Voter Guide
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[#facc15] hover:underline"
            >
              <HelpCircle /> Polling Station
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[#22c55e] hover:underline"
            >
              <HelpCircle /> ID Requirements
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[#3b82f6] hover:underline"
            >
              <HelpCircle /> Update Info
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
