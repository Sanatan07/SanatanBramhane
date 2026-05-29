# Sanatan Bramhane Portfolio

A security-themed personal portfolio built to showcase software engineering work, application security experience, and VAPT-focused projects through an interactive React interface.

## Tech Stack

### Core Frontend

- React 19 for building the component-based user interface
- React DOM for rendering the app in the browser
- Create React App (`react-scripts`) for the development and build setup

### Styling and UI

- Custom CSS for the portfolio's visual identity and section-specific styling
- Bootstrap 5 for layout utilities and responsive UI support
- React Bootstrap for Bootstrap-based React components
- Lucide React and React Icons for modern iconography

### Animations and Visual Effects

- `react-type-animation` for animated hero text
- `react-snowfall` for the snowfall overlay effect
- Intersection Observer API for section reveal animations

### 3D and Interactive Background

- Three.js as the 3D rendering engine
- `@react-three/fiber` to use Three.js in React
- `@react-three/drei` for helpers like `Stars` and `OrbitControls`

### Contact and Integrations

- EmailJS (`@emailjs/browser`) for the contact form email workflow

### Tooling

- Tailwind CSS, PostCSS, and Autoprefixer are installed in the project tooling setup
- Testing Library and Jest DOM are included for frontend testing support
- Web Vitals for performance measurement

## Project Highlights

- Interactive single-page portfolio with dedicated sections for home, about, projects, skills, experience, education, and contact
- 3D animated background and motion-enhanced visual presentation
- Responsive layout for desktop and mobile screens
- Contact form integration using EmailJS
- Security-oriented branding and content presentation

## Folder Structure

```text
src/
  App.js
  index.js
  components/
  assets/
public/
  index.html
  manifest.json
```

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
npm install
```

### Run in Development

```bash
npm start
```

The app will run locally at `http://localhost:3000`.

### Build for Production

```bash
npm run build
```

### Run Tests

```bash
npm test
```

## Notes

- The contact form uses EmailJS credentials configured in the source code.
- Bootstrap styles are imported globally in the app entry flow.
- The project currently uses Create React App as its build foundation.

## Author

Sanatan Bramhane  
GitHub: [Sanatan07](https://github.com/Sanatan07)
