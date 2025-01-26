import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import About from './pages/About';
import Home from './pages/Home';
import AppLayouts from './components/layout/AppLayouts';

function App() {
 const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayouts />, 
    children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About/>
        }
    ]
  }
      
        
       ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
