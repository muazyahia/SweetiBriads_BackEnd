# Sweeti Braids - Backend API

Backend API for **Sweeti Braids**, a modern hair braiding salon platform built with **Node.js, Express.js, TypeScript, and MongoDB**. The application handles client bookings, gallery management, reviews, services, authentication, and file uploads.

## Live Demo

**Frontend:** https://sweeti-briads.vercel.app/

**Backend API:** https://sweeti-briads-backend.vercel.app/

**Backend Repository:** https://github.com/muazyahia/SweetiBriads_BackEnd

**Frontend Repository:** https://github.com/muazyahia/Sweeti_Briads

---

## Technologies

| Technology  | Description                                   |
| ----------- | --------------------------------------------- |
| Node.js     | JavaScript runtime environment                |
| Express.js  | Backend framework for building REST APIs      |
| TypeScript  | Programming language with type safety         |
| MongoDB     | NoSQL database                                |
| Mongoose    | MongoDB object modeling and schema management |
| JWT         | Authentication and authorization              |
| Bcrypt.js   | Password hashing                              |
| Cloudinary  | Image and file storage                        |
| Multer      | File upload middleware                        |
| Streamifier | File stream handling for Cloudinary uploads   |
| CORS        | Cross-Origin Resource Sharing                 |
| Dotenv      | Environment variable management               |

---

## Features

* Client Booking Management
* Gallery and Portfolio Management
* Client Reviews
* Service and Style Management
* Dynamic Service Pricing
* Admin Authentication
* JWT-based Authentication and Authorization
* Password Hashing
* Image and File Uploads
* Cloudinary Media Storage
* RESTful API
* CORS Configuration
* Environment-Based Configuration

---

## Project Structure

```text
src/
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── services/
├── utils/
└── server.ts
```

---

## Installation

### Requirements

* Node.js v18 or later
* MongoDB database
* Cloudinary account

### Clone the Repository

```bash
git clone https://github.com/muazyahia/SweetiBriads_BackEnd.git
cd SweetiBriads_BackEnd
```

### Install Dependencies

```bash
npm install
```

### Environment Variables

Create a `.env` file in the project root.

```env
PORT=4000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster...
JWT_SECRET=your_jwt_secret_here

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Run the Application

Development mode:

```bash
npm run dev
```

Production mode:

```bash
npm run build
npm start
```

The API will run on:

```text
http://localhost:4000
```

---

## Deployment

The project is ready for deployment on **Vercel**.

### Vercel Setup

1. Import this repository into your Vercel Dashboard.
2. In the Vercel project settings, go to **Environment Variables** and add the required environment variables.
3. Deploy the project.

---

## Architecture

* MVC Architecture
* REST API
* MongoDB Database
* JWT Authentication
* Role-Based Authorization
* Cloudinary Media Integration
* File Upload Handling
* CORS Configuration
* Environment-Based Configuration

---

## Frontend

The backend API is integrated with the **Sweeti Braids Client Website**, built with **Next.js**.

**Frontend:** https://sweeti-briads.vercel.app/

**Frontend Repository:** https://github.com/muazyahia/Sweeti_Briads

---

## License

This project is developed for the Sweeti Braids platform.
Developed by Moa'az Yahia
