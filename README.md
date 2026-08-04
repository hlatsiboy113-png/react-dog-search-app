# 🐾 PawFinder

### Discover your next best friend.

PawFinder is a React-based dog explorer that allows users to discover dog breeds, search for dogs, view detailed information, and manage their favourite dogs through a responsive and user-friendly interface.

The project demonstrates practical use of **React Context API, custom hooks, API integration, reusable components, responsive design, and collaborative Git/GitHub workflows.**

---

## 🔗 Quick Links

| Resource | Link |
|---|---|
| 🌐 Live Application | [Coming Soon](#) |
| 💻 GitHub Repository | [PawFinder](#) |
| 📚 State Management Documentation | [`docs/state-management.md`](docs/state-management.md) |
| 🎥 Loom Presentation | [Coming Soon](#) |

---

## 📸 Preview

> Screenshots will be added once the main UI is completed.

### Home / Explore

![PawFinder Home](./docs/screenshots/home.png)

### Dog Details

![Dog Details](./docs/screenshots/dog-details.png)

### Favourites

![PawFinder Favourites](./docs/screenshots/favourites.png)

---

# ✨ Features

PawFinder is designed around a simple goal: make discovering dogs easy and engaging.

### 🐕 Explore Dogs

Browse dog breeds and discover available dogs through data retrieved from an external API.

### 🔍 Search

Search for specific dog breeds using the application's shared search state.

### 📖 Dog Details

View additional information about individual dogs.

###  Favourites

Save dogs to a personal favourites collection and remove them when no longer needed.

###  Dynamic API Data

Dog information is retrieved dynamically rather than being hard-coded into the application.

### Loading States

Users receive feedback while dog data is being retrieved.

###  Error Handling

The application provides user-friendly feedback when API requests fail.

### 📱 Responsive Design

The interface is designed to work across:

- Desktop
- Laptop
- Tablet
- Mobile

---

#  Project Objective

PawFinder was developed as part of the **ZAIO Full Stack Web Development programme**.

The primary objective is to demonstrate the practical implementation of:

- React Context API
- Shared state management
- Custom React hooks
- API integration
- Component-based architecture
- Reusable UI components
- Responsive design
- Loading and error states
- Git/GitHub collaboration

The application must demonstrate shared state being consumed by multiple components rather than relying entirely on local component state.

---

# 🛠️ Technology Stack

| Technology | Purpose |
|---|---|
| **React** | User interface and component architecture |
| **Vite** | Development server and build tooling |
| **JavaScript** | Application logic |
| **Context API** | Global/shared application state |
| **React Router** | Client-side navigation |
| **Fetch API** | External API requests |
| **CSS** | Component and responsive styling |
| **Git** | Version control |
| **GitHub** | Collaboration and source control |

### Why Context API?

Context API was selected because PawFinder contains state that needs to be accessed by multiple components.

Using Context allows shared data to be accessed without unnecessarily passing props through multiple levels of the component tree.

---

# 🧠 How PawFinder Works

The application's data flows through several layers:

```text
                    ┌─────────────────┐
                    │    Dog API      │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   dogApi.js     │
                    │ API Service     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │   useDogs.js    │
                    │  Custom Hook    │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │  DogContext     │
                    │  Context API    │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
          DogGrid        SearchBar      Favorites
              │
              ▼
           DogCard
              │
              ▼
        DogDetails
Example User Flow

A user searches for a breed:

User
 ↓
SearchBar
 ↓
searchTerm updated
 ↓
DogContext
 ↓
API / filtering logic
 ↓
DogGrid
 ↓
DogCard
 ↓
Updated results displayed

This architecture keeps application state separate from individual UI components.

 Shared State

The central application state is managed through DogContext.

{
  dogs: [],
  searchTerm: "",
  favorites: [],
  loading: false,
  error: null
}
State Usage
State	Components Using It
dogs	DogGrid, DogCard, DogDetails
searchTerm	SearchBar, ResultsHeader, DogGrid
favorites	Navbar, FavoriteButton, Favorites
loading	DogGrid, LoadingSpinner
error	DogGrid, ErrorMessage

For the complete state architecture and component read/write relationships:

 View State Management Documentation

Project Structure
react-dog-search-app/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   │
│   │   ├── Navbar/
│   │   │   ├── Navbar.jsx
│   │   │   └── Navbar.css
│   │   │
│   │   ├── SearchBar/
│   │   │   ├── SearchBar.jsx
│   │   │   └── SearchBar.css
│   │   │
│   │   ├── ResultsHeader/
│   │   │   ├── ResultsHeader.jsx
│   │   │   └── ResultsHeader.css
│   │   │
│   │   ├── DogGrid/
│   │   │   ├── DogGrid.jsx
│   │   │   └── DogGrid.css
│   │   │
│   │   ├── DogCard/
│   │   │   ├── DogCard.jsx
│   │   │   └── DogCard.css
│   │   │
│   │   ├── DogDetails/
│   │   │   ├── DogDetails.jsx
│   │   │   └── DogDetails.css
│   │   │
│   │   ├── Favorites/
│   │   │   ├── Favorites.jsx
│   │   │   └── Favorites.css
│   │   │
│   │   ├── FavoriteButton/
│   │   │   ├── FavoriteButton.jsx
│   │   │   └── FavoriteButton.css
│   │   │
│   │   ├── LoadingSpinner/
│   │   │   ├── LoadingSpinner.jsx
│   │   │   └── LoadingSpinner.css
│   │   │
│   │   ├── ErrorMessage/
│   │   │   ├── ErrorMessage.jsx
│   │   │   └── ErrorMessage.css
│   │   │
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.css
│   │
│   ├── context/
│   │   └── DogContext.jsx
│   │
│   ├── hooks/
│   │   └── useDogs.js
│   │
│   ├── services/
│   │   └── dogApi.js
│   │
│   ├── pages/
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.css
│   │   │
│   │   └── DogDetailsPage/
│   │       ├── DogDetailsPage.jsx
│   │       └── DogDetailsPage.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
├── docs/
│   ├── state-management.md
│   └── screenshots/
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
└── vite.config.js
Component Styling

Each UI component is colocated with its CSS file:

DogCard/
├── DogCard.jsx
└── DogCard.css

This keeps component logic and styling together and makes individual features easier to maintain.

 Getting Started
Prerequisites

Make sure the following are installed:

Node.js
npm
Git

Check your installation:

node --version
npm --version
git --version
1. Clone the Repository
git clone <repository-url>

Move into the project:

cd react-dog-search-app
2. Install Dependencies
npm install
3. Start the Development Server
npm run dev

Vite will provide a local development URL, usually:

http://localhost:5173/

Open the URL in your browser.

 Environment Variables

If the Dog API requires an API key, create a .env file in the project root.

Example:

VITE_DOG_API_KEY=your_api_key_here
Important

Never commit .env files containing secrets to GitHub.

The .gitignore file should contain:

.env
.env.*
!.env.example

Use .env.example to document required environment variables without exposing actual credentials.

 Git & GitHub Workflow

PawFinder uses a feature-branch workflow to keep development organised and reduce merge conflicts.

main
 │
 └── develop
       │
       ├── feature/context-api
       ├── feature/search-navigation
       ├── feature/dog-api
       └── feature/favorites-ui
Development Flow
GitHub Issue
      ↓
Feature Branch
      ↓
Development
      ↓
Local Testing
      ↓
Commit
      ↓
Push
      ↓
Pull Request
      ↓
Peer Review
      ↓
develop
      ↓
main
Branch Naming
feature/context-api
feature/search-navigation
feature/dog-api
feature/favorites-ui
fix/search-error
docs/state-management
Commit Convention

Use clear, descriptive commit messages.

feat: add breed search functionality
fix: resolve dog API loading error
docs: update state management documentation
refactor: simplify DogCard component
style: improve mobile dog grid layout
💬 Team Communication

The team uses the #pawfinder Slack channel for development communication.

Developers should notify the team when they:

Start a significant task.
Push major changes.
Open a Pull Request.
Merge a Pull Request.
Modify shared architecture.
Encounter a blocker.
Make changes that may affect another developer.
Development Update Template
🚀 PAWFINDER DEVELOPMENT UPDATE

👤 Developer:
📅 Date:
🕒 Time:

🎯 Task:
🌿 Branch:

📂 Files / Components Changed:

📝 Summary:
Brief explanation of what changed.

🔗 Pull Request:
Link

⚠️ Action Required:
Review / Pull latest changes / No action required
👥 Team
Team Member	Role	Primary Responsibilities
Mahlatse Mokgawa	Project Lead & State Management	Context API, architecture, integration, Git workflow, code review
Nonkululeko Maphanga	Search & Navigation Developer	Navigation, search, results interface
Karabo Komane	API & Dog Display Developer	API integration, dog data, cards, grid, details
Emily Qhawekazi Maramani	UI, Features, QA & Presenter	Favourites, reusable UI, QA, responsiveness, presentation
🧪 Testing Checklist

Before submitting a Pull Request, verify:

 Application starts successfully
 No console errors
 Components render correctly
 API requests work
 Loading state works
 Error state works
 Search works
 Favourites work
 Dog details work
 Responsive layout works
 No existing functionality has been broken
📱 Responsive Design

PawFinder is designed to adapt to different screen sizes.

The application should be tested across:

Desktop
   ↓
Laptop
   ↓
Tablet
   ↓
Mobile

Each component should maintain usability and visual consistency across supported screen sizes.

🗺️ Roadmap
Phase 1 — Foundation
 React application scaffolded
 Initial folder structure
 GitHub repository setup
 develop branch established
 Context API foundation
Phase 2 — Core Functionality
 Dog API integration
 Dog data display
 Search functionality
 Loading states
 Error handling
Phase 3 — Features
 Dog details
 Favourites
 Navigation
 Responsive UI
Phase 4 — Quality & Delivery
 Cross-device testing
 Bug fixes
 Code review
 Documentation
 Deployment
 Loom presentation
⚠️ Known Limitations

This section will be updated as development progresses.

Potential limitations may include:

Dog data depends on the availability of the external API.
API limitations may affect the number of available results.
User authentication is not currently implemented.
Favourites may be stored locally rather than associated with an account.

Only limitations that apply to the final implementation should remain here.

📚 Documentation

Additional technical documentation:

State Management

Read state-management.md

This document explains:

Context API architecture
State shape
State ownership
Components reading state
Components updating state
State flow
Context API justification
🎥 Final Presentation

The final 5-minute Loom presentation will demonstrate:

PawFinder introduction
Application interface
Dog discovery
Search functionality
Dog details
Favourites
Loading and error states
Context API implementation
Shared state across components
React DevTools Context panel
📦 Final Deliverables

The completed project will be submitted with:

🌐 Deployed Application
💻 GitHub Repository
📄 State Management Documentation
🎥 5-Minute Loom Presentation
🏁 Project Status

Status: 🚧 In Development

Current Phase: Phase 1 — Project Foundation & Architecture

PawFinder is currently being developed collaboratively using React, Context API, Git, and GitHub.

🐾 Built with React. Designed for discovery.

PawFinder — Discover your next best friend.


### One thing I would **not** do yet

Don't put fake links, screenshots, API names, or "completed" checkboxes into the actual repository until they're real. The structure above intentionally uses placeholders such as:

```text
<repository-url>
YOUR_DEPLOYED_URL
