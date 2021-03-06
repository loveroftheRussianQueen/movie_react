import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import ErrorBoundary from './components/ErrorBoundary';

const Home = lazy(() => import('./pages/Home/Home'));
const Movie = lazy(() => import('./pages/Movie/Movie'));
const Playing = lazy(() => import('./pages/PlayingMovies/PlayingMovies'));
const Popular = lazy(() => import('./pages/PopularMovies/PopularMovies'));
const Upcoming = lazy(() => import('./pages/UpcomingMovies/UpcomingMovies'));
const TopRated = lazy(() => import('./pages/TopRatedMovies/TopRatedMovies'));
const Favorite = lazy(() => import('./pages/Favorite/Favorite'));
const Search = lazy(() => import('./pages/Search/Search'));

const App = () => { 

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/movie/:id" element={<Movie/>} />
            <Route path="/favorite" element={<Favorite/>} />
            <Route path="/search" element={<Search/>} />
            <Route path="/playing" element={<Playing/>} />
            <Route path="/popular" element={<Popular/>} />
            <Route path="/upcoming" element={<Upcoming/>} />
            <Route path="/top-rated" element={<TopRated/>} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;