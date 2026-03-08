# Promptly — Master Prompt Engineering

**Promptly** is a developer learning platform for mastering prompt engineering through structured lessons, an interactive playground, and hands-on challenges.

🌐 **Live Site**: [https://suyasha7.github.io/Promptly](https://suyasha7.github.io/Promptly)

---

## ✨ Features

- **Structured Modules** — Learn prompt engineering from foundations to advanced techniques
- **Interactive Playground** — Experiment with prompts in real time
- **Challenges** — Practice what you've learned with guided exercises
- **Dashboard** — Track your learning progress
- **Documentation** — Quick-reference guides and best practices

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | React 18                            |
| Build Tool  | Vite 6                              |
| Styling     | Tailwind CSS 4                      |
| Routing     | React Router 6 (HashRouter)         |
| Markdown    | react-markdown + remark/rehype      |
| Icons       | Lucide React                        |
| Deployment  | GitHub Pages via GitHub Actions     |

## 🚀 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Local Development

```bash
# Clone the repository
git clone https://github.com/Suyasha7/Promptly.git
cd Promptly

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`.

### Production Build

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
promptly/
├── .github/workflows/   # GitHub Actions CI/CD
├── src/
│   ├── components/      # Reusable UI components
│   ├── config/          # App configuration (sections.json)
│   ├── content/         # Markdown lesson content
│   ├── lib/             # Context providers & utilities
│   ├── pages/           # Page-level components
│   ├── router/          # App routing (HashRouter)
│   ├── services/        # Content loading service
│   └── styles/          # Global CSS
├── index.html           # Entry HTML
├── vite.config.js       # Vite configuration
└── package.json
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
