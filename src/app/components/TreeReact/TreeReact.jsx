// import React, { useState } from "react";
// import { StylesProvider, ThemeProvider } from "@material-ui/core/styles";
// import CssBaseLine from "@material-ui/core/CssBaseLine";
// import { Tree } from "@minoru/react-dnd-treeview";


// function TreeReact() {
//     const [treeData, setTreeData] = useState(SampleData);
//     const handleDrop = (newTree) => setTreeData(newTree);
  
//     return (
//       <StylesProvider injectFirst>
//         <ThemeProvider theme={theme}>
//           <CssBaseLine />
//           <div className={styles.app}>
//             <Tree
//               tree={treeData}
//               rootId={0}
//               render={(node, { depth, isOpen, onToggle }) => (
//                 <CustomNode
//                   node={node}
//                   depth={depth}
//                   isOpen={isOpen}
//                   onToggle={onToggle}
//                 />
//               )}
//               dragPreviewRender={(monitorProps) => (
//                 <CustomDragPreview monitorProps={monitorProps} />
//               )}
//               onDrop={handleDrop}
//               classes={{
//                 root: styles.treeRoot,
//                 draggingSource: styles.draggingSource,
//                 dropTarget: styles.dropTarget
//               }}
//             />
//           </div>
//         </ThemeProvider>
//       </StylesProvider>
//     );
//   }
  
//   export default TreeReact;