import "./App.css";
import { useEffect, useState } from "react";
import JSZip from "jszip";
import Tree from "./components/Tree";
import useDrivePicker from "react-google-drive-picker/dist";

function App() {
  const [about, setAbout] = useState({});
  const [details, setDetails] = useState();
  const [openPicker, authResponse] = useDrivePicker();
  const reader = new FileReader();
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

  const handleDrivePicker = () => {
    console.log("first");
    openPicker({
      clientId:
        "143162536873-dnf0graln9fs210m2utir1cfisbq3g8i.apps.googleusercontent.com",
      developerKey: "AIzaSyBXY15X39ayQfZrVv69H43HeoW3VaOJ7j0",
      viewId: "DOCS",
      // token: token, // pass oauth token in case you already have one
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      // customViews: customViewsArray, // custom view
      callbackFunction: (data) => {
        if (data.action === "cancel") {
          console.log("User clicked cancel/close button");
        }
        console.log(data);
      },
    });
  };

  const handleURLUpload = (data) => {
    const link = prompt("Enter a URL to upload", "https://");
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
          className={`mx-auto bg-white w-3/4 py-20 border border-1 rounded ${
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

          <div
            id="online-storages-container"
            className="text-center flex justify-center gap-4 my-3"
          >
            <span
              id="gDrive"
              className="hover:text-blue-500 hover:underline flex items-center gap-2 cursor-pointer"
              onClick={handleDrivePicker}
            >
              <div className="gdrive-icon"></div> From Google Drive
            </span>
            <a href="g" className="hover:text-blue-500 hover:underline">
              <i class="fa-brands fa-dropbox"></i> Dropbox
            </a>
            <span
              href="g"
              className="hover:text-blue-500 hover:underline"
              onClick={handleURLUpload}
            >
              <i class="fa-solid fa-link text-slate-700 hover:text-slate-900"></i>{" "}
              URL
            </span>
          </div>

          <div className="flex justify-center">
            <div id="drop_zone demo">
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
