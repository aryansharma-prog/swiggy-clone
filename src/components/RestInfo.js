import { useDispatch, useSelector } from "react-redux";
import {
  addItems,
  IncrementItems,
  DecrementItems,
} from "../Stored/CartSlicer";

export default function RestInfo({ items }) {
  const dispatch = useDispatch();

  // cart items from redux
  const cartItems = useSelector(state => state.cartslice.items);

  const element = cartItems.find(item => item.id === items.id);
  const count = element ? element.quantity : 0;

  function handleAddItems() {
    dispatch(addItems(items));
  }

  function handleIncrementItems() {
    dispatch(IncrementItems(items));
  }

  function handleDecrementItems() {
    dispatch(DecrementItems(items));
  }

  return (
    <div className="flex justify-between gap-4 py-6">
      {/* LEFT */}
      <div className="w-[70%]">
        <p className="font-semibold text-lg">{items?.name}</p>

        <p className="text-sm font-medium">
          ₹{items?.price ? items.price / 100 : items.defaultPrice / 100}
        </p>

        {items?.ratings?.aggregatedRating?.rating && (
          <p className="text-sm text-green-700">
            ⭐ {items.ratings.aggregatedRating.rating}
            {" (" + items.ratings.aggregatedRating.ratingCountV2 + ")"}
          </p>
        )}

        <p className="text-sm text-gray-500 mt-2">
          {items?.description}
        </p>
      </div>

      {/* RIGHT */}
      <div className="relative">
        <img
          className="w-42 h-42 rounded-lg object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            items?.imageId
          }
          alt=""
        />

        {count === 0 ? (
          <button
            className="absolute bottom-[-10px] left-13 bg-white text-green-600 font-semibold border rounded px-4 py-1 shadow"
            onClick={handleAddItems}
          >
            ADD
          </button>
        ) : (
          <div className="absolute bottom-[-9px] left-7 flex gap-3 text-2xl text-green-600 px-6 py-2 shadow-md border bg-white rounded-2xl">
            <button onClick={handleDecrementItems}>-</button>
            <span>{count}</span>
            <button onClick={handleIncrementItems}>+</button>
          </div>
        )}
      </div>
    </div>
  );
}
