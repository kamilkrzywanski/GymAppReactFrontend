import React , { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tree.css";
import TreeModalComponent from './TreeModalComponent';
import FileUpoladComponent from './FileUploadComponent';
import axios from 'axios';



const Tree = ({ data = [] }) => {
  //const [show, setShow] = useState(false);
    

    return (
      
      <div className="d-tree">
        <ul className="d-flex d-tree-container flex-column">
          {data.map((tree, index) => (
            
            <TreeNode node={tree} index={index} key={index}/>
           
          
          ))}
        </ul>
      </div>
      
 
    );
  };






  const TreeNode = ({ node, index }) => {
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = node.children.length ? true : false;

    const [show, setShow] = useState(false);
    const [deleteMode, setDeleteMode] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);

    
    function setDelete() {
      setShow(true);
      setDeleteMode(true);
      
    }

    function setAdd() {
      setShow(true);
      setDeleteMode(false);
    }

    function setUpload() {
      setUploadModal(true);
    }

   
      const downloadButton = function() {
      const url = '/download'
      const method = 'GET'
      const headers = { 'Authorization': '1234567890' }
      const responseType = 'blob'
      axios({
          url, method, headers, responseType
      }).then(response => {
          console.log(response)
          
          const blob = response.data
          const objectURL = URL.createObjectURL(blob)
                                      
          const a = document.createElement('a')
          a.href = objectURL
          a.download = "123.pdf"
          a.click()
          
          URL.revokeObjectURL(objectURL)
      }).catch(error => console.error(error))
  }
    

  
  
    const a = node.type === 'folder' ? node.name : <a onClick={ downloadButton} href={`files/${node.id}`}>{node.name}</a>;

    return (
     
     
      <li className="d-tree-node border-0" key={node.id} >
        <div className="d-flex" >
          
          {hasChild && (
            <div onClick={(e) => setChildVisiblity((v) => !v)}
              className={`d-inline d-tree-toggler ${
                childVisible ? "active" : ""
              }`}
            >
              {node.type === 'folder' ?    <FontAwesomeIcon icon="caret-right" size="2x" /> : "" }
            </div>
          )}
  
 
            
          <div className="col d-tree-head" >
            <i className={`mr-1 ${node.icon}`}> </i>
            {node.type === 'folder' ? <FontAwesomeIcon icon="folder"/> : <FontAwesomeIcon icon="file" color="green"/>}
            <button className="btn" onClick={setDelete} ><FontAwesomeIcon icon="trash"/></button>
            {a}
            {node.type === 'folder' ? <button onClick={setAdd} className="btn"><FontAwesomeIcon icon="plus"/></button>  : ""}
            {node.type === 'folder' ? <button className="btn" onClick={setUpload} ><FontAwesomeIcon icon="cloud-upload-alt"/></button>  : ""}
           
            <TreeModalComponent  show={show} setShow={setShow} id={node.id} deleteMode={deleteMode} name={node.name}/>
            <FileUpoladComponent show={uploadModal} id={node.id} setUpload={setUploadModal}/>

          </div>

        
        </div>
        
  
        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <Tree data={node.children} />
            </ul>
          </div>
        )}
      </li>
      
       
    
       
    );
  };

export default Tree