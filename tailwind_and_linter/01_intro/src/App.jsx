function App() {
  return (
    <>
      <header className="bg-emerald-100 border-2 flex items-center justify-between w-96 mx-auto">
        <div className="">Logo</div>

        <ul>
          <li>gfgd</li>
          <li>fhff</li>
          <li>fgdfh</li>
          <li>hgfhf</li>
          <li>fhgh</li>
        </ul>

        <button>Contat us</button>
      </header>

      <main>
        Main
        <h1 className="text-7xl text-green-500 font-medium">Hello World!</h1>
        <div className="grid grid-cols-3 gap-6 mt10">
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
          <div className="">image</div>
        </div>
        <button className="flex justify-center items-center mt-50 mx-auto w-100 h-30 bg-gray-400 rounded-4xl hover:bg-gray-700 transition-colors duration-300 ease-in-out cursor-pointer animate-bounce shadow-xl shadow-green-100">
          Add Image
        </button>
      </main>

      <footer className="mt-10 bg-emerald-100 border-4 rounded-lg">
        <form>
          <input
            className="px-2 py-1 rounded border border-solid border-transparent duration-500 ease-linear transition-colors hover:border-green-500 focus:border-purple-500 outline-none shadow-none block mb-10"
            type="text"
            placeholder="Enter email:"
          />

          <button className="inline-block sm:inline-block"></button>
        </form>
      </footer>
    </>
  );
}

export default App;
