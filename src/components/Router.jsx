import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";

import Login from "../pages/Login";
import Signup from "../pages/SignUp";
import Home from "../pages/Home";
import PostBlog from "../pages/PostBlog";
import AllBlog from "../pages/AllBlog";
import Travels from "../pages/Travels";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            <Layout>
              <Login />
            </Layout>
          }
        />
        <Route
          path="/signup"
          element={
            <Layout>
              <Signup />
            </Layout>
          }
        />
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        <Route
          path="/allblogs"
          element={
            <Layout>
              <AllBlog />
            </Layout>
          }
        />

        <Route
          path="/postblog"
          element={
            <Layout>
              <PostBlog />
            </Layout>
          }
        />

        <Route
          path="/travels"
          element={
            <Layout>
              <Travels />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
