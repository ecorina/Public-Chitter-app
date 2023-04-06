import React from "react";

export default function Welcome() {
  return (
    <div
      style={{
        backgroundColor: "#FAF5FF",
        margin: "0 auto",
        marginTop: "100px",
      }}
    >
      <br />
      <h1>Welcome To Chitter</h1>
      <img
        src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/073/007/original/Twitter_Flatline_%281%29.png?1679484433"
        alt="user"
        style={{
          width: "400px",
          borderRadius: "80px",
        }}
      />
    </div>
  );
}
