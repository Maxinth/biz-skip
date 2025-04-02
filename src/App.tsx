import "./App.css";
import SkipCard from "./components/SkipCard";
import Drawer from "./components/Drawer";
import { useState, useEffect } from "react";
import { Loader } from "./components/Loader";

export interface SkipData {
  id: number;
  size: number;
  price_before_vat: number;
  hire_period_days: number;
}
function App() {
  const [data, setData] = useState<SkipData[]>([]);
  const [showDrawer, setShowDrawer] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [selectedSkipId, setSelectedSkipId] = useState<number | null>(null);
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

  useEffect(() => {
    const fetchSkips = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const result = await response.json();
        setData(result);
        setError(false);
      } catch (e) {
        if (e) {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchSkips();
  }, []);

  return (
    <main
      className={`text-3xl bg-[#121212] h-screen overflow-y-auto !font-inter w-full relative px-4`}
    >
      <section className={`max-w-7xl mx-auto w-full px-2 pb-24 `}>
        <div className=" flex items-center justify-center flex-col w-full mb-8">
          <h1 className="text-white text-2xl pt-12 mb-4 font-bold">
            Choose your skip size
          </h1>
          <p className="text-[#9ca3af] text-base">
            Select the skip size that best suits your needs
          </p>
        </div>
        {loading && <Loader />}
        {!loading && data?.length > 0 ? (
          <section className="grid max-w-6xl mx-auto  grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]  sm:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]  gap-4">
            {data?.map((item: SkipData, index) => (
              <SkipCard
                index={index}
                key={item.id}
                {...item}
                handleClick={handleClick}
                selectedSkipId={selectedSkipId}
              />
            ))}
          </section>
        ) : null}
        {error && (
          <p className="text-white text-center h-[70vh] font-medium text-lg flex items-center justify-center">
            Something went wrong 😫
          </p>
        )}
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
