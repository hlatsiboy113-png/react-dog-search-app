# Dog Finder

> **Discover, search, and save your favourite dog breeds.**

Dog Finder is a modern, responsive React application that allows users to browse, search, and explore dog breeds using a public REST API. The project demonstrates modern frontend development practices through reusable React components, Context API for shared state management, API integration, and responsive UI design.

---

## 📑 Table of Contents

- Overview
- Features
- Tech Stack
- Screenshots
- Application Architecture
- State Management
- API Integration
- Installation
- Usage
- Project Structure
- Team & Responsibilities
- Challenges
- Learning Outcomes
- Future Improvements
- Contributing
- License
- Acknowledgements

---

# Overview

Dog Finder was developed as a collaborative React project to demonstrate component-based architecture, state management using the Context API, and integration with a public REST API.

The application enables users to discover dog breeds, search by breed name, view breed details, save favourites, and enjoy a clean, responsive interface.

---

# Features

| Feature | Description |
|----------|-------------|
| Breed Search | Search dog breeds instantly |
| Dog Gallery | Browse dog breeds in a responsive grid |
| Favorites | Save and remove favourite dogs |
| Breed Details | View detailed breed information |
| REST API | Fetch real-time dog data |
| Context API | Share state across multiple components |
| Reusable Components | Modular and maintainable UI |
| Loading States | Display loading spinner while fetching |
| Error Handling | User-friendly error messages |
| Responsive Design | Optimized for desktop, tablet and mobile |

---

# Tech Stack

### Frontend

- React
- Vite
- JavaScript (ES6+)
- CSS3

### State Management

- React Context API

### API

- Public Dog REST API
- Fetch API

### Development Tools

- Git
- GitHub
- VS Code

---

# Screenshots

> Add screenshots after development.

### Home Page

```
Home page screenshot
```

---

### Dog Listing

```
Dog listing screenshot
```

---

### Dog Details

```
Dog details screenshot
```

---

### Favorites

```
Favorites screenshot
```

---

# Application Architecture

```
App
│
├── DogContext
│
├── Navbar
├── SearchBar
├── ResultsHeader
├── DogGrid
│      └── DogCard
├── DogDetails
├── Favorites
├── LoadingSpinner
├── ErrorMessage
└── Footer
```

The application follows a component-based architecture where reusable components consume shared data from the Context Provider.

---

# State Management

Global state is managed using the **React Context API**.

### Shared State

| State | Purpose | Components |
|---------|---------|------------|
| dogs | Stores fetched dog breeds | DogGrid, DogCard, DogDetails |
| searchTerm | Stores search input | SearchBar, ResultsHeader, DogGrid |
| favorites | Stores favourite dogs | Navbar, Favorites, DogCard |
| loading | Indicates API loading | LoadingSpinner, DogGrid |
| error | Displays API errors | ErrorMessage, DogGrid |

Using Context eliminates unnecessary prop drilling while keeping the application organized.

---

# API Integration

The application consumes data from a public Dog REST API.

Example API Request

```javascript
GET /breeds
```

The API is used to:

- Retrieve dog breeds
- Display breed images
- Display breed information
- Search breeds

---

#  Installation

Clone the repository

```bash
git clone https://github.com/your-username/dog-finder-react.git
```

Navigate into the project

```bash
cd dog-finder-react
```

Install dependencies

```bash
npm install
```

Start the development server

```bash
npm run dev
```

Open

```
http://localhost:5173
```

---

# 💻 Usage

1. Search for a dog breed.
2. Browse available breeds.
3. View detailed breed information.
4. Save favourite dogs.
5. Remove favourites when no longer needed.

---

# Project Structure

```
src
│
├── assets
│
├── components
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── ResultsHeader.jsx
│   ├── DogGrid.jsx
│   ├── DogCard.jsx
│   ├── DogDetails.jsx
│   ├── Favorites.jsx
│   ├── FavoriteButton.jsx
│   ├── LoadingSpinner.jsx
│   ├── ErrorMessage.jsx
│   └── Footer.jsx
│
├── context
│   └── DogContext.jsx
│
├── hooks
│   └── useDogs.js
│
├── services
│   └── api.js
│
├── App.jsx
├── main.jsx
└── index.css
```

### Folder Overview

| Folder | Purpose |
|---------|----------|
| components | Reusable UI components |
| context | Global Context Provider |
| hooks | Custom React hooks |
| services | API logic |
| assets | Images and icons |

---

# Team & Responsibilities

| Member | Responsibility |
|---------|----------------|
| Member 1 | Project setup, Context API, App integration |
| Member 2 | Navigation, Search, Results Header |
| Member 3 | API integration, Dog Grid, Dog Cards, Dog Details |
| Member 4 | Favorites, UI Components, Testing, Loom Presentation |

---

# Challenges

During development, the team encountered several challenges:

- Managing shared state across multiple components.
- Consuming asynchronous API data.
- Designing reusable React components.
- Handling loading and error states.
- Resolving Git merge conflicts.
- Maintaining a consistent UI across the application.

---

# Learning Outcomes

This project strengthened our understanding of:

- React Components
- React Hooks
- Context API
- State Management
- REST API Integration
- Component Reusability
- Responsive Design
- Git & GitHub Collaboration
- Team-based Software Development

---

# Future Improvements

Potential enhancements include:

-  User Authentication
-  Dark Mode
-  Advanced Filters
-  Breed Comparison
-  Recently Viewed Dogs
-  Infinite Scrolling
-  Performance Optimization
-  Unit Testing
-  Accessibility Improvements
-  Deployment Pipeline (CI/CD)

---

#  Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a new feature branch.

```bash
git checkout -b feature/new-feature
```

3. Commit your changes.

```bash
git commit -m "Add new feature"
```

4. Push your branch.

```bash
git push origin feature/new-feature
```

5. Open a Pull Request.

---

# License

This project was developed for educational purposes as part of a React team assignment.

---

# Acknowledgements

Special thanks to:

- React
- Vite
- The Dog API
- GitHub
- Our instructors
- Our teammates

---

## Support

If you found this project useful or inspiring, consider giving the repository a **⭐ Star**.

It helps others discover the project and supports our work.

---

<div align="center">

**Made using React, Context API and Vite**

</div>
