<div align="center">

# 🎓 LMS Full Stack

### Learning Management System

A full-stack Learning Management System built with React, Node.js, Express.js, MongoDB, Clerk, Stripe, and Cloudinary.

<p>
  <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Vite-blue" alt="Frontend">
  <img src="https://img.shields.io/badge/Backend-Node.js%20%2B%20Express-green" alt="Backend">
  <img src="https://img.shields.io/badge/Database-MongoDB-brightgreen" alt="MongoDB">
  <img src="https://img.shields.io/badge/Auth-Clerk-purple" alt="Clerk">
  <img src="https://img.shields.io/badge/Payments-Stripe-blueviolet" alt="Stripe">
</p>

</div>

---

## 📖 About the Project

**LMS Full Stack** is a full-stack Learning Management System that provides separate functionality for students and educators.

Students can browse and purchase courses, access enrolled courses, track their learning progress, and submit ratings.

Educators can create and manage courses, upload course images, view enrolled students, and access dashboard information.

---

## ✨ Features

<table align="center">
<tr>
<th>👨‍🎓 Student</th>
<th>👨‍🏫 Educator</th>
</tr>

<tr>
<td>

- Clerk authentication
- Browse courses
- View course details
- Purchase courses
- Access enrolled courses
- Track course progress
- Update progress
- Rate courses
- Learning interface

</td>

<td>

- Educator authentication
- Role-based authorization
- Create courses
- Upload course images
- View courses
- Educator dashboard
- View enrolled students
- Course management

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

<table align="center">
<tr>
<th>Category</th>
<th>Technologies</th>
</tr>

<tr>
<td><b>Frontend</b></td>
<td>React 18, Vite, React Router, Axios, Tailwind CSS</td>
</tr>

<tr>
<td><b>Authentication</b></td>
<td>Clerk, Clerk Express</td>
</tr>

<tr>
<td><b>Backend</b></td>
<td>Node.js, Express.js</td>
</tr>

<tr>
<td><b>Database</b></td>
<td>MongoDB, Mongoose</td>
</tr>

<tr>
<td><b>Payments</b></td>
<td>Stripe</td>
</tr>

<tr>
<td><b>Media Storage</b></td>
<td>Cloudinary</td>
</tr>

<tr>
<td><b>Development</b></td>
<td>Git, GitHub, Vercel</td>
</tr>
</table>

---

## 🏗️ Project Architecture

<div align="center">

```text
┌───────────────────────┐
│        Student        │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│    React + Vite       │
│      Frontend         │
└───────────┬───────────┘
            │
          Axios
            │
            ▼
┌───────────────────────┐
│  Node.js + Express    │
│       Backend         │
└───────────┬───────────┘
            │
     ┌──────┼──────┐
     ▼      ▼      ▼
 MongoDB  Clerk   Stripe
     │             │
     └──────┬──────┘
            ▼
       Cloudinary
</div>
