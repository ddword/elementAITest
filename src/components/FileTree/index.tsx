import React, { useState } from "react";
import { Ifile } from "./../interfaces/file";
import "./index.css";
import { prependOnceListener } from "process";


type Props = {
  data: any[],
  parentCallback(file: Object): void
};

const FileTree: React.FC<Props> = (props) => {
  const onSelect = (file: Ifile) => {
    //console.log(file)
    props.parentCallback(file);
  }
  
  return (
    <div className="FileTree">
      {
        props.data.map((file: Ifile, index) => (
          <ul key = {index} onClick={()=>onSelect(file)}>
            <li>
              {index} | {file.path}
            </li>
          </ul>
        ))
      }
    </div>
  );
};

export default FileTree;
/**
 * type Props = {
  data: any[]
};

interface Ifile {
  path: string,
  content: string,
  createdAt: Number,
  updatedAt: Number
};

const onSelect = (file: Ifile) => {
  console.log(file)
}
// <div className="FileTree">Implement your FileTree component here.{_.data}</div>
const FileTree: React.FC<Props> = (props) => {
  return (
    <div className="FileTree">
      {
        props.data.map((file: Ifile, index) => (
          <ul key = {index} onClick={() => onSelect(file)}>
            <li>
              {index}
            </li>
            <li>  
              {file.path}
            </li>
            <li> 
              {file.content}
            </li>
          </ul>
        ))
      }
    </div>
  );
};

export default FileTree;

 * 
 */