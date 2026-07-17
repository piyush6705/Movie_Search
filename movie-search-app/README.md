# Movie Search App

A modern React application that allows users to search for movies using the **OMDb API**. The app displays detailed movie information such as posters, IMDb ratings, release year, genre, runtime, director, actors, and plot.

## Features

- Search movies by title
- Fetch movie data from the OMDb API
- Display detailed movie information
- Responsive movie cards
- Loading indicator while fetching data
- Error handling for invalid searches
- Fallback image for missing posters
- Clean and reusable React components
- Environment variable support for API key

---

## Built With

- React
- Vite
- JavaScript (ES6+)
- CSS3
- OMDb API

---

## Folder Structure

```
movie-search-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieCard.css
│   │   ├── MovieList.jsx
│   │   ├── MovieList.css
│   │   ├── SearchBar.jsx
│   │   └── SearchBar.css
│   │
│   ├── hooks/
│   │   └── useMovies.js
│   │
│   ├── services/
│   │   └── movieApi.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/piyush6705/movie-search-app.git
```

Navigate to the project

```bash
cd movie-search-app
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root

```env
VITE_OMDB_API_KEY=YOUR_API_KEY
```

Start the development server

```bash
npm run dev
```

---

## Environment Variables

Create a `.env` file in the root directory.

```env
VITE_OMDB_API_KEY=YOUR_API_KEY
```

You can get a free API key from:

https://www.omdbapi.com/apikey.aspx

---

## API

This project uses the **OMDb API**.

Search Movies

```
https://www.omdbapi.com/?apikey=YOUR_API_KEY&s=batman
```

Movie Details

```
https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=tt0372784
```

---

## Features Implemented

- Search movies
- Display search results
- Fetch movie details
- Movie cards
- Loading state
- Error handling
- Responsive layout
- Component-based architecture
- Custom Hooks
- API Service Layer

---

## Future Improvements

- Favorites using Local Storage
- Movie Details Page
- React Router
- Pagination
- Debounced Search
- Dark Mode
- Filter by Movie Type
- Sort Movies
- Infinite Scroll
- Skeleton Loading Animation

---

## What I Learned

- React Components
- JSX
- Props
- useState
- Custom Hooks
- Event Handling
- Fetch API
- Async / Await
- Promise.all()
- Conditional Rendering
- API Integration
- Environment Variables
- Component Reusability
- Project Structure Best Practices



## Author

**Piyush**

GitHub: https://github.com/piyush6705
