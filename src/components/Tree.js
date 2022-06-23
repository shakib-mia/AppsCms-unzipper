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
    caret.style.transform = "rotate(-90deg)";
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
        <i className="fa-solid fa-caret-down mr-4" id="caret"></i>{" "}
        <i className="fa-solid fa-folder"></i> {childs[0].split("/")[0]}
      </span>
      <ul id="files">
        {childs.map((item) => (
          <li
            key={childs.indexOf(item)}
            className="hover:bg-green-100 cursor-pointer pl-4"
          >
            <a href={item} download className="flex items-center">
              {item.split(".")[item.split(".").length - 1] === "js" ||
              item.split(".")[item.split(".").length - 1] === "js" ? (
                <i className="fa-brands mr-4 fa-js-square"></i>
              ) : item.split(".")[item.split(".").length - 1] === "html" ||
                item.split(".")[item.split(".").length - 1] === "htm" ? (
                <i className="fa-solid mr-4 fa-code"></i>
              ) : item.split(".")[item.split(".").length - 1] === "pdf" ||
                item.split(".")[item.split(".").length - 1] === "pdf" ? (
                <i className="fa-solid mr-4 fa-file-pdf"></i>
              ) : item.split(".")[item.split(".").length - 1] === "scss" ||
                item.split(".")[item.split(".").length - 1] === "_sass" ? (
                <i className="fa-brands mr-4 fa-sass"></i>
              ) : item.split(".")[item.split(".").length - 1] === "png" ||
                item.split(".")[item.split(".").length - 1] === "jpg" ||
                item.split(".")[item.split(".").length - 1] === "png" ||
                item.split(".")[item.split(".").length - 1] === "jpg" ? (
                <i className="fa-regular mr-4 fa-file-image"></i>
              ) : item.split(".")[item.split(".").length - 1] === "gif" ? (
                <i className="fa-thin fa-gif"></i>
              ) : item.split(".")[item.split(".").length - 1] === "md" ? (
                <img
                  src="https://cdn.iconscout.com/icon/premium/png-256-thumb/md-file-1932190-1635753.png"
                  alt="icon"
                  className="w-5 h-5 mr-4"
                />
              ) : item.split(".")[item.split(".").length - 1] === "json" ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA2qxrpBqZDPi7_zPqc5GzZCHO3N328jBXONV2TUzRMO0EfBQ2DpsGbDtmPaKWQg-3pN4&usqp=CAU"
                  alt="icon"
                  className="w-5 h-5 mr-4"
                />
              ) : item.split(".")[item.split(".").length - 1] ===
                "gitignore" ? (
                <img
                  src="https://rubbersheep.gallerycdn.vsassets.io/extensions/rubbersheep/gi/0.2.11/1494307055124/Microsoft.VisualStudio.Services.Icons.Default"
                  alt="icon"
                  className="w-5 h-5 mr-4"
                />
              ) : item.split(".")[item.split(".").length - 1] === "css" ? (
                <i className="fa-brands fa-css3 mr-4"></i>
              ) : (
                ""
              )}
              {item.split("/").pop()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tree;
