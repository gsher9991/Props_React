import React from "react";
import "./App.css";
import Flowers from "./components/Flowers";
import FlowersData from "./components/FlowersData";

// const FlowersInfo = (values) => {
//   return (
//     <>
//       <Flowers
//         title={values.title}
//         imgsrc={values.imgsrc}
//         desc={values.desc}
//         btn={values.btn}
//       />
//     </>
//   );
// };

function App() {
  return (
    <div>
      <h1>About Flowers</h1>
      <div className="container">
        {/* <Flowers
          title={FlowersData[0].title}
          imgsrc={FlowersData[0].imgsrc}
          desc={FlowersData[0].desc}
          btn={FlowersData[0].btn}
        /> */}
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
