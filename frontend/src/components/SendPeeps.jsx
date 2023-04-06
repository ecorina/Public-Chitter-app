import axios from "axios";
import { useState } from "react";
import "./styles/SendPeeps.css";

export default function SendPeeps({ user }) {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(`${process.env.REACT_APP_API_URL}/peeps/`, {
        text: message,
        timestamp: new Date(),
        username: user.name,
      });
      console.log(resp);

      window.location.reload();
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="SendPeeps-form">
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/073/007/original/Twitter_Flatline_%281%29.png?1679484433"
        alt="user"
        style={{
          width: "140px",
        }}
      />
      <form onSubmit={submit}>
        <textarea
          className="SendPeeps-text form-control"
          value={message.value}
          onChange={(e) => handleChange(e)}
        ></textarea>

        <button
          type="submit"
          className="btn btn-primary"
          style={{ background: "#662EED", marginTop: "100px" }}
        >
          {" "}
          Peep!
        </button>
      </form>
    </div>
  );
}
