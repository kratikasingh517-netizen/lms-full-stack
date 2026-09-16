<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LMS Full Stack - README</title>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    line-height: 1.7;
    color: #24292e;
    background: #ffffff;
    padding: 40px 20px;
    max-width: 980px;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.2em;
    font-weight: 700;
    border-bottom: 2px solid #e1e4e8;
    padding-bottom: 12px;
    margin-bottom: 20px;
    color: #0d1117;
  }

  h2 {
    font-size: 1.6em;
    font-weight: 600;
    border-bottom: 1px solid #e1e4e8;
    padding-bottom: 8px;
    margin-top: 40px;
    margin-bottom: 16px;
    color: #0d1117;
  }

  h3 {
    font-size: 1.25em;
    font-weight: 600;
    margin-top: 28px;
    margin-bottom: 12px;
    color: #0d1117;
  }

  h4 {
    font-size: 1.05em;
    font-weight: 600;
    margin-top: 20px;
    margin-bottom: 10px;
    color: #0d1117;
  }

  p {
    margin-bottom: 16px;
  }

  a {
    color: #0366d6;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 16px 0 24px 0;
    font-size: 0.95em;
  }

  th, td {
    border: 1px solid #d0d7de;
    padding: 10px 14px;
    text-align: left;
  }

  th {
    background-color: #f6f8fa;
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: #f9fafb;
  }

  tr:hover {
    background-color: #f1f3f5;
  }

  pre {
    background-color: #f6f8fa;
    border: 1px solid #d0d7de;
    border-radius: 6px;
    padding: 16px;
    overflow-x: auto;
    margin: 16px 0 24px 0;
    font-size: 0.88em;
    line-height: 1.5;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
  }

  code {
    background-color: rgba(175, 184, 193, 0.2);
    padding: 2px 6px;
    border-radius: 4px;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace;
    font-size: 0.88em;
  }

  pre code {
    background: none;
    padding: 0;
    border-radius: 0;
    font-size: 1em;
  }

  blockquote {
    border-left: 4px solid #d0d7de;
    padding: 8px 16px;
    color: #57606a;
    background: #f6f8fa;
    margin: 16px 0;
    border-radius: 0 6px 6px 0;
  }

  ul, ol {
    margin: 12px 0 20px 24px;
  }

  li {
    margin-bottom: 6px;
  }

  hr {
    border: none;
    border-top: 1px solid #e1e4e8;
    margin: 32px 0;
  }

  .badge {
    display: inline-block;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.8em;
    font-weight: 600;
    margin-right: 6px;
    color: #fff;
  }

  .badge-react { background: #61dafb; color: #000; }
  .badge-node { background: #68a063; }
  .badge-mongo { background: #4db33d; }
  .badge-stripe { background: #635bff; }
  .badge-clerk { background: #6c47ff; }
  .badge-cloudinary { background: #3448c5; }

  .section-anchor {
    scroll-margin-top: 20px;
  }
</style>
</head>
<body>

<h1>LMS Full Stack</h1>

<p>
  <span class="badge badge-react">React</span>
  <span class="badge badge-node">Node.js</span>
  <span class="badge badge-mongo">MongoDB</span>
  <span class="badge badge-clerk">Clerk</span>
  <span class="badge badge-stripe">Stripe</span>
  <span class="badge badge-cloudinary">Cloudinary</span>
</p>

<p>A full-stack Learning Management System (LMS) built with React, Vite, Node.js, Express, MongoDB, Clerk, Stripe, and Cloudinary.</p>

<p>The platform provides separate experiences for students and educators. Students can explore and purchase courses, track their learning progress, and submit ratings. Educators can create and manage courses, view enrolled students, and access dashboard information.</p>

<hr>

<h2 id="toc">📋 Table of Contents</h2>

<table>
  <thead>
    <tr><th>#</th><th>Section</th></tr>
  </thead>
  <tbody>
    <tr><td>1</td><td><a href="#features">Features</a></td></tr>
    <tr><td>2</td><td><a href="#tech-stack">Tech Stack</a></td></tr>
    <tr><td>3</td><td><a href="#project-structure">Project Structure</a></td></tr>
    <tr><td>4</td><td><a href="#architecture">Application Architecture</a></td></tr>
    <tr><td>5</td><td><a href="#auth">Authentication</a></td></tr>
    <tr><td>6</td><td><a href="#api">API Documentation</a></td></tr>
    <tr><td>7</td><td><a href="#stripe">Stripe Integration</a></td></tr>
    <tr><td>8</td><td><a href="#webhooks">Webhooks</a></td></tr>
    <tr><td>9</td><td><a href="#cloudinary">Cloudinary</a></td></tr>
    <tr><td>10</td><td><a href="#mongodb">MongoDB</a></td></tr>
    <tr><td>11</td><td><a href="#env">Environment Variables</a></td></tr>
    <tr><td>12</td><td><a href="#installation">Installation</a></td></tr>
    <tr><td>13</td><td><a href="#running">Running the Full Project</a></td></tr>
    <tr><td>14</td><td><a href="#user-flow">Main User Flow</a></td></tr>
    <tr><td>15</td><td><a href="#deployment">Deployment</a></td></tr>
    <tr><td>16</td><td><a href="#security">Security</a></td></tr>
    <tr><td>17</td><td><a href="#checklist">Development Checklist</a></td></tr>
    <tr><td>18</td><td><a href="#troubleshooting">Troubleshooting</a></td></tr>
    <tr><td>19</td><td><a href="#screenshots">Screenshots</a></td></tr>
    <tr><td>20</td><td><a href="#future">Future Improvements</a></td></tr>
    <tr><td>21</td><td><a href="#contributing">Contributing</a></td></tr>
    <tr><td>22</td><td><a href="#license">License</a></td></tr>
    <tr><td>23</td><td><a href="#author">Author</a></td></tr>
  </tbody>
</table>

<hr>

<h2 id="features" class="section-anchor">🚀 Features</h2>

<h3>👨‍🎓 Student Features</h3>

<table>
  <thead>
    <tr><th>Feature</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>User Authentication</td><td>Secure authentication with Clerk</td></tr>
    <tr><td>Browse Courses</td><td>Explore all available courses</td></tr>
    <tr><td>Course Details</td><td>View individual course details</td></tr>
    <tr><td>Purchase Courses</td><td>Buy courses using Stripe</td></tr>
    <tr><td>Enrolled Courses</td><td>View all enrolled courses</td></tr>
    <tr><td>Track Progress</td><td>Monitor course learning progress</td></tr>
    <tr><td>Update Progress</td><td>Update course progress</td></tr>
    <tr><td>View Progress</td><td>View current course progress</td></tr>
    <tr><td>Rate Courses</td><td>Submit ratings for courses</td></tr>
    <tr><td>Learning Interface</td><td>Dedicated student learning interface</td></tr>
    <tr><td>Video/Content Support</td><td>Course video and content support</td></tr>
  </tbody>
</table>

<h3>👨‍🏫 Educator Features</h3>

<table>
  <thead>
    <tr><th>Feature</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>Authentication</td><td>Educator authentication and authorization</td></tr>
    <tr><td>Role Upgrade</td><td>Upgrade user role to educator</td></tr>
    <tr><td>Dashboard</td><td>Access educator dashboard</td></tr>
    <tr><td>Create Courses</td><td>Create and publish new courses</td></tr>
    <tr><td>Upload Images</td><td>Upload course images</td></tr>
    <tr><td>View Courses</td><td>View educator's own courses</td></tr>
    <tr><td>View Students</td><td>View enrolled students</td></tr>
    <tr><td>Manage Content</td><td>Manage course content</td></tr>
  </tbody>
</table>

<hr>

<h2 id="tech-stack" class="section-anchor">🛠️ Tech Stack</h2>

<h3>Frontend</h3>

<table>
  <thead>
    <tr><th>Technology</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td>React 18</td><td>UI development</td></tr>
    <tr><td>Vite</td><td>Frontend tooling</td></tr>
    <tr><td>React Router</td><td>Client-side routing</td></tr>
    <tr><td>Clerk React</td><td>Authentication</td></tr>
    <tr><td>Axios</td><td>API requests</td></tr>
    <tr><td>Tailwind CSS</td><td>Styling</td></tr>
    <tr><td>Quill</td><td>Rich text/course content editor</td></tr>
    <tr><td>React YouTube</td><td>YouTube/video integration</td></tr>
    <tr><td>RC Progress</td><td>Progress indicators</td></tr>
    <tr><td>React Simple Star Rating</td><td>Course ratings</td></tr>
    <tr><td>React Toastify</td><td>Notifications</td></tr>
    <tr><td>Humanize Duration</td><td>Duration formatting</td></tr>
    <tr><td>Uniqid</td><td>Unique ID generation</td></tr>
  </tbody>
</table>

<h3>Backend</h3>

<table>
  <thead>
    <tr><th>Technology</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td>Node.js</td><td>Backend runtime</td></tr>
    <tr><td>Express.js</td><td>REST API</td></tr>
    <tr><td>MongoDB</td><td>Database</td></tr>
    <tr><td>Mongoose</td><td>MongoDB ODM</td></tr>
    <tr><td>Clerk Express</td><td>Authentication</td></tr>
    <tr><td>Stripe</td><td>Payments</td></tr>
    <tr><td>Cloudinary</td><td>Media storage</td></tr>
    <tr><td>Multer</td><td>File uploads</td></tr>
    <tr><td>CORS</td><td>Cross-origin requests</td></tr>
    <tr><td>dotenv</td><td>Environment variables</td></tr>
    <tr><td>Svix</td><td>Webhook support</td></tr>
    <tr><td>bcrypt</td><td>Password hashing support</td></tr>
    <tr><td>JSON Web Token</td><td>Token-based authentication support</td></tr>
    <tr><td>Nodemon</td><td>Development server</td></tr>
  </tbody>
</table>

<hr>

<h2 id="project-structure" class="section-anchor">📁 Project Structure</h2>

<pre><code>lms-full-stack/
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
└── README.md</code></pre>

<hr>

<h2 id="architecture" class="section-anchor">🏗️ Application Architecture</h2>

<p>The project follows a separate frontend/backend architecture.</p>

<pre><code>                    ┌─────────────────────┐
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
                          Cloudinary</code></pre>

<hr>

<h2 id="auth" class="section-anchor">🔐 Authentication</h2>

<p>Authentication is implemented using Clerk.</p>

<table>
  <thead>
    <tr><th>Layer</th><th>Technology</th></tr>
  </thead>
  <tbody>
    <tr><td>Frontend</td><td><code>@clerk/clerk-react</code></td></tr>
    <tr><td>Backend</td><td><code>@clerk/express</code></td></tr>
  </tbody>
</table>

<p>Clerk middleware is registered in the Express application:</p>

<pre><code>app.use(clerkMiddleware());</code></pre>

<p>This allows authenticated user information to be accessed from backend requests.</p>

<h3>👨‍🏫 Educator Authorization</h3>

<p>Educator-only routes are protected using the <code>protectEducator</code> middleware.</p>

<p>The middleware retrieves the authenticated Clerk user and checks:</p>

<pre><code>response.publicMetadata.role === 'educator';</code></pre>

<p>Only users with the educator role can access protected educator operations.</p>

<table>
  <thead>
    <tr><th>Role</th><th>Access</th></tr>
  </thead>
  <tbody>
    <tr><td><code>educator</code></td><td>Allowed</td></tr>
    <tr><td>Other</td><td>Unauthorized</td></tr>
  </tbody>
</table>

<pre><code>Authenticated User
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
 Allow    Unauthorized</code></pre>

<hr>

<h2 id="api" class="section-anchor">📚 API Documentation</h2>

<p>The backend exposes REST APIs under the following prefixes:</p>

<table>
  <thead>
    <tr><th>Prefix</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>/api/educator</code></td><td>Educator operations</td></tr>
    <tr><td><code>/api/course</code></td><td>Course operations</td></tr>
    <tr><td><code>/api/user</code></td><td>User operations</td></tr>
  </tbody>
</table>

<h3>👨‍🏫 Educator API</h3>

<p><strong>Base URL:</strong> <code>/api/educator</code></p>

<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Description</th><th>Protection</th></tr>
  </thead>
  <tbody>
    <tr><td>GET</td><td><code>/update-role</code></td><td>Update user role to educator</td><td>Clerk</td></tr>
    <tr><td>POST</td><td><code>/add-course</code></td><td>Create a new course</td><td>Educator</td></tr>
    <tr><td>GET</td><td><code>/courses</code></td><td>Get educator courses</td><td>Educator</td></tr>
    <tr><td>GET</td><td><code>/dashboard</code></td><td>Get educator dashboard data</td><td>Educator</td></tr>
    <tr><td>GET</td><td><code>/enrolled-students</code></td><td>Get enrolled students data</td><td>Educator</td></tr>
  </tbody>
</table>

<h4>Add Course</h4>

<pre><code>POST /api/educator/add-course</code></pre>

<p>The endpoint accepts a course image through <code>multipart/form-data</code>. The image field is <code>image</code>.</p>

<p>Multer handles the uploaded file before the request reaches the course controller.</p>

<h3>📖 Course API</h3>

<p><strong>Base URL:</strong> <code>/api/course</code></p>

<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>GET</td><td><code>/all</code></td><td>Get all courses</td></tr>
    <tr><td>GET</td><td><code>/:id</code></td><td>Get course details by ID</td></tr>
  </tbody>
</table>

<h4>Get All Courses</h4>

<pre><code>GET /api/course/all</code></pre>

<h4>Get Course By ID</h4>

<pre><code>GET /api/course/:id</code></pre>

<h3>👤 User API</h3>

<p><strong>Base URL:</strong> <code>/api/user</code></p>

<table>
  <thead>
    <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>GET</td><td><code>/data</code></td><td>Get user data</td></tr>
    <tr><td>POST</td><td><code>/purchase</code></td><td>Purchase a course</td></tr>
    <tr><td>GET</td><td><code>/enrolled-courses</code></td><td>Get enrolled courses</td></tr>
    <tr><td>POST</td><td><code>/update-course-progress</code></td><td>Update course progress</td></tr>
    <tr><td>POST</td><td><code>/get-course-progress</code></td><td>Get course progress</td></tr>
    <tr><td>POST</td><td><code>/add-rating</code></td><td>Add course rating</td></tr>
  </tbody>
</table>

<hr>

<h2 id="stripe" class="section-anchor">💳 Stripe Integration</h2>

<p>Stripe is used for course purchasing.</p>

<p>The backend exposes a Stripe webhook endpoint:</p>

<pre><code>POST /stripe</code></pre>

<p>The webhook uses:</p>

<pre><code>express.raw({ type: 'application/json' });</code></pre>

<p>This preserves the raw request body required for Stripe webhook verification/processing.</p>

<h3>Payment Flow</h3>

<pre><code>Student
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
Update Enrollment / Purchase Data</code></pre>

<hr>

<h2 id="webhooks" class="section-anchor">🔔 Webhooks</h2>

<p>The backend handles two webhook integrations.</p>

<table>
  <thead>
    <tr><th>Webhook</th><th>Endpoint</th><th>Handler</th></tr>
  </thead>
  <tbody>
    <tr><td>Clerk Webhook</td><td><code>POST /clerk</code></td><td><code>clerkWebhooks</code></td></tr>
    <tr><td>Stripe Webhook</td><td><code>POST /stripe</code></td><td><code>stripeWebhooks</code></td></tr>
  </tbody>
</table>

<p>Both webhook handlers are implemented in <code>server/controllers/webhooks.js</code>.</p>

<hr>

<h2 id="cloudinary" class="section-anchor">☁️ Cloudinary</h2>

<p>Cloudinary is used for cloud-based media storage.</p>

<p><strong>Configuration:</strong> <code>server/configs/cloudinary.js</code></p>

<p>Course images are uploaded using: <strong>Multer → Cloudinary</strong></p>

<p>The general flow is:</p>

<pre><code>Frontend
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
Course Data</code></pre>

<hr>

<h2 id="mongodb" class="section-anchor">🗄️ MongoDB</h2>

<p>The application uses MongoDB as its primary database.</p>

<table>
  <thead>
    <tr><th>Item</th><th>Location</th></tr>
  </thead>
  <tbody>
    <tr><td>MongoDB Config</td><td><code>server/configs/mongodb.js</code></td></tr>
    <tr><td>ODM</td><td>Mongoose</td></tr>
    <tr><td>Initialization</td><td>On Express app start</td></tr>
  </tbody>
</table>

<p>Mongoose is used to interact with MongoDB. Database initialization happens when the Express application starts.</p>

<hr>

<h2 id="env" class="section-anchor">⚙️ Environment Variables</h2>

<p>Create environment files locally for the required credentials and configuration.</p>

<blockquote>⚠️ Do not commit secrets to GitHub.</blockquote>

<h3>Server Environment</h3>

<p>Create <code>server/.env</code> with the following variables:</p>

<table>
  <thead>
    <tr><th>Variable</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>PORT</code></td><td>Server port (e.g., 5000)</td></tr>
    <tr><td><code>MONGODB_URI</code></td><td>MongoDB connection string</td></tr>
    <tr><td><code>CLERK_SECRET_KEY</code></td><td>Clerk secret key</td></tr>
    <tr><td><code>CLERK_WEBHOOK_SECRET</code></td><td>Clerk webhook secret</td></tr>
    <tr><td><code>STRIPE_SECRET_KEY</code></td><td>Stripe secret key</td></tr>
    <tr><td><code>STRIPE_WEBHOOK_SECRET</code></td><td>Stripe webhook secret</td></tr>
    <tr><td><code>CLOUDINARY_CLOUD_NAME</code></td><td>Cloudinary cloud name</td></tr>
    <tr><td><code>CLOUDINARY_API_KEY</code></td><td>Cloudinary API key</td></tr>
    <tr><td><code>CLOUDINARY_API_SECRET</code></td><td>Cloudinary API secret</td></tr>
  </tbody>
</table>

<pre><code>PORT=5000

MONGODB_URI=your_mongodb_connection_string

CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret

STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret</code></pre>

<p>Use the exact variable names expected by your configuration files. The names above are examples of the required configuration categories.</p>

<h3>Client Environment</h3>

<p>Create <code>client/.env</code> with the following variables:</p>

<table>
  <thead>
    <tr><th>Variable</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>VITE_CLERK_PUBLISHABLE_KEY</code></td><td>Clerk publishable key</td></tr>
    <tr><td><code>VITE_API_URL</code></td><td>Backend API URL</td></tr>
  </tbody>
</table>

<pre><code>VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=your_backend_url</code></pre>

<blockquote>🔒 Never expose secret keys in the client-side environment.</blockquote>

<hr>

<h2 id="installation" class="section-anchor">📦 Installation</h2>

<p>Clone the repository:</p>

<pre><code>git clone &lt;YOUR_REPOSITORY_URL&gt;</code></pre>

<p>Move into the project:</p>

<pre><code>cd lms-full-stack</code></pre>

<h3>Frontend Installation</h3>

<table>
  <thead>
    <tr><th>Command</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>cd client</code></td><td>Move into client directory</td></tr>
    <tr><td><code>npm install</code></td><td>Install dependencies</td></tr>
    <tr><td><code>npm run dev</code></td><td>Start development server</td></tr>
    <tr><td><code>npm run build</code></td><td>Build production frontend</td></tr>
    <tr><td><code>npm run preview</code></td><td>Preview production build</td></tr>
    <tr><td><code>npm run lint</code></td><td>Run ESLint</td></tr>
  </tbody>
</table>

<pre><code>cd client
npm install
npm run dev</code></pre>

<h3>Backend Installation</h3>

<table>
  <thead>
    <tr><th>Command</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td><code>cd server</code></td><td>Move into server directory</td></tr>
    <tr><td><code>npm install</code></td><td>Install dependencies</td></tr>
    <tr><td><code>npm run server</code></td><td>Start development server (Nodemon)</td></tr>
    <tr><td><code>npm start</code></td><td>Start production server</td></tr>
  </tbody>
</table>

<pre><code>cd server
npm install
npm run server</code></pre>

<hr>

<h2 id="running" class="section-anchor">▶️ Running the Full Project</h2>

<p>Run the backend first:</p>

<pre><code>cd server
npm install
npm run server</code></pre>

<p>Then start the frontend in another terminal:</p>

<pre><code>cd client
npm install
npm run dev</code></pre>

<p>The frontend communicates with the Express backend through HTTP API requests.</p>

<hr>

<h2 id="user-flow" class="section-anchor">🔄 Main User Flow</h2>

<h3>Student Flow</h3>

<pre><code>Register / Login with Clerk
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
       Add Rating</code></pre>

<h3>Educator Flow</h3>

<pre><code>Login with Clerk
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
View Enrolled Students</code></pre>

<hr>

<h2 class="section-anchor">🧩 Backend Folder Responsibilities</h2>

<table>
  <thead>
    <tr><th>Folder</th><th>Responsibility</th></tr>
  </thead>
  <tbody>
    <tr><td><code>configs/</code></td><td>External service configuration</td></tr>
    <tr><td><code>controllers/</code></td><td>Backend business logic</td></tr>
    <tr><td><code>middlewares/</code></td><td>Reusable Express middleware</td></tr>
    <tr><td><code>models/</code></td><td>MongoDB/Mongoose models</td></tr>
    <tr><td><code>routes/</code></td><td>Express route definitions</td></tr>
  </tbody>
</table>

<h3><code>configs/</code></h3>

<pre><code>configs/
├── cloudinary.js
├── mongodb.js
└── multer.js</code></pre>

<h3><code>controllers/</code></h3>

<pre><code>controllers/
├── courseController.js
├── educatorController.js
├── userController.js
└── webhooks.js</code></pre>

<h3><code>middlewares/</code></h3>

<pre><code>authMiddleware.js</code></pre>

<p>The middleware currently includes educator route protection.</p>

<h3><code>routes/</code></h3>

<pre><code>routes/
├── courseRoute.js
├── educatorRoutes.js
└── userRoutes.js</code></pre>

<hr>

<h2 class="section-anchor">🎨 Frontend Structure</h2>

<p>The React application is organized into reusable components, shared context, assets, and role-specific pages.</p>

<pre><code>client/src/
│
├── assets/
│
├── components/
│
├── context/
│
└── pages/
    ├── educator/
    └── student/</code></pre>

<table>
  <thead>
    <tr><th>Folder</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr><td><code>components/</code></td><td>Reusable React UI components</td></tr>
    <tr><td><code>context/</code></td><td>Application-level React Context/state management</td></tr>
    <tr><td><code>pages/student/</code></td><td>Student-specific pages and functionality</td></tr>
    <tr><td><code>pages/educator/</code></td><td>Educator-specific pages and functionality</td></tr>
    <tr><td><code>assets/</code></td><td>Frontend assets such as images and static resources</td></tr>
  </tbody>
</table>

<hr>

<h2 id="deployment" class
