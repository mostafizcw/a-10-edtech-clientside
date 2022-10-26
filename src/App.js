// import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Register from './Components/Register';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Register></Register>
        }
      ]
    }
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;