import Navbar from "./Navbar";

const Header = () => {
  return (
    <div>
      <header className="App-header flex bg-sky-900 px-6 py-8 justify-between">
        <h1 className="text-3xl font-bold">Logo</h1>
        <Navbar />
      </header>
    </div>
  );
};

export default Header;
