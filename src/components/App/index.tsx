import React, { useState } from "react";
import "./index.css";
import 'fontsource-roboto';
import FileTree from "../FileTree";
import FileContent from "../FileContent";
import { Ifile } from "./../interfaces/file";
import fileFixtures from "../../fixtures/files.json";
import { pathToFileURL } from "url";

const App = () => {
  const [context, setFile] = useState<Ifile | null>(null);

  const parentCallback = (file: Ifile) => {
    setFile(file);
  }

  return (
    <div className="App">
      <header className="App-header">ElementAI Frontend Challenge</header>
      <div className="App-content">
        <FileTree data={fileFixtures} parentCallback={parentCallback}/>
        <FileContent context={context}/>
      </div>
    </div>
  );
};

export default App;
