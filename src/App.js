import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Error from './components/Error/Error';
import Home from './components/Home/Home';
import Root from './components/Root/Root';
import Statics from './components/Statics/Statics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
          path: '/',
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        
        { path: '/statics', element: <Statics></Statics> },
        { path: '/blog', element: <Blog></Blog> },
      ]
    },
  ])


  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
