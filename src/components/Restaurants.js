import { useState, useEffect } from "react";
import RestDetails from "./RestDetails";
import Shimmer from "./Shimmer";
import FastFoodOption from "./FastFoodOption";

export default function Restaurants() {
  const [dineData, setDineData] = useState([]);
  const [allDineData, setAllDineData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [showFilter, setShowFilter] = useState(false);

  // ⭐ Rating
  const filterByRating = () => {
    setDineData(allDineData.filter(r => r.info.avgRating > 4));
    setShowFilter(false);
  };

  // ⬆️ Cost Low → High
  const lowToHigh = () => {
    setDineData([...dineData].sort(
      (a, b) =>
        Number(a.info.costForTwo.replace(/\D/g, "")) -
        Number(b.info.costForTwo.replace(/\D/g, ""))
    ));
    setShowFilter(false);
  };

  // ⬇️ Cost High → Low
  const highToLow = () => {
    setDineData([...dineData].sort(
      (a, b) =>
        Number(b.info.costForTwo.replace(/\D/g, "")) -
        Number(a.info.costForTwo.replace(/\D/g, ""))
    ));
    setShowFilter(false);
  };

  // ⏱ Delivery Time
  const deliveryTime = () => {
    setDineData([...dineData].sort(
      (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
    ));
    setShowFilter(false);
  };

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true"
      );
      const json = await res.json();

      const cards = json?.data?.cards || [];
      const restCard = cards.find(
        c => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setDineData(restaurants);
      setAllDineData(restaurants);

      const foodCard = cards.find(
        c => c?.card?.card?.gridElements?.infoWithStyle?.info
      );
      setFoodData(
        foodCard?.card?.card?.gridElements?.infoWithStyle?.info || []
      );
    }

    fetchData();
  }, []);

  if (dineData.length === 0) return <Shimmer />;

  return (
    <>
      {/* FOOD OPTIONS */}
      <div className="mt-6">
        <h2 className="ml-45 text-xl font-bold mb-4">
          What's on your mind?
        </h2>
        <div className="ml-45 w-[80%] flex gap-4 overflow-x-scroll no-scrollbar">
          {foodData.map(food => (
            <FastFoodOption key={food.id} food={food} />
          ))}
        </div>
      </div>

      {/* FILTER BUTTON */}
      <div className="relative ml-50 mt-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="px-4 py-2 rounded-full border bg-white shadow-sm flex items-center gap-2"
        >
          ☰ Filter
        </button>

        {/* FILTER BOX */}
        {showFilter && (
          <div className="absolute z-50 mt-2 w-56 bg-white border rounded-lg shadow-lg">
            <p
              onClick={filterByRating}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer hover:text-orange-600"
            >
              ⭐ Rating 4.0+
            </p>
            <p
              onClick={lowToHigh}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer hover:text-orange-600"
            >
              ⬆️ Cost: Low to High
            </p>
            <p
              onClick={highToLow}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer hover:text-orange-600"
            >
              ⬇️ Cost: High to Low
            </p>
            <p
              onClick={deliveryTime}
              className="px-4 py-3 hover:bg-gray-100 cursor-pointer hover:text-orange-600"
            >
              ⏱ Delivery Time
            </p>
          </div>
        )}
      </div>

      {/* RESTAURANTS */}
      <div className="flex ml-45 flex-wrap gap-4 mt-10">
        {dineData.map(dinedata => (
          <RestDetails
            key={dinedata.info.id}
            dinedata={dinedata}
          />
        ))}
      </div>
    </>
  );
}
