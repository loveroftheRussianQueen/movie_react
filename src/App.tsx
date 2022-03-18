import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from "./components/partials/Header/Header";
import MovieItem from './components/partials/MovieItem/MovieItem';

const Home = lazy(() => import('./pages/Home/Home'));
const Movie = lazy(() => import('./pages/Movie/Movie'));

const App = () => { 

  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/movie/:id" element={<Movie/>} />
      </Routes>
      </Suspense>
    </div>
  );
}

export default App;