import React from "react";
import DataView from './components/dataView/dataView';
import Comment from "./components/comment/comment";
import Loading from "./components/loading/loading";

function App() {
  return (
    <div className="App">
        <Loading ref={o=>global.loading=o}/>
        <Comment/>
        <DataView/>
    </div>
  );
}

export default App;
