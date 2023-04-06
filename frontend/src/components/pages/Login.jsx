import { useState } from "react";
import axios from "axios";
import { Navigate, Link } from "react-router-dom";
import { KEY_USER } from "../Main";
import "../styles/Login.css";

const Login = ({ setUser: setLoginUser }) => {
  const [user, setUser] = useState({
    email: ``,
    password: ``,
  });
  const [error, setError] = useState("");

  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`name: ${name} value: ${value}`);
    setUser({
      ...user,
      [name]: value,
    });
  };
  const login = async (e) => {
    e.preventDefault();

    const res = await axios.post(`http://localhost:3000/login`, user);
    if (res.data.message === `Login successful`) {
      setLoginUser(res.data.user);
      setUser({ email: ``, password: `` });
      setLoggedIn(res.data.user ? true : false);
      localStorage.setItem(KEY_USER, JSON.stringify(res.data.user));
    } else {
      setError(res.data.message);
    }
  };
  return (
    <div className="Container-Login">
      <div className="Login-space">
        {loggedIn && <Navigate to="/home" />}
        <form onSubmit={login} style={{}}>
          <img
            className="Login-img"
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/073/007/original/Twitter_Flatline_%281%29.png?1679484433"
            alt="user"
          />
          <h2 style={{ fontSize: "40px" }}>Login</h2>

          <br />
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address:
          </label>

          <input
            type="email"
            required
            name="email"
            className="form-control"
            autoComplete="username"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={user.email}
            onChange={handleChange}
            style={{ margin: "0 auto" }}
          />

          <br></br>
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password:
          </label>

          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            autoComplete="current-password"
            value={user.password}
            name="password"
            onChange={handleChange}
            style={{ margin: "0 auto" }}
          />
          <br></br>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ backgroundColor: "#662EED" }}
          >
            Login
          </button>
        </form>
        <p style={{ color: "red" }}>{error}</p>
        <Link to="/signup">
          <p style={{ fontSize: "15px" }}>
            Don't have an account? Register now!
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
