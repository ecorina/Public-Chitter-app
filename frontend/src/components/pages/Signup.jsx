import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { KEY_USER } from "../Main";
import "../styles/Signup.css";
const Signup = ({ setUser: setLoginUser }) => {
  const [user, setUser] = useState({
    name: ``,
    email: ``,
    password: ``,
  });

  const [error, setError] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = async (e) => {
    e.preventDefault();
    const { name, email, password } = user;
    if (name && email && password) {
      const res = await axios.post(`http://localhost:3000/register`, user);
      const resMessage = res.data.message;
      if (resMessage === `User already exists`) {
        setError(resMessage);
      } else {
        setLoginUser(user);
        setLoggedIn(true);
        localStorage.setItem(KEY_USER, user);
      }
    }
  };
  return (
    <div className="Container mb-3">
      {loggedIn && <Navigate to="/home" />}
      <form className="Signup-form" onSubmit={register}>
        <img
          className="Signup-img"
          src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/073/007/original/Twitter_Flatline_%281%29.png?1679484433"
          alt="user"
        />
        <h2>Sign Up</h2>
        <br />
        <label htmlFor="exampleInput" className="form-label">
          Enter your name
        </label>
        <input
          type="text"
          required
          className="form-control"
          value={user.name}
          name="name"
          onChange={handleChange}
        />

        <label htmlFor="exampleInput" className="form-label">
          Enter your e-mail
        </label>
        <input
          type="email"
          required
          className="form-control"
          autoComplete="username"
          value={user.email}
          name="email"
          onChange={handleChange}
        />

        <label htmlFor="exampleInput" className="form-label">
          Enter your password
        </label>
        <input
          type="password"
          required
          className="form-control"
          autoComplete="current-password"
          value={user.password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <button
          type="submit"
          className="btn btn-primary"
          style={{ backgroundColor: "#662EED" }}
        >
          Sign Up
        </button>
      </form>
      <div style={{ textAlign: "left", color: "red" }}>{error}</div>
    </div>
  );
};

export default Signup;
