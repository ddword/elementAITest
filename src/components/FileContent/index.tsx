import React from "react";
import { Ifile } from "./../interfaces/file";
import "./index.css";

type Props = {
  context: Ifile | null
};

const FileContent: React.FC<Props> = (props) => {
  return (
    <div className="FileContent">
      <ul>
      {
        (props.context) ?
          Object.values(props.context).map((item, index) => (
            <li key={index}>{item}</li> 
          ))
        : <span>Implement your FileContent component here. This component should present
        the content of the file that was selected from the file tree.</span> 
      }  
      </ul>
    </div> 
  );    
};

export default FileContent;
