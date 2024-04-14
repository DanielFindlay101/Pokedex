import Favourites from "./pages/Favourites";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { useEffect } from "react";
import { useFavStore } from "./store/useFavStore";

function App() {
  const user = useFavStore((state) => state.userDetails);
  useEffect(() => {
    if (!user) {
      console.log("No user");
    } else {
      console.log("User", user);
    }
  }, [user]);
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={user ? <Home /> : <Navigate to="/login" />}
          />
          <Route
            path="/favourites"
            element={user ? <Favourites /> : <Navigate to="/login" />}
          />

          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
