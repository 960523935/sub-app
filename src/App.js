import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Test from "./pages/test";
import Test2 from "./pages/test2";

function App(props) {
  useEffect(() => {
    props.onGlobalStateChange((state, prev) => {
      console.log("子应用", state, prev);
    }, true);
  }, []);
  return (
    <div>
      <div>
        <Link to="/test">test</Link>
        <Link to="/test2">test2</Link>
      </div>
      <div>
        <Routes>
          <Route path="/test" element={<Test />} />
          <Route path="/test2" element={<Test2 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
