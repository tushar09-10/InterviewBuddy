# 🎯 InterviewBuddy

An AI-powered mock interview platform that helps job seekers practice and ace their interviews with personalized questions, real-time feedback, and detailed performance analytics.

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwindcss&logoColor=white)

## ✨ Features

- 🤖 **AI-Powered Questions** - Generate personalized interview questions using Google Gemini AI
- 🎯 **Multiple Interview Types** - Technical, Behavioral, and Mixed interview modes
- 📹 **Webcam Recording** - Record your answers with real-time video capture
- 🎤 **Speech-to-Text** - Automatic transcription of your spoken answers
- 📊 **Detailed Feedback** - Get AI-generated feedback on your responses
- 💾 **Session History** - Save and review past interview sessions
- 🔐 **Secure Authentication** - User authentication powered by Clerk
- ☁️ **Cloud Storage** - Data persistence with Firebase Firestore

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 18, TypeScript, Vite |
| Styling | Tailwind CSS, shadcn/ui |
| AI | Google Generative AI (Gemini) |
| Auth | Clerk |
| Database | Firebase Firestore |
| 3D Graphics | Spline |
| Forms | React Hook Form, Zod |

## 🚀 Getting Started

### Prerequisites

- Node.js v18 or higher
- npm, yarn, or pnpm
- Google Gemini API key
- Clerk account
- Firebase project

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tushar09-10/InterviewBuddy.git
   cd InterviewBuddy
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   
   Copy `.env.example` to `.env` and fill in your API keys:
   ```bash
   cp .env.example .env
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   └── ui/          # shadcn/ui components
├── routes/          # Page components
├── layouts/         # Layout wrappers
├── config/          # App configuration
├── lib/             # Utility functions
├── types/           # TypeScript definitions
├── handlers/        # Event handlers
└── provider/        # Context providers
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

## 🌐 Deployment

This project is configured for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy on push.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Tushar Singh**

- GitHub: [@tushar09-10](https://github.com/tushar09-10)

---

⭐ Star this repo if you find it helpful!
