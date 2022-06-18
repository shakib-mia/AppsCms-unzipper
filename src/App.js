import "./App.css";

function App() {
  const input = () => {
    let getInput = document.createElement("input");
    getInput.type = "file";
    getInput.click();
    getInput.addEventListener("change", (event) => {
      console.log(event.target.files[0]);
    });
  };

  const handleFileUpload = (file) => {
    if (file.name.includes(".zip")) {
      console.log(file);
    }
  };

  const handleMouseOver = (e) => {
    const element = document.getElementsByClassName("custom-file-input");
    const styles = window.getComputedStyle(element, "::before");
    styles.backgroundColor = "rgba(0, 0, 0, 0.5)";
  };

  return (
    <div className="bg-slate-100 h-screen">
      <div className="container w-1/2 mx-auto">
        <div className="header-text py-10">
          <h1 className="text-3xl font-bold text-center">Archive Extractor</h1>
          <p className="text-center">
            Archive Extractor is a small and easy online tool that can extract
            over 70 types of compressed <br /> files, such as 7z, zipx, rar and
            much more.
          </p>
        </div>

        <div className="mx-auto bg-white py-10 border border-1 rounded">
          <div id="upload-section" className="text-center">
            <button
              onClick={input}
              type="file"
              className="bg-blue-600 text-white px-16 py-3 rounded-md"
            >
              <div className="text-xl">Choose File</div>
              <small className="text-light">From Your Computer</small>
            </button>
          </div>
          <div className="flex justify-center">
            <div id="drop_zone demo" className="p-10 droptarget">
              <input
                type="file"
                onChange={(e) => handleFileUpload(e.target.files[0])}
                id="file"
                onClick={(e) => e.preventDefault()}
                onDrag={(e) => {
                  handleMouseOver(e);
                }}
                className="custom-file-input"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
