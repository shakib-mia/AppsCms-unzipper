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

  return (
    <div>
      <ul>
        {childs.map((item) => (
          <li key={childs.indexOf(item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
