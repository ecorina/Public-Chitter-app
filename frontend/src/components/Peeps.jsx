import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "./styles/Peeps.css";

export default function Peeps() {
  const [messages, setMessages] = useState([]);

  const messagesCards = messages.map((message, key) => {
    const formattedDate = moment(message.timestamp).format(
      "DD-MM-YYYY HH:mm:ss"
    );

    return (
      <div className="Container-peeps" key={key}>
        <h6 style={{ float: "right", margin: "1px" }}>{formattedDate}</h6>
        <h6 style={{ float: "left", margin: "1px" }}>{message.username}</h6>
        <br />
        <h4>{message.text}</h4>
      </div>
    );
  });

  useEffect(() => {
    const loadMessages = async () => {
      try {
        const { data } = await axios.get(`http://0.0.0.0:3000/peeps/`);
        setMessages(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadMessages();
  }, []);

  const content =
    messages.length === 0 ? <div>Loading...</div> : messagesCards.reverse();
  return <div>{content}</div>;
}
