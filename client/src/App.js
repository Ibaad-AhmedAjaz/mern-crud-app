import { create } from 'axios';
import './App.css';
import Update from './updateuser/Update';
import User from './getuser/User';
import AddUser from './adduser/AddUser';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';

function App() {
  const route = createBrowserRouter([
  {
    path:"/",
  element:<User />,
  },
  {
    path:"/add",
    element:<AddUser />
  },
  {
    path:"/update/:id",
    element:<Update />,
  }
  ]);
  return (
    <div className="App">
      <RouterProvider router={route}> </RouterProvider>
    </div>
  );
}

export default App;
