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
        : ''  
      }  
      </ul>
    </div> 
  );    
};

export default FileContent;
/*return (
    <div className="FileContent">
      Implement your FileContent component here. This component should present
      the content of the file that was selected from the file tree.
    </div>
  );*/

