// Request.jsx
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  X,
  Calendar,
  Filter,
  ChevronDown,
  ChevronUp,
  Hash,
  User,
  Mail,
  AlertTriangle,
} from "lucide-react";
import axios from "axios";

// MultiSelect component for filtering by classification type
function MultiSelect({ options, selectedValues, onChange, placeholder, icon }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full md:w-1/3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left p-2 border rounded bg-[#0f3460] flex items-center gap-2 overflow-hidden"
      >
        {icon}
        <div className="flex-1 flex gap-2 overflow-x-auto">
          {selectedValues.length ? (
            selectedValues.map((val) => (
              <span key={val} className="bg-[#252525] px-2 py-1 rounded-full text-sm flex items-center gap-1">
                {val}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onChange(selectedValues.filter((v) => v !== val));
                  }}
                >
                  <X className="w-3 h-3" />
                </button>
              </span>
            ))
          ) : (
            <span className="text-gray-400">{placeholder}</span>
          )}
        </div>
        {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
      </button>
      {open && (
        <div className="absolute mt-1 w-full bg-[#1e1e1e] p-2 rounded shadow-lg z-50 max-h-60 overflow-y-auto">
          {options.map((option) => (
            <label key={option} className="flex items-center gap-2 p-1 hover:bg-[#252525] rounded cursor-pointer">
              <input
                type="checkbox"
                checked={selectedValues.includes(option)}
                onChange={(e) => {
                  if (e.target.checked) onChange([...selectedValues, option]);
                  else onChange(selectedValues.filter((v) => v !== option));
                }}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}

// Compute classification from the detailed issue text
const classifyIssue = (text) => {
  const lower = text.toLowerCase();
  if (lower.includes("slot")) return "Slot Allocation";
  if (lower.includes("id correction") || lower.includes("voter id")) return "ID Correction";
  if (lower.includes("address") || lower.includes("mailing")) return "Mailing Address Update";
  if (lower.includes("information") || lower.includes("inquiry")) return "Information Request";
  if (lower.includes("technical") || lower.includes("error") || lower.includes("bug")) return "Technical Issue";
  if (lower.includes("complaint")) return "Complaint";
  if (lower.includes("grievance")) return "Grievance";
  if (lower.includes("volunteer")) return "Volunteer Signup";
  return "Other";
};

// Define the classification types for filtering
const classificationTypes = [
  "Slot Allocation",
  "Grievance",
  "ID Correction",
  "Mailing Address Update",
  "Information Request",
  "Technical Issue",
  "Complaint",
  "Volunteer Signup",
  "Other",
];

// Assign a background color for each classification type
const getTypeColor = (type) => {
  switch (type) {
    case "Slot Allocation": return "bg-indigo-600";
    case "Grievance": return "bg-red-600";
    case "ID Correction": return "bg-orange-600";
    case "Mailing Address Update": return "bg-blue-600";
    case "Information Request": return "bg-teal-600";
    case "Technical Issue": return "bg-purple-600";
    case "Complaint": return "bg-pink-600";
    case "Volunteer Signup": return "bg-green-600";
    case "Other": return "bg-gray-600";
    default: return "bg-gray-500";
  }
};

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc"); // 'desc' = newest-to-oldest, 'asc' = oldest-to-newest
  const [selectedRequest, setSelectedRequest] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/issues");
        // response.data has the original fields from the schema: epic, name, email, issue, createdAt.
        setRequests(response.data);
        setFiltered(response.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, []);

  // Apply filtering and sorting
  const handleFilter = () => {
    let filteredData = [...requests];
    if (selectedTypes.length) {
      filteredData = filteredData.filter((req) =>
        selectedTypes.includes(classifyIssue(req.issue))
      );
    }
    filteredData.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });
    setFiltered(filteredData);
  };

  useEffect(() => {
    handleFilter();
  }, [selectedTypes, sortOrder, requests]);

  return (
    <div className="p-8 md:p-16 mx-auto bg-[#121212] text-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-gray-100 mb-8">Requests</h1>
      
      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <MultiSelect
          options={classificationTypes}
          selectedValues={selectedTypes}
          onChange={setSelectedTypes}
          placeholder="Filter by Request Type"
          icon={<Filter className="w-4 h-4" />}
        />
        <div className="w-full md:w-1/3">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="w-full p-2 border rounded bg-[#0f3460] text-white"
          >
            <option value="desc">Newest to Oldest</option>
            <option value="asc">Oldest to Newest</option>
          </select>
        </div>
      </div>
      
      {/* Requests Table */}
      <div className="bg-[#1e1e1e] rounded-xl shadow-lg">
        {/* Table Header with Icons */}
        <div className="grid grid-cols-5 gap-4 font-semibold border-b border-gray-700 p-4 sticky top-0 bg-[#1e1e1e] z-10">
          <div className="flex items-center gap-1">
            <Hash className="w-4 h-4 text-white" />
            <span>EPIC</span>
          </div>
          <div className="flex items-center gap-1">
            <User className="w-4 h-4 text-green-500" />
            <span>Name</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="w-4 h-4 text-yellow-500" />
            <span>Email</span>
          </div>
          <div className="flex items-center gap-1">
            <AlertTriangle className="w-4 h-4 text-red-500" />
            <span>Issue</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span>Date</span>
          </div>
        </div>
        <div className="max-h-80 overflow-y-auto custom-scrollbar">
          {loading ? (
            <div className="text-center p-4">Loading issues...</div>
          ) : filtered.length ? (
            filtered.map((req) => {
              // Compute classification from the detailed issue text for table display
              const classification = classifyIssue(req.issue);
              return (
                <div
                  key={req._id}
                  tabIndex={0}
                  onDoubleClick={() => setSelectedRequest(req)}
                  className="grid grid-cols-5 gap-4 p-4 border-b border-gray-700 cursor-pointer hover:bg-[#252525] transition-colors focus:outline-none focus:bg-[#2a2a2a]"
                >
                  <div>{req.epic}</div>
                  <div>{req.name}</div>
                  <div>{req.email}</div>
                  <div>
                    <span className={`px-2 py-1 rounded ${getTypeColor(classification)} text-white`}>
                      {classification}
                    </span>
                  </div>
                  <div>{new Date(req.createdAt).toLocaleDateString()}</div>
                </div>
              );
            })
          ) : (
            <div className="text-center text-gray-400 p-4">No requests found.</div>
          )}
        </div>
      </div>
      
      {/* Popup Dialog for Request Details */}
      <Dialog open={!!selectedRequest} onOpenChange={(open) => !open && setSelectedRequest(null)}>
        <DialogContent className="bg-[#1e1e1e] text-white border-none shadow-2xl rounded-lg p-6">
          {selectedRequest && (
            <>
              <div className="mb-4">
                <DialogTitle className="text-2xl font-extrabold">Request Details</DialogTitle>
                <DialogDescription className="text-gray-300">
                  Detailed information about the selected request.
                </DialogDescription>
              </div>
              <div className="space-y-2">
                <p>
                  <span className="font-semibold">EPIC:</span> {selectedRequest.epic}
                </p>
                <p>
                  <span className="font-semibold">Name:</span> {selectedRequest.name}
                </p>
                <p>
                  <span className="font-semibold">Email:</span> {selectedRequest.email}
                </p>
                <p>
                  <span className="font-semibold">Issue:</span> {selectedRequest.issue}
                </p>
                <p>
                  <span className="font-semibold">Submitted On:</span> {new Date(selectedRequest.createdAt).toLocaleString()}
                </p>
              </div>
              <DialogFooter className="mt-6">
                <Button variant="outline" onClick={() => setSelectedRequest(null)} className="flex gap-2">
                  <X className="w-4 h-4" />
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
