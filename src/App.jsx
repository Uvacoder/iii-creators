import React from 'react';
import './App.css'
import './pages/CreatorDetails.css';
import './pages/AddCreator.css';
import './pages/EditCreator.css';
import './pages/ShowCreator.css';
import { useRoutes } from 'react-router-dom';
import { Link, Routes, Route } from 'react-router-dom';
import ShowCreator from './pages/ShowCreator';
import AddCreator from './pages/AddCreator';
import EditCreator from './pages/EditCreator';
import CreatorDetails from './pages/CreatorDetails';

const Home = () => {
  return (
    <div className="homeDiv">
      <h1>Welcome to Tina's Creator Gallery!</h1>
      <p>This is a website where I share some of my favorite online creators. Many of them I originally found on TikTok,
        but they can also be found on other platforms like Instagram and YouTube.
      </p>
      <p>I hope you enjoy exploring this gallery. You might just find your new favorite creator!</p>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <div className="sidenav">
        <Link to="/new">Add a Creator</Link>
        <Link to="/creators">View Creators</Link>
        <Link to="/">Home</Link>
        {/* <input className="search_bar" type="text" placeholder="Search.." /> */}
        <p className='val_name'>Creator Gallery</p>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/creators" element={<ShowCreator />} />
        <Route path="/new" element={<AddCreator />} />
        <Route path="/:id/edit" element={<EditCreator />} />
        <Route path="/:id" element={<CreatorDetails />} />
      </Routes>
    </div>
  );
};

export default App;
