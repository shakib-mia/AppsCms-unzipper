import React, { useEffect, useState } from "react";

const Tree = ({ data }) => {
  return (
    <div>
      {data.map((tree) => (
        <TreeNode node={tree}></TreeNode>
      ))}
    </div>
  );
};

const TreeNode = ({ node }) => {
  const childs = Object.keys(node);
  const [hasChildFolders, setHasChildFolders] = useState(false);

  useEffect(() => {
    childs.map((child) =>
      child.includes("/") ? setHasChildFolders(true) : setHasChildFolders(false)
    );
  }, [childs]);

  console.log(childs.map((item) => item.split(".")));

  return (
    <div>
      <span id="parent">
        <i class="fa-solid fa-caret-down"></i>{" "}
        <i class="fa-solid fa-folder"></i> {childs[0].split("/")[0]}
      </span>
      <ul className="ml-10" id="files">
        {childs.map((item) => (
          <li key={childs.indexOf(item)}>
            {item.split(".")[1] === "js" || item.split(".")[2] === "js" ? (
              <i class="fa-brands mr-4 fa-js-square"></i>
            ) : item.split(".")[1] === "html" ||
              item.split(".")[2] === "html" ||
              item.split(".")[2] === "htm" ? (
              <i class="fa-solid mr-4 fa-code"></i>
            ) : item.split(".")[1] === "pdf" || item.split(".")[2] === "pdf" ? (
              <i class="fa-solid mr-4 fa-file-pdf"></i>
            ) : item.split(".")[1] === "scss" ||
              item.split(".")[1] === "_sass" ? (
              <i class="fa-brands mr-4 fa-sass"></i>
            ) : item.split(".")[1] === "png" ||
              item.split(".")[1] === "jpg" ||
              item.split(".")[2] === "png" ||
              item.split(".")[2] === "jpg" ? (
              <i class="fa-regular mr-4 fa-file-image"></i>
            ) : item.split(".")[2] === "gif" ? (
              <i class="fa-thin fa-gif"></i>
            ) : item.split(".")[1] === "css" ? (
              <i class="fa-brands fa-css3 mr-4"></i>
            ) : (
              ""
            )}
            {item.split("/").pop()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
