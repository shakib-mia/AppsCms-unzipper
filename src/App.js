function App() {
  const input = () => {
    let getInput = document.createElement("input");
    getInput.type = "file";
    getInput.click();
    getInput.addEventListener("change", (event) => {
      console.log(event.target.files);
    });
  };

  return (
    <div className="bg-slate-100 h-screen">
      <div className="container w-1/2 mx-auto">
        <h1 className="text-3xl font-bold text-center">Archive Extractor</h1>
        <p className="text-center">
          Archive Extractor is a small and easy online tool that can extract
          over 70 types of compressed <br /> files, such as 7z, zipx, rar, tar,
          exe, dmg and much more.
        </p>

        <div className="mx-auto bg-white w-1/3 py-10">
          <div id="upload-section" className="text-center">
            <button
              onClick={input}
              type="file"
              className="bg-blue-600 text-white px-5 py-3 rounded-md"
            >
              <div className="text-xl">Choose File</div>
              <small className="text-light">From Your Computer</small>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
