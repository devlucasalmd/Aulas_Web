import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './Pages/About';
import Notes from './Pages/Notes';
import Main from './Pages/Main';
import Blog from './Pages/Blog';
import Noticias from './Pages/Noticias';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Main/>,
      },
      {
        path: "about",
        element: <About/>,
      },
      {
        path: "notes",
        element: <Notes/>,
      },
      {
        path: "blog",
        element: <Blog/>,
      },
      {
        path: "noticias",
        element: <Noticias/>,
      }      
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


