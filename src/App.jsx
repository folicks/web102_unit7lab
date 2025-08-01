import './App.css';
import React from 'react';
import { useRoutes } from 'react-router-dom'
import ReadPosts from './pages/ReadPosts'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import { Link } from 'react-router-dom'


const App = () => {
  



  // Sets up routes
  let element = useRoutes([
    {
      path: "/",
      element: <ReadPosts />
    },
    {
      path: "/edit/:id",
      element: <EditPost />
    },
    {
      path: "/new",
      element: <CreatePost />
    }
  ]);

  return (
    <div className="App">
      <div className="header">
        <h1>� The Crew</h1>
        <nav>
          <Link to="/">
            <button className="headerBtn">View Crew</button>
          </Link>
          <Link to="/new">
            <button className="headerBtn">Add Crewmate</button>
          </Link>
        </nav>
      </div>
      {element}
    </div>

  )
}

export default App
