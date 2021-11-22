import { Fragment } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <Fragment>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={user ? <Home /> : <Navigate replace to='/login' />}
            />
            <Route
              path='/login'
              element={!user ? <Login /> : <Navigate replace to='/' />}
              exact
            />
            <Route
              path='/signup'
              element={!user ? <Signup /> : <Navigate replace to='/' />}
              exact
            />
          </Routes>
        </BrowserRouter>
      )}
    </Fragment>
  );
}

export default App;
