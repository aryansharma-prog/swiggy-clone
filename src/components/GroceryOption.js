import { GrocerGridCard } from "../utils/GroceryData";
import GroceryCard from "./GroceryCard";

export default function GroceryOption() {
  return (
    <div className="w-[80%] container mx-auto flex flex-col">
      <h1 className="font-bold text-[24px] mb-4 mt-10">
        Shop groceries on Instamart
      </h1>

      <div className="flex flex-nowrap overflow-x-auto no-scrollbar scroll-smooth">
        {GrocerGridCard.map((foodData) => (
          <GroceryCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  );
}