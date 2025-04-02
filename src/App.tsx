import "./App.css";
import SkipCard from "./components/SkipCard";
import { mockData } from "./components/data";
import Drawer from "./components/Drawer";
import { useState, useEffect } from "react";
// import { Loader } from "./components/Loader";
function App() {
  const [data] = useState(mockData);
  const [showDrawer, setShowDrawer] = useState(false);
  const [selectedSkipId, setSelectedSkipId] = useState<unknown | number>(null);
  const selectedSkipSize =
    data?.find((skip) => skip.id === selectedSkipId)?.size || null;

  const closeDrawer = () => setShowDrawer(false);
  const handleClick = (id: number) => {
    if (selectedSkipId === id) {
      setSelectedSkipId(null);
      closeDrawer();
    } else {
      setSelectedSkipId(id);
    }
  };

  useEffect(() => {
    if (selectedSkipId) {
      setShowDrawer(true);
    }
  }, [selectedSkipId]);

  useEffect(() => {
    //* unselect skip when drawer is closed
    if (!showDrawer) {
      setSelectedSkipId(null);
    }
  }, [showDrawer]);

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

  return (
    <main className="text-3xl bg-[#121212] h-full !font-inter w-full relative">
      <section className="max-w-7xl mx-auto w-full px-2 pb-24">
        <div className=" flex items-center justify-center flex-col w-full mb-8">
          <h1 className="text-white text-2xl pt-12 mb-4 font-bold">
            Choose your skip size
          </h1>
          <p className="text-[#9ca3af] text-base">
            Select the skip size that best suits your needs
          </p>
        </div>
        {/* <Loader /> */}
        <section className="grid max-w-6xl mx-auto sm:grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] md:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-4">
          {data?.map((item) => (
            <SkipCard
              key={item.id}
              {...item}
              handleClick={handleClick}
              selectedSkipId={selectedSkipId}
            />
          ))}
        </section>
      </section>
      <Drawer
        closeDrawer={closeDrawer}
        showDrawer={showDrawer}
        skipSize={selectedSkipSize}
      />
    </main>
  );
}

export default App;
