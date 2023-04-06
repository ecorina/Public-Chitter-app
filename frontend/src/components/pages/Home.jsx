import Peeps from "../Peeps";
import SendPeeps from "../SendPeeps";

const Home = ({ user, setUser }) => (
  <>
    <br />
    <SendPeeps user={user} />
    <Peeps />
    <button
      className="btn btn-primary"
      style={{ background: "#662EED", marginBottom: "80px" }}
      onClick={() => {
        setUser(null);
        localStorage.clear();
      }}
    >
      Log Out
    </button>
  </>
);

export default Home;
