import "./App.css";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="w-screen min-h-screen fixed z-0 flex justify-center px-6 py-40 pointer-events-none">
        <div className="absolute inset-0 bg-[url(/grid.svg)] opacity-25"></div>
        <img
          src="/mesh.svg"
          className="absolute bottom-1 opacity-35 h-[600px] z-10"
        />
        <div className="bg-gradient-to-c from-transparent via-transparent to-white absolute inset-0 z-20"></div>
      </div>
      <div className="relative z-20">
        <NavBar />
        <div className="container mx-auto">
          <HeroSection />
        </div>
      </div>
    </>
  );
}

export default App;