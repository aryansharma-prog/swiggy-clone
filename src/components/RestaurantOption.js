import { dineoutRestaurants } from "../utils/RestData"
import RestCard from "./RestCard"

export default function RestaurantOption() {
  return (
    <div>
      <h1 className="font-bold ml-40 mt-18 text-[24px]">
        Discover best restaurants on Dineout
      </h1>

      <div className="w-[80%] mx-auto flex flex-nowrap overflow-x-auto gap-4 mt-6 scroll-smooth no-scrollbar">
        {dineoutRestaurants.map((restData) => (
          <RestCard
            key={restData.info.id}
            restData={restData}
          />
        ))}
      </div>
    </div>
  )
}