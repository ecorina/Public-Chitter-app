import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        height: "50px",
        backgroundColor: "#662EED",
        paddingTop: "5px",
      }}
    >
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/073/007/original/Twitter_Flatline_%281%29.png?1679484433"
        alt="user"
        style={{
          width: "75px",
          borderRadius: "80px",

          float: "left",
          marginTop: "-16px",
        }}
      />
      <ul
        style={{
          listStyle: "none",
          display: "inline-block",
          marginTop: "10px",
          float: "left",
        }}
      >
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <Link
            to="/home"
            style={{
              color: "white",
              textDecoration: "none",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <Link
            to="/login"
            style={{
              color: "white",
              textDecoration: "none",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            Log in
          </Link>
        </li>
        <li style={{ display: "inline-block", marginRight: "10px" }}>
          <Link
            to="/signup"
            style={{
              color: "white",
              textDecoration: "none",
              border: "1px solid white",
              borderRadius: "5px",
              padding: "4px",
            }}
          >
            Sign up
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
