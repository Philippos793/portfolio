# Philippos Tsikouras — Portfolio

Personal portfolio website showcasing my projects, skills and education as a full-stack developer.

Built as a single-page application with **React** and **Vite**, with client-side routing and component-scoped styling.

![Home page](docs/home.png)

## Features

- **Multi-page SPA** with React Router: Home, Projects, Skills, Contact and a 404 page
- **Active navigation** — the current page is highlighted in the navbar
- **Data-driven content** — projects, skills, education and contact details live in `src/data`, so the UI updates without touching components
- **Reusable components** such as `Section` and `ProjectCard`, built with composition (`children`)
- **Responsive layout** with CSS Grid, `clamp()` typography and mobile breakpoints
- **Light / dark colour scheme** that follows the operating system preference
- **Accessible markup** — semantic HTML, heading hierarchy and descriptive `alt` text

## Tech Stack

| Area      | Technology                        |
| --------- | --------------------------------- |
| UI        | React 19                          |
| Build     | Vite                              |
| Routing   | React Router                      |
| Styling   | CSS Modules, CSS custom properties |
| Linting   | Oxlint                            |

## Screenshots

### Projects
![Projects page](docs/projects.png)

### Skills
![Skills page](docs/skills.png)

## Project Structure

```
src/
  components/   Reusable UI components (Navbar, Hero, Section, ProjectCard, ...)
  pages/        Route-level pages (Home, Contact, NotFound)
  data/         Content: projects, skills, education, contact details
  assets/       Project screenshots
  index.css     Global styles and design tokens
```

## Getting Started

**Prerequisites:** Node.js 20.19+ or 22.12+

```bash
# install dependencies
npm install

# start the development server
npm run dev

# lint the code
npm run lint

# create a production build in dist/
npm run build

# preview the production build locally
npm run preview
```

## Contact

- **Email:** [philipos793@gmail.com](mailto:philipos793@gmail.com)
- **LinkedIn:** [linkedin.com/in/philippos-tsikouras](https://www.linkedin.com/in/philippos-tsikouras)
- **GitHub:** [github.com/Philippos793](https://github.com/Philippos793)
