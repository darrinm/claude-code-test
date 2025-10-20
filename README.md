# React Demo App

A showcase of interactive React components built with Vite, featuring modern styling and responsive design.

## Features

### Counter Component
- Increment/decrement functionality
- Reset button
- Beautiful gradient purple design with smooth animations

### Todo List Component
- Add new todos with Enter key or button
- Mark items as complete with checkboxes
- Delete todos
- Gradient pink design with hover effects

## Tech Stack

- React 19
- Vite 7
- Modern CSS with gradients and animations
- ES6+ JavaScript

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This app is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push changes to any branch (including `claude/*` branches)
2. GitHub Actions will automatically build and deploy
3. Enable GitHub Pages in repository settings:
   - Go to Settings > Pages
   - Source: "GitHub Actions"

### Manual Deployment

```bash
# Deploy to GitHub Pages manually
npm run deploy
```

## Project Structure

```
src/
├── components/
│   ├── Counter.jsx       # Counter component
│   ├── Counter.css       # Counter styles
│   ├── TodoList.jsx      # Todo list component
│   └── TodoList.css      # Todo list styles
├── App.jsx               # Main app component
├── App.css               # Main app styles
└── main.jsx              # Entry point
```

## Live Demo

Once deployed, the app will be available at:
`https://[your-username].github.io/claude-code-test/`

---

Built with React + Vite
