import { imageGridCards } from "../utils/FoodData";
import FoodCard from "./FoodCard";

export default function FoodOption() {
  return (
    <div className="flex flex-col relative">
      <div className="mb-6">
        <h1 className="font-bold ml-40 mt-30 text-[24px]">
          Our Best Options Available
        </h1>
      </div>

      <div className="w-[80%] container mx-auto flex flex-wrap gap-4">
        {imageGridCards.map((foodData) => (
          <FoodCard key={foodData.id} foodData={foodData} />
        ))}
      </div>
    </div>
  );
}