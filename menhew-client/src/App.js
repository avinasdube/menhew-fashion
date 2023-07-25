import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import './App.scss';

import Home from './pages/Home/Home';
import Categories from "./pages/Categories/Categories";
import Favourites from "./pages/Favourites/Favourites";

import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/product",
        element: <Product />
      },
      {
        path: "/categories/men/product/:id",
        element: <Product />
      },
      {
        path: "/categories/kids/product/:id",
        element: <Product />
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "/favourites",
        element: <Favourites />
      }
    ]
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  }
])

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
