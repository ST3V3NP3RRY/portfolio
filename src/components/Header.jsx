import Navigation from "./Navigation";

const Header = () => {
  return (
    <div>
      <header className="App-header flex bg-slate-500 px-6 py-8 justify-between">
        <h1 className="text-3xl font-bold">Logo</h1>
        <Navigation />
      </header>
    </div>
  );
};

export default Header;
