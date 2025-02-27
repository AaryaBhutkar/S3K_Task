# S3K Frontend UI Task

## Overview
A React-based medical reports management system that enables viewing PDF reports, tracking completion status, and generating summaries.

## 🚀 Features

### Home Page
- Medical reports overview dashboard
- Quick navigation interface
- Responsive design with Tailwind CSS

### Dashboard
- **Completion Tracker**: Track and manage report status
- **PDF Viewer**: View medical reports in real-time
- **Summary Generator**: Create formatted report summaries

## 🛠 Tech Stack

- **Frontend**: React.js
- **Routing**: React Router DOM
- **PDF Handling**: React-PDF
- **Rich Text**: React-Quill
- **Styling**: Tailwind CSS

## ⚙️ Prerequisites

- Node.js (v14+)
- npm (v6+)
- Modern web browser

## 🚀 Quick Start

1. **Clone the repository**
```bash
git clone https://github.com/AaryaBhutkar/S3K_Task.git
cd S3K_Task
```

2. **Install dependencies**
```bash
cd uipage
npm install
```

3. **Set up PDF files**
- Create reports directory:
```bash
mkdir -p public/reports
```
- Add your PDF files:
  - report1.pdf
  - report2.pdf
  - report3.pdf

4. **Start development server**
```bash
npm start
```

Visit `http://localhost:3000` in your browser

## 📁 Project Structure

```
uipage/
├── public/
│   └── reports/          # PDF storage
├── src/
│   ├── components/       # Reusable components
│   ├── pages/           # Page components
│   ├── App.js           # Root component
│   └── index.js         # Entry point
└── package.json         # Dependencies
```

## 🧩 Components

### CompletionTracker
- Report listing
- Status tracking
- File selection

### FileViewer
- PDF rendering
- Page navigation
- File information

### TextEditor
- Rich text formatting
- Summary creation
- Auto-save feature

## 🎨 Styling

Built with Tailwind CSS featuring:
- Responsive design
- Custom purple theme
- Modern UI components

## 📜 Available Scripts

```bash
npm start    # Development server


## 🤝 Contributing

1. Fork the repo
2. Create feature branch (`git checkout -b feature/NewFeature`)
3. Commit changes (`git commit -m 'Add NewFeature'`)
4. Push to branch (`git push origin feature/NewFeature`)
5. Open Pull Request

## 🙏 Acknowledgments

- [Create React App](https://create-react-app.dev/)
- [React-PDF](https://react-pdf.org/)
- [React-Quill](https://github.com/zenoamaro/react-quill)
- [Tailwind CSS](https://tailwindcss.com/)

