export default function FastFoodOption({ food }) {
  if (!food || !food.imageId) return null;   // 🔑 THIS LINE

  return (
    <div className="w-[120px] flex-shrink-0 cursor-pointer">
      <img
        className="w-full h-45 w-36 object-cover rounded-xl"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/" +
          food.imageId
        }
        alt={food.action?.text}
      />
    </div>
  );
}
