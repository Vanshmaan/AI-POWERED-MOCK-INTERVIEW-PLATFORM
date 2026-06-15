🚀 AI Powered Mock Interview Platform

An AI-powered full-stack mock interview system that simulates real-world technical interviews using Gemini AI, voice interaction, and live coding evaluation.

It helps users practice interviews anytime with realistic questions, voice-based answers, coding challenges, and instant AI feedback.

🧠 Problem It Solves

Most candidates know concepts but fail in real interviews due to lack of practice under pressure.

This platform bridges the gap between:

Knowledge ❌ vs Performance ✅
Practice at home ❌ vs Real interview simulation ✅
✨ Features
🎯 AI Interview System
Personalized questions from resume
Role-based interviews (Frontend, Backend, Full Stack, etc.)
Adaptive follow-up questions
🎤 Voice-Based Interview
Speak answers using microphone
AI interviewer speaks using text-to-speech (Murf AI)
Speech-to-text using AssemblyAI
💻 Live Coding Rounds
Monaco code editor
Code evaluation using AI
📄 Resume Intelligence
Upload PDF resume
AI extracts and analyzes content
Generates tailored questions
📊 Feedback & Scoring
Detailed AI feedback report
Scores across multiple categories
Strengths and improvement areas
📚 Interview History
Track past interviews
View scores and feedback
Pagination support
🏗️ Tech Stack
Frontend
React (Vite)
Axios
React Router DOM
Monaco Editor
React Icons
React Hot Toast
Backend
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
Multer (file uploads)
CORS
AI / Services
Google Gemini AI (@google/genai)
AssemblyAI (Speech-to-Text)
Murf AI (Text-to-Speech)
pdfjs-dist (Resume parsing)
📁 Project Structure
project/
├── server/        # Backend (Express + AI services)
│   ├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   └── models/
│
└── client/        # Frontend (React + Vite)
    ├── src/
    ├── pages/
    ├── components/
    └── services/
⚙️ Environment Variables
Backend (.env)
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection
JWT_SECRET=your_secret
JWT_EXPIRES_IN=7d

GEMINI_API_KEY=your_gemini_key
ASSEMBLYAI_API_KEY=your_assemblyai_key
MURF_API_KEY=your_murf_key

CLIENT_URL=http://localhost:5173
Frontend (.env)
VITE_API_BASE_URL=https://your-backend-url.onrender.com
🚀 Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/your-username/ai-mock-interview-platform.git
cd ai-mock-interview-platform
2️⃣ Backend Setup
cd server
npm install
npm run dev

Backend runs on:

http://localhost:5000
3️⃣ Frontend Setup
cd client
npm install
npm run dev

Frontend runs on:

http://localhost:5173
🌐 Deployment
Backend (Render)
Root Directory: server
Build Command: npm install
Start Command: npm start
Frontend (Vercel / Render)
Build Command:
npm run build
Output Directory:
dist
🔥 API Endpoints
Auth
POST /api/auth/register
POST /api/auth/login
GET  /api/auth/me
POST /api/auth/logout
Resume
POST /api/resume/upload
GET  /api/resume
Interview
POST /api/interview/start
POST /api/interview/:id/answer
POST /api/interview/:id/code
POST /api/interview/:id/end
GET  /api/interview/:id
History
GET    /api/history
DELETE /api/history/:id
DELETE /api/history/clear
🧠 Architecture
Frontend (React)
   ↓
Axios API Layer
   ↓
Express Backend
   ↓
MongoDB Database
   ↓
AI Services:
   - Gemini (Question + Feedback)
   - AssemblyAI (Speech-to-Text)
   - Murf AI (Text-to-Speech)
⚠️ Important Notes
CORS must allow frontend domain
Always set correct VITE_API_BASE_URL
Never commit .env to GitHub
Render free instance may sleep (cold start delay)
📸 Screenshots (Optional)

Add:

Dashboard
Interview UI
Feedback page
💡 Future Improvements
Real-time interviewer avatar
Peer-to-peer mock interviews
Advanced analytics dashboard
Mobile app (React Native)
WebRTC live interviews
👨‍💻 Author

Vansh Maan

⭐ If you like this project

Give a ⭐ on the repo and share it!
