/** @format */

import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Company from "./Components/Nested_Routes/Company";
import Channel from "./Components/Nested_Routes/Channel";
import Other from "./Components/Nested_Routes/Other";
import User from "./Components/User";
import "./App.css";
import Services from "./Components/Services";
import Navbar from "./Components/Navbar";
import Error_Page from "./Components/Error_Page";
import Filter from "./Components/Filter";
import Login from "./Components/Login";
import Protected from "./Components/Protect_Router/Protected";
import Dashboard from "./Components/Dashboard";

function App() {
  let islogged = false;
  let data = {
    mess: "user-not logged-in",
  };
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected Components={Home} />} />
        <Route
          path="/dashboard"
          element={
            islogged ? (
              <Dashboard />
            ) : (
              <Navigate to="/about" replace state={data} />
            )
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />

        <Route path="/Services" element={<Protected Components={Services} />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/filter" element={<Protected Components={Filter} />} />
        {/*<Route path="/*" element={<Error_Page />} />*/}
        <Route path="/*" element={<Navigate to="/" />} />
        <Route
          path="/contact/"
          element={<Contact title="Contact-page-heading" />}
        >
          <Route path="company" element={<Company />} />
          <Route path="channel" element={<Channel />} />
          <Route path="other" element={<Other />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
