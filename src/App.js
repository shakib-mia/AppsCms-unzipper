import "./App.css";
import { useEffect, useState } from "react";
import JSZip from "jszip";
import Tree from "./components/Tree";

function App() {
  const [about, setAbout] = useState({});
  const [details, setDetails] = useState();
  localStorage.removeItem("item");

  // handle button click

  const input = () => {
    let getInput = document.createElement("input");
    getInput.type = "file";
    getInput.click();
    getInput.addEventListener("change", (event) => {
      const file = event.target.files[0];
      if (
        file?.name.includes(".zip") ||
        file?.name.includes(".7z") ||
        file?.name.includes(".dmg") ||
        file?.name.includes(".zipx") ||
        file?.name.includes(".rar") ||
        file?.name.includes(".tar") ||
        file?.name.includes(".exe")
      ) {
        setAbout(file);
        JSZip.loadAsync(file).then((data) => {
          setDetails(data.files);
        });
      } else {
        document.getElementById("details-section").style.display = "block";
        document
          .getElementById("details-section")
          .classList.add("text-rose-500");
        document.getElementById("details-section").innerText =
          "Unsupported File Format";
      }
    });
  };

  // handle drag and drop
  const handleUploads = (e) => {
    if (
      e?.name.includes(".zip") ||
      e?.name.includes(".7z") ||
      e?.name.includes(".dmg") ||
      e?.name.includes(".zipx") ||
      e?.name.includes(".rar") ||
      e?.name.includes(".tar") ||
      e?.name.includes(".exe")
    ) {
      setAbout(e);
      JSZip.loadAsync(e).then((data) => {
        setDetails(data.files);
      });
    } else {
      document.getElementById("details-section").style.display = "block";
      document.getElementById("details-section").classList.add("text-rose-500");
      document.getElementById("details-section").innerText =
        "Unsupported File Format";
    }
  };

  useEffect(() => {
    if (details) {
      setDetails(details);
    }
  }, [details]);

  return (
    <div className="h-screen">
      <div className="container w-1/2 mx-auto">
        <div className="header-text py-10">
          <h1 className="text-3xl font-bold text-center">Archive Extractor</h1>
          <p className="text-center">
            Archive Extractor is a small and easy online tool that can extract
            over 70 types of compressed <br /> files, such as 7z, zipx, rar,
            tar,exe,dmg and much more.
          </p>
        </div>

        <div
          className={`mx-auto bg-white py-10 border border-1 rounded ${
            details ? "hidden" : "block"
          }`}
          id="fileSection"
        >
          <div id="upload-section" className="text-center">
            <button
              onClick={() => input()}
              type="file"
              className="bg-blue-600 text-white px-16 py-3 rounded-md"
            >
              <div className="text-xl">Choose File</div>
              <small className="text-light">From Your Computer</small>
            </button>
          </div>
          <div className="flex justify-center">
            <div
              id="drop_zone demo"
              className="border border-dashed border-rose-500 droptarget mt-3"
            >
              <input
                type="file"
                onChange={(e) => handleUploads(e.target.files[0])}
                id="file"
                onClick={(e) => e.preventDefault()}
                className="custom-file-input"
              />
            </div>
          </div>
        </div>
        <div id="details-section" className={details ? "block" : "hidden"}>
          <h1 className="text=2xl font-bold">Name: {about?.name}</h1>
          <h1 className="text=2xl font-bold">
            Size: {(about?.size / (1024 * 1024)).toString().slice(0, 3)}MB
          </h1>
        </div>
        <div id="tree jstree">
          {details ? <Tree data={[details]}></Tree> : ""}
        </div>
      </div>
    </div>
  );
}

export default App;
