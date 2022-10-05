import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Products from "./Component/Products/Products";
import Main from "./Layout/Main";
import Friends from "./Component/Friends/Friends";
import FriendDetails from "./Component/FriendDetails/FriendDetails";
import Post from "./Component/Posts/Posts";
import Posts from "./Component/Posts/Posts";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
        },
        {
          path: "/products",
          element: <Products></Products>,
        },
        {
          path: "friends",
          element: <Friends></Friends>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users`);
          },
        },
        {
          path: "/friend/:friendId",
          loader: async ({ params }) => {
            return fetch(
              `https://jsonplaceholder.typicode.com/users/${params.friendId}`
            );
          },
          element: <FriendDetails></FriendDetails>,
        },
        {
          path: "post",
          loader: async () => {
            return fetch("https://jsonplaceholder.typicode.com/posts");
          },
          element: <Posts></Posts>,
        },
        {
          path: "*",
          element: <div>This rout can not found</div>,
        },
      ],
    },

    {
      path: "/about",
      element: <About></About>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
