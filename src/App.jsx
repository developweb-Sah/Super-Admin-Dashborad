import "./App.css";
import Sidebar from "./Sidebar/Sidebar.js";
import { BrowserRouter as Router } from "react-router-dom";
import Heading from "./Heading/Heading";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="head">
          <div
            style={{
              width: "100%",
              height: "60px",
              boxShadow: "1px 1px 1px 1px #d0d5dd",
            }}
          >
            <Heading />
            <br></br>
            <Main />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
