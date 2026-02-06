import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MenuCard from "./MenuCard";
import CommonHeader from "./commonHeader";
import { Link } from "react-router-dom";


export default function RestaurantMenu() {
  const { id } = useParams();
  const [menuCards, setMenuCards] = useState([]);
  const [selected, setSelected] = useState(null);
  useEffect(() => {

    async function fetchData() {

      const proxyServer = "https://cors-anywhere.herokuapp.com/"
      const swiggyAPI = `https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=${id}`;
      const response = await fetch(proxyServer + swiggyAPI);
      const data = await response.json();
      const tempData = data?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      const filterData = tempData.filter((items) => 'title' in items?.card?.card)
      setMenuCards(filterData);
    }

    fetchData();
  }, [id])
    ;



  return (
    <>
      <div className="w-[80%] mx-auto mt-20 mb-20">
        <Link to={`/city/ghaziabad/${id}/search`}>
          <p className="w-full text-center py-4 rounded-4xl bg-gray-200 text-2xl">Search for Dishes</p>
        </Link>
      </div>

  <div className="w-[80%] mx-auto mt-20 mb-20 flex gap-4">
  {/* VEG */}
  <button
    onClick={() => setSelected(selected === "veg" ? null : "veg")}
    className={`flex items-center gap-2 px-6 py-2 rounded-full border text-lg font-medium transition
      ${
        selected === "veg"
          ? "border-green-600 bg-green-50 text-green-700"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
      }`}
  >
    <span className="w-3 h-3 rounded-full border border-green-600 flex items-center justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span>
    </span>
    Veg
  </button>

  {/* NON VEG */}
  <button
    onClick={() => setSelected(selected === "nonveg" ? null : "nonveg")}
    className={`flex items-center gap-2 px-6 py-2 rounded-full border text-lg font-medium transition
      ${
        selected === "nonveg"
          ? "border-red-600 bg-red-50 text-red-700"
          : "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
      }`}
  >
    <span className="w-3 h-3 rounded-full border border-red-600 flex items-center justify-center">
      <span className="w-1.5 h-1.5 rounded-full bg-red-600"></span>
    </span>
    Non-Veg
  </button>
  </div>


      <div className="w-[80%] mx-auto mt-20">
        {
          menuCards.map((menuItems) => <MenuCard key={menuItems?.card?.card?.title} menuItems={menuItems?.card?.card}  foodselected={selected}></MenuCard>)
        }
      </div>
    </>
  )

}
