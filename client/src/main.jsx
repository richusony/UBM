import './index.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';
import Profile from './pages/Profile.jsx';
import { UserContextProvider } from './context/userContext.jsx';
import BlogDetailPage from './pages/BlogDetailed.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/signin",
    element: <SignIn />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/profile",
    element: <Profile />
  },
  {
    path: "/blog/:blogId",
    element: <BlogDetailPage/>
  },
  {
    path: "/page-not-found",
    element: <PageNotFound />
  },
  {
    path: "*",
    element: <PageNotFound />
  },
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  </StrictMode>
)
