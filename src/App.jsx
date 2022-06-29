import React from "react";
import "./App.css";
import Flowers from "./components/Flowers";
import FlowersData from "./components/FlowersData";

function App() {
  return (
    <div>
      <h1>About Flowers</h1>
      <div className="container">
        {FlowersData.map((values) => {
          return (
            <>
              <Flowers
                title={values.title}
                imgsrc={values.imgsrc}
                desc={values.desc}
                btn={values.btn}
              />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default App;
