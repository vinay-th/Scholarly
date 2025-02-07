# 🤝 Contributing to Scholarly

Thank you for considering contributing to **Scholarly**! We appreciate your help in making this project better. Please take a moment to review the following guidelines before you start contributing.

## 📔 Database improvement

I would really appreciate if you help me update the database with real data from internet, for that you need to scrape the net with scholarship details and provide that data in sql insert command format like:

```
INSERT INTO scholarships (name, description, provider, amount, deadline, url) VALUES
-- Scholarships from Webpage 1
('Vyasakabi Fakirmohan Bhasabruti Scholarship 2025', 'Partial funding for residents of Odisha pursuing any subject.', 'Government of India', 20000, '2025-01-22 23:59:59', 'https://www.wemakescholars.com/other/government-of-india/scholarships');
```

```
INSERT INTO eligibility_criteria (scholarship_id, min_ssc, min_hsc, min_graduation, caste_category, created_at) VALUES
(1, 50, 50, 0, 'General', NOW()),

```

You can mail me the data on:

📧 Email: [vinaythakor.5025@gmail.com](mailto:vinaythakor.5025@gmail.com)

## 📝 How to Contribute

1. **Fork the Repository**

   - Click on the 'Fork' button on the top right of the repository page.
   - Clone your forked repository to your local machine:
     ```sh
     git clone https://github.com/vinay-th/Scholarly.git
     ```
   - Navigate to the project directory:
     ```sh
     cd Scholarly
     ```

2. **Create a New Branch**

   - Use a descriptive name for your branch:
     ```sh
     git checkout -b feature-branch-name
     ```

3. **Make Your Changes**

   - Ensure your code follows the project’s coding standards.
   - Keep your changes focused and well-documented.
   - Test your code before committing.

4. **Commit Your Changes**

   - Write meaningful commit messages:
     ```sh
     git commit -m "Add new feature: description"
     ```

5. **Push to Your Fork**

   ```sh
   git push origin feature-branch-name
   ```

6. **Create a Pull Request**
   - Go to the original repository on GitHub.
   - Click on 'New Pull Request'.
   - Provide a clear title and description of your changes.
   - Submit your pull request for review.

## ✅ Code of Conduct

By participating in this project, you agree to uphold our [Code of Conduct](CODE_OF_CONDUCT.md).

## 🛠 Development Guidelines

- Follow clean coding principles.
- Ensure your changes do not break existing functionality.
- Write meaningful commit messages and documentation.
- Run tests before submitting a pull request.

## 💬 Need Help?

If you have any questions or need clarification, feel free to open an issue or reach out to us!

🚀 Happy coding and thank you for contributing to Scholarly!
