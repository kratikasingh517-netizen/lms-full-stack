# LMS Full Stack

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Backend-68A063?logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-4DB33D?logo=mongodb&logoColor=white)
![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF)
![Stripe](https://img.shields.io/badge/Stripe-Payments-635BFF?logo=stripe&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Media-3448C5?logo=cloudinary&logoColor=white)

A full-stack Learning Management System (LMS) built with React, Vite, Node.js, Express, MongoDB, Clerk, Stripe, and Cloudinary.

The platform provides separate experiences for students and educators. Students can explore and purchase courses, track their learning progress, and submit ratings. Educators can create and manage courses, view enrolled students, and access dashboard information.

---

##  Table of Contents

| # | Section |
|---|---------|
| 1 | [Features](#-features) |
| 2 | [Tech Stack](#-tech-stack) |
| 3 | [Project Structure](#-project-structure) |
| 4 | [Application Architecture](#-application-architecture) |
| 5 | [Authentication](#-authentication) |
| 6 | [API Documentation](#-api-documentation) |
| 7 | [Stripe Integration](#-stripe-integration) |
| 8 | [Webhooks](#-webhooks) |
| 9 | [Cloudinary](#-cloudinary) |
| 10 | [MongoDB](#-mongodb) |
| 11 | [Environment Variables](#-environment-variables) |
| 12 | [Installation](#-installation) |
| 13 | [Running the Full Project](#-running-the-full-project) |
| 14 | [Main User Flow](#-main-user-flow) |
| 15 | [Deployment](#-deployment) |
| 16 | [Security](#-security) |
| 17 | [Development Checklist](#-development-checklist) |
| 18 | [Troubleshooting](#-troubleshooting) |
| 19 | [Screenshots](#-screenshots) |
| 20 | [Future Improvements](#-future-improvements) |
| 21 | [Contributing](#-contributing) |
| 22 | [License](#-license) |
| 23 | [Author](#-author) |

---

##  Features

###  Student Features

| Feature | Description |
|---------|-------------|
| User Authentication | Secure authentication with Clerk |
| Browse Courses | Explore all available courses |
| Course Details | View individual course details |
| Purchase Courses | Buy courses using Stripe |
| Enrolled Courses | View all enrolled courses |
| Track Progress | Monitor course learning progress |
| Update Progress | Update course progress |
| View Progress | View current course progress |
| Rate Courses | Submit ratings for courses |
| Learning Interface | Dedicated student learning interface |
| Video/Content Support | Course video and content support |

###  Educator Features

| Feature | Description |
|---------|-------------|
| Authentication | Educator authentication and authorization |
| Role Upgrade | Upgrade user role to educator |
| Dashboard | Access educator dashboard |
| Create Courses | Create and publish new courses |
| Upload Images | Upload course images |
| View Courses | View educator's own courses |
| View Students | View enrolled students |
| Manage Content | Manage course content |

---

##  Tech Stack

### Frontend

| Technology | Purpose |
|------------|---------|
| React 18 | UI development |
| Vite | Frontend tooling |
| React Router | Client-side routing |
| Clerk React | Authentication |
| Axios | API requests |
| Tailwind CSS | Styling |
| Quill | Rich text/course content editor |
| React YouTube | YouTube/video integration |
| RC Progress | Progress indicators |
| React Simple Star Rating | Course ratings |
| React Toastify | Notifications |
| Humanize Duration | Duration formatting |
| Uniqid | Unique ID generation |

### Backend

| Technology | Purpose |
|------------|---------|
| Node.js | Backend runtime |
| Express.js | REST API |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| Clerk Express | Authentication |
| Stripe | Payments |
| Cloudinary | Media storage |
| Multer | File uploads |
| CORS | Cross-origin requests |
| dotenv | Environment variables |
| Svix | Webhook support |
| bcrypt | Password hashing support |
| JSON Web Token | Token-based authentication support |
| Nodemon | Development server |

---

## Project Structure

```text
lms-full-stack/
│
├── client/
│   ├── public/
│   │
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   └── pages/
│   │       ├── educator/
│   │       └── student/
│   │
│   ├── package.json
│   ├── vercel.json
│   └── ...
│
├── server/
│   ├── configs/
│   │   ├── cloudinary.js
│   │   ├── mongodb.js
│   │   └── multer.js
│   │
│   ├── controllers/
│   │   ├── courseController.js
│   │   ├── educatorController.js
│   │   ├── userController.js
│   │   └── webhooks.js
│   │
│   ├── middlewares/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   └── ...
│   │
│   ├── routes/
│   │   ├── courseRoute.js
│   │   ├── educatorRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── vercel.json
│   └── ...
│
├── .gitignore
└── README.md
```

---

## Application Architecture

The project follows a separate frontend/backend architecture.

```text
                    ┌─────────────────────┐
                    │       Student       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   React + Vite      │
                    │      Frontend       │
                    └──────────┬──────────┘
                               │
                             Axios
                               │
                               ▼
                    ┌─────────────────────┐
                    │  Node.js + Express  │
                    │       Backend       │
                    └──────────┬──────────┘
                               │
              ┌────────────────┼────────────────┐
              │                │                │
              ▼                ▼                ▼
          MongoDB           Clerk            Stripe
              │                                 │
              │                                 │
              └──────────────┐        ┌─────────┘
                             ▼        ▼
                          Cloudinary
```

---

## Authentication

Authentication is implemented using Clerk.

| Layer | Technology |
|-------|------------|
| Frontend | `@clerk/clerk-react` |
| Backend | `@clerk/express` |

Clerk middleware is registered in the Express application:

```js
app.use(clerkMiddleware());
```

This allows authenticated user information to be accessed from backend requests.

### Educator Authorization

Educator-only routes are protected using the `protectEducator` middleware.

The middleware retrieves the authenticated Clerk user and checks:

```js
response.publicMetadata.role === 'educator';
```

Only users with the educator role can access protected educator operations.

| Role | Access |
|------|--------|
| `educator` | Allowed |
| Other | Unauthorized |

```text
Authenticated User
        │
        ▼
   Clerk Middleware
        │
        ▼
  protectEducator
        │
        ▼
Check publicMetadata.role
        │
   ┌────┴────┐
   │         │
educator   other
   │         │
   ▼         ▼
 Allow    Unauthorized
```

---

## API Documentation

The backend exposes REST APIs under the following prefixes:

| Prefix | Description |
|--------|-------------|
| `/api/educator` | Educator operations |
| `/api/course` | Course operations |
| `/api/user` | User operations |

### Educator API

**Base URL:** `/api/educator`

| Method | Endpoint | Description | Protection |
|--------|----------|-------------|------------|
| GET | `/update-role` | Update user role to educator | Clerk |
| POST | `/add-course` | Create a new course | Educator |
| GET | `/courses` | Get educator courses | Educator |
| GET | `/dashboard` | Get educator dashboard data | Educator |
| GET | `/enrolled-students` | Get enrolled students data | Educator |

#### Add Course

```http
POST /api/educator/add-course
```

The endpoint accepts a course image through `multipart/form-data`. The image field is `image`.

Multer handles the uploaded file before the request reaches the course controller.

### 📖 Course API

**Base URL:** `/api/course`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/all` | Get all courses |
| GET | `/:id` | Get course details by ID |

#### Get All Courses

```http
GET /api/course/all
```

#### Get Course By ID

```http
GET /api/course/:id
```

### User API

**Base URL:** `/api/user`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/data` | Get user data |
| POST | `/purchase` | Purchase a course |
| GET | `/enrolled-courses` | Get enrolled courses |
| POST | `/update-course-progress` | Update course progress |
| POST | `/get-course-progress` | Get course progress |
| POST | `/add-rating` | Add course rating |

---

## 💳 Stripe Integration

Stripe is used for course purchasing.

The backend exposes a Stripe webhook endpoint:

```http
POST /stripe
```

The webhook uses:

```js
express.raw({ type: 'application/json' });
```

This preserves the raw request body required for Stripe webhook verification/processing.

### Payment Flow

```text
Student
   │
   ▼
Select Course
   │
   ▼
Purchase Course
   │
   ▼
Stripe Payment
   │
   ▼
Stripe Webhook
   │
   ▼
Backend
   │
   ▼
Update Enrollment / Purchase Data
```

---

## Webhooks

The backend handles two webhook integrations.

| Webhook | Endpoint | Handler |
|---------|----------|---------|
| Clerk Webhook | `POST /clerk` | `clerkWebhooks` |
| Stripe Webhook | `POST /stripe` | `stripeWebhooks` |

Both webhook handlers are implemented in `server/controllers/webhooks.js`.

---

## ☁️ Cloudinary

Cloudinary is used for cloud-based media storage.

**Configuration:** `server/configs/cloudinary.js`

Course images are uploaded using: **Multer → Cloudinary**

The general flow is:

```text
Frontend
   │
   ▼
Course Image
   │
   ▼
Multer
   │
   ▼
Cloudinary
   │
   ▼
Image URL
   │
   ▼
Course Data
```

---

## 🗄️ MongoDB

The application uses MongoDB as its primary database.

| Item | Location |
|------|----------|
| MongoDB Config | `server/configs/mongodb.js` |
| ODM | Mongoose |
| Initialization | On Express app start |

Mongoose is used to interact with MongoDB. Database initialization happens when the Express application starts.

---

## ⚙️ Environment Variables

Create environment files locally for the required credentials and configuration.

>  **Do not commit secrets to GitHub.**

### Server Environment

Create `server/.env` with the following variables:

| Variable | Description |
|----------|-------------|
| `PORT` | Server port (e.g., 5000) |
| `MONGODB_URI` | MongoDB connection string |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `CLERK_WEBHOOK_SECRET` | Clerk webhook secret |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |

```env
PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

Use the exact variable names expected by your configuration files. The names above are examples of the required configuration categories.

### Client Environment

Create `client/.env` with the following variables:

| Variable | Description |
|----------|-------------|
| `VITE_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `VITE_API_URL` | Backend API URL |

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=your_backend_url
```

>  **Never expose secret keys in the client-side environment.**

---

##  Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Move into the project:

```bash
cd lms-full-stack
```

### Frontend Installation

| Command | Description |
|---------|-------------|
| `cd client` | Move into client directory |
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build production frontend |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

```bash
cd client
npm install
npm run dev
```

### Backend Installation

| Command | Description |
|---------|-------------|
| `cd server` | Move into server directory |
| `npm install` | Install dependencies |
| `npm run server` | Start development server (Nodemon) |
| `npm start` | Start production server |

```bash
cd server
npm install
npm run server
```

---

##  Running the Full Project

Run the backend first:

```bash
cd server
npm install
npm run server
```

Then start the frontend in another terminal:

```bash
cd client
npm install
npm run dev
```

The frontend communicates with the Express backend through HTTP API requests.

---

##  Main User Flow

### Student Flow

```text
Register / Login with Clerk
          │
          ▼
     Browse Courses
          │
          ▼
    View Course Details
          │
          ▼
      Purchase Course
          │
          ▼
     Stripe Payment
          │
          ▼
      Course Enrollment
          │
          ▼
     Access Course
          │
          ▼
   Track Course Progress
          │
          ▼
       Add Rating
```

### Educator Flow

```text
Login with Clerk
      │
      ▼
Update Role to Educator
      │
      ▼
Educator Dashboard
      │
      ├───────────────┐
      ▼               ▼
Create Course    View Courses
      │
      ▼
Upload Course Image
      │
      ▼
Cloudinary
      │
      ▼
Published Course
      │
      ▼
View Enrolled Students
```

---

##  Backend Folder Responsibilities

| Folder | Responsibility |
|--------|----------------|
| `configs/` | External service configuration |
| `controllers/` | Backend business logic |
| `middlewares/` | Reusable Express middleware |
| `models/` | MongoDB/Mongoose models |
| `routes/` | Express route definitions |

### `configs/`

```text
configs/
├── cloudinary.js
├── mongodb.js
└── multer.js
```

### `controllers/`

```text
controllers/
├── courseController.js
├── educatorController.js
├── userController.js
└── webhooks.js
```

### `middlewares/`

```text
authMiddleware.js
```

The middleware currently includes educator route protection.

### `routes/`

```text
routes/
├── courseRoute.js
├── educatorRoutes.js
└── userRoutes.js
```

---

##  Frontend Structure

The React application is organized into reusable components, shared context, assets, and role-specific pages.

```text
client/src/
│
├── assets/
│
├── components/
│
├── context/
│
└── pages/
    ├── educator/
    └── student/
```

| Folder | Purpose |
|--------|---------|
| `components/` | Reusable React UI components |
| `context/` | Application-level React Context/state management |
| `pages/student/` | Student-specific pages and functionality |
| `pages/educator/` | Educator-specific pages and functionality |
| `assets/` | Frontend assets such as images and static resources |

---

##  Deployment

Both frontend and backend contain Vercel configuration files:

| File | Purpose |
|------|---------|
| `client/vercel.json` | Frontend deployment config |
| `server/vercel.json` | Backend deployment config |

This allows the frontend and backend to be deployed separately.

### Production Architecture

```text
                 ┌───────────────────┐
                 │      Users        │
                 └─────────┬─────────┘
                           │
                           ▼
                 ┌───────────────────┐
                 │ React / Vite App  │
                 │      Vercel       │
                 └─────────┬─────────┘
                           │
                        Axios
                           │
                           ▼
                 ┌───────────────────┐
                 │ Express API       │
                 │      Vercel       │
                 └─────────┬─────────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
            ▼              ▼              ▼
         MongoDB         Stripe       Cloudinary
            │
            ▼
         LMS Data
```

---

##  Security

Important security practices:

| Practice | Description |
|----------|-------------|
| Protect `.env` files | Keep `.env` files out of Git |
| Clerk keys | Never expose Clerk secret keys in the frontend |
| Stripe keys | Never expose Stripe secret keys in the frontend |
| Cloudinary secrets | Never expose Cloudinary API secrets publicly |
| Route protection | Protect educator-specific API routes |
| Auth validation | Validate authentication before accessing protected resources |
| CORS | Configure CORS for trusted frontend origins |
| HTTPS | Use HTTPS in production |
| Dependencies | Keep third-party dependencies updated |

---

##  Development Checklist

Before deploying, verify:

- [ ] Clerk authentication works
- [ ] Student login works
- [ ] Educator role update works
- [ ] Educator authorization works
- [ ] Course listing works
- [ ] Course details work
- [ ] Course creation works
- [ ] Course image upload works
- [ ] Cloudinary upload works
- [ ] Course purchase works
- [ ] Stripe webhook works
- [ ] Student enrollment works
- [ ] Course progress updates correctly
- [ ] Course ratings work
- [ ] Educator dashboard works
- [ ] Enrolled student data loads
- [ ] Production CORS is configured
- [ ] Production environment variables are configured

---

##  Troubleshooting

| Issue | Solution |
|-------|----------|
| Frontend cannot connect to backend | Check `VITE_API_URL` and verify backend is running |
| Clerk authentication not working | Verify Clerk publishable key, secret key, frontend config, middleware config, and webhook config |
| Educator routes return Unauthorized | Check `publicMetadata.role` — must be `educator` |
| Course image upload fails | Check Multer config, Cloudinary credentials, and `image` field name |
| Stripe webhook fails | Ensure raw body is used and verify webhook secret and endpoint config |

### Frontend cannot connect to backend

Check the frontend API URL and verify that the backend is running.

```env
VITE_API_URL=your_backend_url
```

Also check the browser's network console for failed API requests.

### Clerk authentication is not working

Verify:

- Clerk publishable key
- Clerk secret key
- Clerk frontend configuration
- Clerk middleware configuration
- Clerk webhook configuration

### Educator routes return Unauthorized

Check the user's Clerk metadata:

```text
publicMetadata.role
```

The educator middleware expects `educator` as the role value.

### Course image upload fails

Check:

- Multer configuration
- Cloudinary credentials
- File field name

The course creation endpoint expects the `image` field.

### Stripe webhook fails

Make sure the Stripe webhook endpoint receives the request using the raw body:

```js
express.raw({ type: 'application/json' });
```

Also verify the Stripe webhook secret and endpoint configuration.

---

## 📸 Screenshots

Add application screenshots here when available.

Recommended structure:

```text
docs/
└── screenshots/
    ├── home.png
    ├── courses.png
    ├── course-details.png
    ├── student-dashboard.png
    ├── educator-dashboard.png
    └── course-player.png
```

Example:

```markdown
![Home Page](docs/screenshots/home.png)
![Student Dashboard](docs/screenshots/student-dashboard.png)
![Educator Dashboard](docs/screenshots/educator-dashboard.png)
```

---

## 🔮 Future Improvements

Possible future enhancements include:

- Course search and filtering
- Course categories
- Course certificates
- Quizzes and assessments
- Assignments
- Student discussions
- Course reviews and comments
- Notifications
- Email notifications
- Password/account management
- Admin dashboard
- Advanced educator analytics
- Course completion certificates
- Wishlist functionality
- Improved payment management
- Mobile application

---

##  Contributing

Contributions are welcome.

1. **Fork the repository** — Create your own fork of the project.

2. **Create a feature branch**

   ```bash
   git checkout -b feature/new-feature
   ```

3. **Make your changes** — Implement and test your changes.

4. **Commit your changes**

   ```bash
   git add .
   git commit -m "Add new feature"
   ```

5. **Push your branch**

   ```bash
   git push origin feature/new-feature
   ```

6. **Create a Pull Request**

---

##  License

This project currently uses the license configuration specified in the backend package: **ISC**

If you publish the project publicly, consider adding a `LICENSE` file to the root of the repository.

---

##  Author

**Kratika Singh**

| Platform | Link |
|----------|------|
| GitHub | [https://github.com/kratikasingh517-netizen](https://github.com/kratikasingh517-netizen) |

---


##  Project Summary

**LMS Full Stack** is a modern Learning Management System that combines a React/Vite frontend with a Node.js/Express backend.

The application provides:

-  Student course learning
-  Educator course management
-  Clerk authentication
-  Educator role-based authorization
-  Course management
-  Stripe course payments
-  Course progress tracking
-  Course ratings
-  Cloudinary media uploads
-  MongoDB data storage
-  Clerk and Stripe webhooks
-  Vercel deployment support
