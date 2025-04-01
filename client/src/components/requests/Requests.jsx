import { useEffect, useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/Button"
import {
  X,
  Hash,
  User,
  Tag,
  Calendar,
  CheckCircle,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import axios from "axios"

// Simple multi-select with tags and a dropdown
function MultiSelect({ options, selectedValues, onChange, placeholder, icon }) {
  const [open, setOpen] = useState(false)

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
                    e.stopPropagation()
                    onChange(selectedValues.filter((v) => v !== val))
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
            <label
              key={option}
              className="flex items-center gap-2 p-1 hover:bg-[#252525] rounded cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedValues.includes(option)}
                onChange={(e) => {
                  if (e.target.checked) onChange([...selectedValues, option])
                  else onChange(selectedValues.filter((v) => v !== option))
                }}
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  )
}

// Assign a background color for each status
function getStatusColor(status) {
  switch (status) {
    case "Urgent": return "bg-red-600"
    case "Rejected": return "bg-gray-600"
    case "Completed": return "bg-green-600"
    case "Pending": return "bg-yellow-600"
    case "In Progress": return "bg-blue-600"
    case "Resolved": return "bg-teal-600"
    case "Escalated": return "bg-purple-600"
    default: return "bg-gray-500"
  }
}

// Dummy data arrays
const requestTypes = [
  "Slot Allocation",
  "Grievance",
  "ID Correction",
  "Mailing Address Update",
  "Information Request",
  "Technical Issue",
  "Complaint",
  "Volunteer Signup",
  "Other",
]
const requestStatuses = [
  "Urgent",
  "Rejected",
  "Completed",
  "Pending",
  "In Progress",
  "Resolved",
  "Escalated",
]
const requestDescriptions = [
  "Request for urgent slot allocation due to scheduling conflicts.",
  "Voter reported an error in voter ID details.",
  "Update needed for mailing address changes.",
  "Inquiry about election procedures.",
  "Complaint regarding long queues and understaffing.",
  "Technical issue encountered during login.",
  "Request to volunteer at the polling station.",
  "Escalation due to repeated processing errors.",
  "General inquiry about absentee ballots.",
]

// Generate 50 dummy requests
function generateDummyRequests(count) {
  const requests = []
  for (let i = 1; i <= count; i++) {
    const requestId = `R${String(i).padStart(3, "0")}`
    const epicNo = `EPIC-${Math.floor(10000 + Math.random() * 90000)}`
    const type = requestTypes[Math.floor(Math.random() * requestTypes.length)]
    const status = requestStatuses[Math.floor(Math.random() * requestStatuses.length)]
    const description =
      requestDescriptions[Math.floor(Math.random() * requestDescriptions.length)]
    const day = 1 + Math.floor(Math.random() * 28)
    const date = `2025-03-${String(day).padStart(2, "0")}`

    requests.push({ requestId, epicNo, type, date, status, description })
  }
  return requests
}
const dummyRequests = generateDummyRequests(50)

export default function Requests() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // const [selectedRequestTypes, setSelectedRequestTypes] = useState([])
  // const [selectedStatuses, setSelectedStatuses] = useState([])
  // const [filtered, setFiltered] = useState(dummyRequests)
  // const [selectedRequest, setSelectedRequest] = useState(null)

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/issues");
        setRequests(response.data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchIssues();
  }, []);

  // // Apply filters to the dummyRequests
  // const handleFilter = () => {
  //   setFiltered(
  //     dummyRequests.filter((req) => {
  //       const matchType = selectedRequestTypes.length
  //         ? selectedRequestTypes.includes(req.type)
  //         : true
  //       const matchStatus = selectedStatuses.length
  //         ? selectedStatuses.includes(req.status)
  //         : true
  //       return matchType && matchStatus
  //     })
  //   )
  // }

  // // Press Enter on a focused row to open the dialog
  // const handleRowKeyDown = (e, req) => {
  //   if (e.key === "Enter") setSelectedRequest(req)
  // }

  return (
    <div className="p-8 md:p-16 mx-auto bg-[#121212] text-white min-h-screen">
      <h1 className="text-5xl font-extrabold text-gray-100 mb-8">Requests</h1>

      {/* Filters */}
      {/* <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <MultiSelect
          options={requestTypes}
          selectedValues={selectedRequestTypes}
          onChange={setSelectedRequestTypes}
          placeholder="Filter by Request Type"
          icon={<Filter className="w-4 h-4" />}
        />
        <MultiSelect
          options={requestStatuses}
          selectedValues={selectedStatuses}
          onChange={setSelectedStatuses}
          placeholder="Filter by Status"
          icon={<Filter className="w-4 h-4" />}
        />
        <Button
          onClick={handleFilter}
          className="bg-[#5A96E3] hover:bg-[#7D67D2] text-white font-semibold py-2 px-6 rounded-xl"
        >
          Filter
        </Button>
      </div> */}

      {/* Table */}
      <div className="bg-[#1e1e1e] rounded-xl shadow-lg">
        {/* Header */}
        {/* <div className="grid grid-cols-5 gap-4 font-semibold border-b border-gray-700 p-4 sticky top-0 bg-[#1e1e1e] z-10">
          <div className="flex items-center gap-2">
            <Hash className="w-4 h-4" /> Request ID
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4 text-green-500" /> EPIC No
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-blue-500" /> Type
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-red-500" /> Date
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-yellow-500" /> Status
          </div>
        </div> */}
        {/* Body (scrollable) */}
        {/* <div className="max-h-80 overflow-y-auto custom-scrollbar">
          {filtered.map((req) => (
            <div
              key={req.requestId}
              tabIndex={0}
              onDoubleClick={() => setSelectedRequest(req)}
              onKeyDown={(e) => handleRowKeyDown(e, req)}
              className="grid grid-cols-5 gap-4 p-4 border-b border-gray-700 cursor-pointer hover:bg-[#252525] transition-colors focus:outline-none focus:bg-[#2a2a2a]"
            >
              <div>{req.requestId}</div>
              <div>{req.epicNo}</div>
              <div>{req.type}</div>
              <div>{req.date}</div>
              <div>
                <span className={`px-2 py-1 rounded ${getStatusColor(req.status)} text-white`}>
                  {req.status}
                </span>
              </div>
            </div>
          ))}
          {!filtered.length && (
            <div className="text-center text-gray-400 p-4">No requests found.</div>
          )}
        </div> */}
      </div>

      {/* Dialog (no top-right X) */}
      {/* <Dialog open={!!selectedRequest} onOpenChange={(o) => !o && setSelectedRequest(null)}>
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
                  <span className="font-semibold">Request ID:</span> {selectedRequest.requestId}
                </p>
                <p>
                  <span className="font-semibold">EPIC No:</span> {selectedRequest.epicNo}
                </p>
                <p>
                  <span className="font-semibold">Type:</span> {selectedRequest.type}
                </p>
                <p>
                  <span className="font-semibold">Date:</span> {selectedRequest.date}
                </p>
                <p>
                  <span className="font-semibold">Status:</span> {selectedRequest.status}
                </p>
                <p>
                  <span className="font-semibold">Description:</span> {selectedRequest.description}
                </p>
              </div>
              <DialogFooter className="mt-6">
                <Button
                  variant="outline"
                  onClick={() => setSelectedRequest(null)}
                  className="flex gap-2"
                >
                  <X className="w-4 h-4" />
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog> */}


      // Newly Added Code
      <div className="max-w-lg mx-auto bg-gray-900 p-6 rounded-lg shadow-lg text-white">
        <h2 className="text-2xl font-bold mb-4">Submitted Issues</h2>
        {loading ? (
          <p>Loading issues...</p>
        ) : requests.length === 0 ? (
          <p>No issues found.</p>
        ) : (
          <ul>
            {requests.map((issue) => (
              <li key={issue._id} className="border-b border-gray-700 py-2">
                <p><strong>EPIC:</strong> {issue.epic}</p>
                <p><strong>Name:</strong> {issue.name}</p>
                <p><strong>Email:</strong> {issue.email}</p>
                <p><strong>Issue:</strong> {issue.issue}</p>
                <p className="text-sm text-gray-400">
                  Submitted on: {new Date(issue.createdAt).toLocaleString()}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
