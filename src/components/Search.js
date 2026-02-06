import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestInfo from "./RestInfo";
import CommonHeader from "./commonHeader";

export default function Search() {
  const { id } = useParams();

  const [food, setFood] = useState("");
  const [RestData, setRestData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const proxyServer = "https://cors-anywhere.herokuapp.com/";
        const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;

        const response = await fetch(proxyServer + swiggyAPI);
        const data = await response.json();

        /* 🔥 FIX STARTS HERE */
        const cards = data?.data?.cards || [];

        const regularCard = cards.find(
          (c) => c?.groupedCard?.cardGroupMap?.REGULAR
        );

        const tempData =
          regularCard?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
        /* 🔥 FIX ENDS HERE */

        let allItems = [];

        tempData.forEach((items) => {
          const card = items?.card?.card;

          // CASE 1: Direct itemCards
          if (card?.itemCards) {
            allItems.push(...card.itemCards);
          }

          // CASE 2: Categories → itemCards
          if (card?.categories) {
            card.categories.forEach((cat) => {
              if (cat?.itemCards) {
                allItems.push(...cat.itemCards);
              }
            });
          }
        });

        const filteredItems = allItems.filter((item) =>
          item?.card?.info?.name
            ?.toLowerCase()
            .includes(food.toLowerCase())
        );

        /* ✅ MINIMAL FIX: REMOVE DUPLICATE ITEMS */
        const uniqueItems = Array.from(
          new Map(
            filteredItems.map((item) => [
              item.card.info.id,
              item,
            ])
          ).values()
        );

        setRestData(uniqueItems);
      } catch (err) {
        console.error(err);
      }
    }

    if (food.length > 1) {
      fetchData();
    } else {
      setRestData([]);
    }
  }, [food, id]);

  return (
    <>
    <div className="w-[80%] mx-auto mt-20">
      <input
        className="w-full pl-10 py-4 text-2xl bg-gray-200 rounded-2xl border outline-none"
        placeholder="Search here"
        value={food}
        onChange={(e) => setFood(e.target.value)}
      />

      {/* SEARCH RESULTS */}
      <div className="mt-10 divide-y">
        {RestData.length === 0 && food.length > 1 && (
          <p className="text-center text-gray-500 py-10">
            No items found
          </p>
        )}

        {RestData.map((item) => (
          <RestInfo
            key={item.card.info.id}
            items={item.card.info}
          />
        ))}
      </div>
    </div>
    </>
  );
}
