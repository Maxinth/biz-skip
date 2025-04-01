import "./App.css";
import SkipCard from "./components/SkipCard";
function App() {
  return (
    <main className="text-3xl bg-[#121212] h-screen">
      <div className=" flex items-center justify-center flex-col w-full">
        <h1 className="text-white text-2xl pt-12 mb-4">
          Choose your skip size
        </h1>
        <p className="text-[#9ca3af] text-base">
          Select the skip size that best suits your needs
        </p>
      </div>
      <section className="grid grid-cols-2 gap-4">
        <SkipCard />
        <SkipCard />
      </section>
    </main>
  );
}

export default App;
