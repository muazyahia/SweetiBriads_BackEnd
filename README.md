# Sweeti Braids - Backend API 🌸⚙️

This repository contains the backend infrastructure for the **Sweeti Braids** platform. It is a robust, scalable REST API built using **NestJS**, designed to handle client bookings, gallery management, reviews moderation, and more.

## 🚀 Technologies Used
- **Framework:** NestJS (TypeScript)
- **Database:** MongoDB & Mongoose
- **Authentication:** Passport, JWT (JSON Web Tokens)
- **File Uploads:** Cloudinary (for gallery and transformation images)
- **Real-time:** Socket.io (for instant admin notifications)
- **Deployment Strategy:** Vercel Serverless Functions (`serverless-http`)

## 🛠️ Features
- **Booking System:** Create, read, and manage client bookings.
- **Gallery & Portfolio:** Upload and store images seamlessly via Cloudinary.
- **Review System:** Collect and fetch verified client reviews.
- **Style Management:** Manage dynamic prices and services offered.
- **Admin Authentication:** Secure JWT-based authentication for the dashboard.
- **Vercel Serverless Ready:** Pre-configured with `vercel.json` and `api/index.ts` to deploy directly as a serverless function with proper connection pooling.

## 💻 Local Development

### Prerequisites
- Node.js (v18+ recommended)
- MongoDB Cluster URI
- Cloudinary Account (API Key, Secret, Cloud Name)

### Installation
```bash
# Clone the repository
git clone https://github.com/muazyahia/SweetiBriads_BackEnd.git
cd SweetiBriads_BackEnd

# Install dependencies
npm install
```

### Environment Variables
Create a `.env` file in the root directory and configure the following variables (refer to `.env.example`):
```env
PORT=4000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster...
JWT_SECRET=your_jwt_secret_here

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Running the App
```bash
# Development mode
npm run start:dev

# Production mode
npm run build
npm run start:prod
```

## ☁️ Deployment (Vercel)
This repository is optimized to be deployed instantly on Vercel without a traditional Node.js server.
1. Import the repository to Vercel.
2. Add the required Environment Variables.
3. Vercel will automatically use `vercel.json` to route traffic to the `api/index.ts` handler, deploying your API as a Serverless function.
