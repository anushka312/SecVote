
# SecVote

SecVote is a two-stage, automated voter verification system designed to streamline polling booth operations and eliminate long queues. Built with a modern tech stack and real-time verification capabilities, SecVote enhances the voting experience while ensuring security and efficiency.

## Live Demo

[https://secvote.onrender.com/](https://secvote.onrender.com/)

## Video Link

https://drive.google.com/file/d/1fFU8jEgZY_gyxTee5L47JdUddeYra7LZ/view?usp=drive_link

## Features

### Voter-Facing Features (Web Portal)

- **Slot Booking:** Voters can book time slots to avoid long queues on election day.
- **Grievance Submission:** Users can raise issues or complaints directly via the portal.
- **Voter Dashboard:** Central place to manage bookings, status, and verification updates.
- **Chat Assistant (Gemini API):** AI-powered chatbot for voter support and general queries.
- **QR Code Verification:** First level (soft) identity check during booth arrival.
- **Biometric Authentication:** Second level (hard) identity check before authorizing vote.
- **Real-Time Status Tracking:** Voters can track their slot status and booth entry updates.

### Admin Layer (Management & Support)

- **Admin Panel:** For handling slot allocations and resolving user grievances.
- **Slot Allocation Logic:** Ensures fair and conflict-free time slot booking.
- **SMS Notifications:** Sends confirmations and updates to voters.

### Backend Processing

- **API Server:** Built with Next.js and Express for handling user data, slot processing, and status updates.
- **Database:** Digital electoral roll stored and queried using PostgreSQL/MySQL.
- **Voting Progress Tracker:** Real-time updates of polling progress and verification.  

## Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **AI Integration:** Gemini API  
- **Deployment:** Render  

## Screenshots
<p float="left">
  <img src="https://github.com/user-attachments/assets/ec3ccab6-e91a-458e-acf4-1ceb27e7b014" width="600"/>
  <img src="https://github.com/user-attachments/assets/4a2e8a26-0bfb-456f-8f4f-91643719caa3" width="600"/>
</p>


## Getting Started

To run this project locally:

### Frontend

```bash
cd client
npm install
npm run dev
```

### Backend

```bash
cd server
npm install
node server.js
```


## Team

**Team Name:** Code of Duty  
**Members:**
- Anushka  
- Devesh  
- Aditya  
- Pankaj  

## License

This project is licensed under the [MIT License](LICENSE).

---

