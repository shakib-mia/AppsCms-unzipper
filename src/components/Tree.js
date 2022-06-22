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

  const caret = document.getElementById("caret");
  let getInput = document.getElementById("check");
  if (getInput) {
    getInput.style.display = "none";
  }

  const toggle = () => {
    getInput.click();
    caret.style.transform = "rotate(-45deg)";
    document.getElementById("files").style.display = "none";

    if (getInput.checked) {
      caret.style.transform = "rotate(0deg)";
      document.getElementById("files").style.display = "block";
    }
  };

  return (
    <div>
      <input type="checkbox" id="check" />
      <span
        id="parent"
        onClick={toggle}
        className="hover:bg-green-200 cursor-pointer"
      >
        <i class="fa-solid fa-caret-down" id="caret"></i>{" "}
        <i class="fa-solid fa-folder"></i> {childs[0].split("/")[0]}
      </span>
      <ul id="files">
        {childs.map((item) => (
          <li
            key={childs.indexOf(item)}
            className="hover:bg-green-100 cursor-pointer pl-4 flex items-center"
          >
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
            ) : item.split(".")[1] === "md" ? (
              <img
                src="https://cdn.iconscout.com/icon/premium/png-256-thumb/md-file-1932190-1635753.png"
                alt="icon"
                className="w-5 h-5 mr-4"
              />
            ) : item.split(".")[1] === "json" ? (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2qxrpBqZDPi7_zPqc5GzZCHO3N328jBXONV2TUzRMO0EfBQ2DpsGbDtmPaKWQg-3pN4&usqp=CAU"
                alt="icon"
                className="w-5 h-5 mr-4"
              />
            ) : item.split(".")[1] === "gitignore" ? (
              <img
                src="https://rubbersheep.gallerycdn.vsassets.io/extensions/rubbersheep/gi/0.2.11/1494307055124/Microsoft.VisualStudio.Services.Icons.Default"
                alt="icon"
                className="w-5 h-5 mr-4"
              />
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
