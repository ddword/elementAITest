import React, { useState } from "react";
import "./index.css";
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import { Ifile } from "./../interfaces/file";
import fileFixtures from "../../fixtures/files.json";
import { pathToFileURL } from "url";

/**
 * type Props = {
};

const App: React.FC<Props> = (_) => {
    console.log("The file fixtures are here!", fileFixtures); 

  return (
    <div className="App">
      <header className="App-header">ElementAI Frontend Challenge</header>
      <div className="App-content">
        <FileTree />
        <FileContent />
      </div>
    </div>
  );
};
 */

const App = () => {
  const [context, setFile] = useState<Ifile | null>(null);
    // console.log("The file fixtures are here!", fileFixtures);

  const parentCallback = (file: Ifile) => {
    // console.log(file, "I am working")
    setFile(file);
  }

  return (
    <div className="App">
      {context ? context.path : ''}
      <header className="App-header">ElementAI Frontend Challenge</header>
      <div className="App-content">
        <FileTree data={fileFixtures} parentCallback={parentCallback}/>
        <FileContent context={context}/>
      </div>
    </div>
  );
};

export default App;
