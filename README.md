# 🎓 Scholarly - Your Smart Scholarship Finder

![Scholarly Logo](https://scholarly-sooty.vercel.app/logo.png)

Welcome to **Scholarly**, a powerful web application designed to help students discover scholarships that match their academic achievements and personal criteria. With a robust API and an intuitive UI, finding the right scholarships has never been easier!

## 📜 Table of Contents

- [🚀 Features](#-features)
- [🎥 Live Demo](#-live-demo)
- [🛠️ Tech Stack](#-tech-stack)
- [📚 API Documentation](#-api-documentation)
- [💻 Installation & Usage](#-installation--usage)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)
- [📞 Contact](#-contact)

---

## 🚀 Features

✨ **Smart Scholarship Search** – Find scholarships based on academic performance, caste category, and more.  
🔍 **Powerful Public API** – Use our API to integrate scholarship search into your own projects.  
📊 **Comprehensive Details** – Get full information, including provider, amount, deadlines, and eligibility.  
🖥️ **Interactive UI** – A seamless user experience with a clean, responsive design.  
⚡ **Fast & Secure** – Built with cutting-edge technologies for speed and reliability.

---

## 🎥 Live Demo

🔗 [Try Scholarly Now](https://scholarly-sooty.vercel.app)

---

## 🛠️ Tech Stack

- **Frontend:** ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=flat&logo=typescript&logoColor=white) ![Next.js](https://img.shields.io/badge/-Next.js-000000?style=flat&logo=next.js&logoColor=white)
- **Backend:** ![Spring Boot](https://img.shields.io/badge/-Spring%20Boot-6DB33F?style=flat&logo=spring-boot&logoColor=white)
- **Database:** ![PostgreSQL](https://img.shields.io/badge/-PostgreSQL-336791?style=flat&logo=postgresql&logoColor=white)
- **Deployment:** ![Vercel](https://img.shields.io/badge/-Vercel-000000?style=flat&logo=vercel&logoColor=white)

---

## 📚 API Documentation

📌 **Base URL:** `https://scholarly-sooty.vercel.app/api`

### 🏆 Scholarship Search Endpoint

```http
GET /api/v1/get-all-scholarships
```

```http
POST /api/v1/find-scholarships
```

🔹 **Parameters:**

- `ssc` – SSC percentage
- `hsc` – HSC percentage
- `caste` – Category (General, OBC, SC, ST, etc.)

### Example :

```

{
    "name": "Vinay",
    "hsc_marks": 88,
    "ssc_marks": 77,
    "graduation_marks": 99,
    "caste_category": "General"
}
```

---

## 💻 Installation & Usage

### 🔧 Prerequisites

- Node.js & npm

### 🏗️ Setup

```sh
git clone https://github.com/vinay-th/Scholarly.git
cd Scholarly
npm install
```

### 🚀 Running Locally

```sh
npm run dev
```

---

## 🤝 Contributing

We welcome contributions! Follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes and commit: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature-branch`
5. Open a Pull Request.

📌 [Contribution Guidelines](https://github.com/vinay-th/Scholarly/blob/main/CONTRIBUTING.md)

---

## 📜 License

📝 This project is licensed under the **MIT License** – see the [LICENSE](https://github.com/vinay-th/Scholarly/blob/main/LICENSE) file for details.

---

## 📞 Contact

💬 **Have questions or suggestions?**  
📧 Email: [vinaythakor.5025@gmail.com](mailto:vinaythakor.5025@gmail.com)  
🐦 Twitter: [@code_with_vinay](https://twitter.com/code_with_vinay)  
👥 LinkedIn: [Vinay Thakor](https://www.linkedin.com/in/vinay-thakor)

---

## Give **Scholarly** a ⭐ on GitHub and help more students find the scholarships they deserve!

<div align="center">
  <h3>Built with ❤️ by Vinay</h3>
</div>
