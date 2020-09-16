import React, { useState } from "react";
import { Ifile } from "./../interfaces/file";
import "./index.css";
import { prependOnceListener } from "process";
//styles
import SvgIcon, { SvgIconProps } from '@material-ui/core/SvgIcon';
import { fade, makeStyles, withStyles, Theme, createStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem, { TreeItemProps } from '@material-ui/lab/TreeItem';
import Collapse from '@material-ui/core/Collapse';
import { TransitionProps } from '@material-ui/core/transitions';

function MinusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 11.023h-11.826q-.375 0-.669.281t-.294.682v0q0 .401.294 .682t.669.281h11.826q.375 0 .669-.281t.294-.682v0q0-.401-.294-.682t-.669-.281z" />
    </SvgIcon>
  );
}

function PlusSquare(props: SvgIconProps) {
  return (
    <SvgIcon fontSize="inherit" style={{ width: 14, height: 14 }} {...props}>
      {/* tslint:disable-next-line: max-line-length */}
      <path d="M22.047 22.074v0 0-20.147 0h-20.12v0 20.147 0h20.12zM22.047 24h-20.12q-.803 0-1.365-.562t-.562-1.365v-20.147q0-.776.562-1.351t1.365-.575h20.147q.776 0 1.351.575t.575 1.351v20.147q0 .803-.575 1.365t-1.378.562v0zM17.873 12.977h-4.923v4.896q0 .401-.281.682t-.682.281v0q-.375 0-.669-.281t-.294-.682v-4.896h-4.923q-.401 0-.682-.294t-.281-.669v0q0-.401.281-.682t.682-.281h4.923v-4.896q0-.401.294-.682t.669-.281v0q.401 0 .682.281t.281.682v4.896h4.923q.401 0 .682.281t.281.682v0q0 .375-.281.669t-.682.294z" />
    </SvgIcon>
  );
}

function TransitionComponent(props: TransitionProps) {
  return (
    <Collapse {...props} />
  ); 
}

const StyledTreeItem = withStyles((theme: Theme) =>
  createStyles({
    iconContainer: {
      '& .close': {
        opacity: 0.3,
      },
    },
    group: {
      marginLeft: 7,
      paddingLeft: 18,
      borderLeft: `1px dashed ${fade(theme.palette.text.primary, 0.4)}`,
    },
  }),
)((props: TreeItemProps) => <TreeItem {...props} TransitionComponent={TransitionComponent} />);

const useStyles = makeStyles(
  createStyles({
    root: {
      height: 264,
      flexGrow: 1,
      maxWidth: 400,
    },
  }),
);

type Props = {
  data: any[],
  parentCallback(file: Ifile): void
};

const FileTree: React.FC<Props> = (props) => {
  const onSelect = (file: Ifile) => {
    props.parentCallback(file);
  }

  const filterList = () => {
    let array = props.data.map((file)=>(file.path.slice(1).split("/")))
    let unique = [...Array.from(new Set(array.map(element => element[0] !== element[element.length - 1] ? element[0] : null)))]; 
    return unique.filter(el => el != null)
  }

  const getGroupe = (file: Ifile) => {
    let g = file.path.slice(1).split("/")
    return g
  }  

  const classes = useStyles();
  return (
    <div className="FileTree">
      <TreeView
        className={classes.root}
        defaultExpanded={['1']}
        defaultCollapseIcon={<MinusSquare />}
        defaultExpandIcon={<PlusSquare />}
        >
        <StyledTreeItem nodeId="1" label="File tree">
          {
            filterList().map((folderGroup, idx) => (
              <StyledTreeItem nodeId="2" key={idx} label={folderGroup}>
              {
                props.data.map((file: Ifile, index) => (
                  <ul key = {index} onClick={()=>onSelect(file)}>
                    <a><li>
                      { getGroupe(file)[0] == folderGroup && file.path}
                    </li></a>
                  </ul> 
                ))
              }  
              </StyledTreeItem>
            ))
          } 
          {
            props.data.map((file: Ifile, index) => (
              <ul key = {index} onClick={()=>onSelect(file)}>
                <a>
                  <li>
                  { getGroupe(file)[0] == file.path.slice(1) && file.path}
                  </li>
                </a>
              </ul> 
            )) 
          }
        </StyledTreeItem>
      </TreeView> 
    </div>
  );
};

export default FileTree;
