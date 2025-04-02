import "./App.css";
import SkipCard from "./components/SkipCard";
import { mockData } from "./components/data";
import {
  useState,
  // useEffect
} from "react";
function App() {
  const [data] = useState(mockData);
  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
  //     );
  //     if (!response.ok) throw new Error("Failed to fetch data");
  //     return response.json();
  //   }
  //   fetchData().then((data) => console.log(data));
  // }, []);

  console.log({ data });

  return (
    <main className="text-3xl bg-[#121212] h-full !font-inter w-full">
      <section className="max-w-7xl mx-auto w-full px-2">
        <div className=" flex items-center justify-center flex-col w-full mb-8">
          <h1 className="text-white text-2xl pt-12 mb-4 font-bold">
            Choose your skip size
          </h1>
          <p className="text-[#9ca3af] text-base">
            Select the skip size that best suits your needs
          </p>
        </div>

        <section className="grid max-w-6xl mx-auto sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-4">
          <SkipCard />
          <SkipCard />
          <SkipCard />
          <SkipCard />
          <SkipCard />
          <SkipCard />
        </section>
      </section>
    </main>
  );
}

export default App;
