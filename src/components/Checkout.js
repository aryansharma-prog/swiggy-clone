import { useDispatch, useSelector } from "react-redux";
import {
  IncrementItems,
  DecrementItems,
} from "../Stored/CartSlicer";

export default function Checkout() {
  const dispatch = useDispatch();

  // ✅ get cart items
  const items = useSelector((state) => state.cartslice.items);

  // ✅ handlers (PASS SINGLE ITEM)
  function handleIncrementItems(item) {
    dispatch(IncrementItems(item));
  }

  function handleDecrementItems(item) {
    dispatch(DecrementItems(item));
  }

  // ✅ SAFE PRICE EXTRACTOR
  const getItemPrice = (item) => {
    const priceInPaise =
      item.price ??
      item.defaultPrice ??
      item.card?.info?.price ??
      item.card?.info?.defaultPrice ??
      0;

    return priceInPaise / 100;
  };

  // ✅ TOTALS
  const itemTotal = items.reduce(
    (sum, item) => sum + getItemPrice(item) * item.quantity,
    0
  );

  const deliveryFee = 41;
  const platformFee = 19;
  const toPay = itemTotal + deliveryFee + platformFee;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-[1000px] mx-auto grid grid-cols-3 gap-6 px-4">

        {/* LEFT SIDE */}
        <div className="col-span-2 bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold mb-6">Your Cart</h2>

          {items.length === 0 && (
            <p className="text-gray-500 text-center">
              Your cart is empty
            </p>
          )}

          {items.map((item) => (
            <div
              key={item.id || item.card?.info?.id}
              className="flex justify-between items-center py-4 border-b"
            >
              {/* ITEM INFO */}
              <div>
                <p className="font-medium">
                  {item.name || item.card?.info?.name}
                </p>
                <p className="text-sm text-gray-500">
                  ₹{getItemPrice(item)}
                </p>
              </div>

              {/* QUANTITY CONTROLS */}
              <div className="flex items-center gap-6">
                <div className="flex items-center border rounded">
                  <button
                    className="px-3 py-1 text-gray-500"
                    onClick={() => handleDecrementItems(item)}
                  >
                    −
                  </button>

                  <span className="px-3 font-medium">
                    {item.quantity}
                  </span>

                  <button
                    className="px-3 py-1 text-green-600"
                    onClick={() => handleIncrementItems(item)}
                  >
                    +
                  </button>
                </div>

                <span className="font-semibold">
                  ₹{(getItemPrice(item) * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
          ))}

          {/* SUGGESTIONS */}
          <div className="mt-6 bg-gray-50 p-4 rounded flex gap-2 text-gray-600">
            <span className="text-xl">❝</span>
            <input
              type="text"
              placeholder="Any suggestions? We will pass it on..."
              className="bg-transparent outline-none w-full text-sm"
            />
          </div>

          {/* NO CONTACT */}
          <div className="mt-6 border rounded p-4 flex gap-3">
            <input type="checkbox" className="mt-1" />
            <div>
              <p className="font-medium">Opt in for No-contact Delivery</p>
              <p className="text-sm text-gray-500">
                Partner will safely place the order outside your door
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white rounded-lg shadow p-6 h-fit">
          <h3 className="font-bold mb-4">Bill Details</h3>

          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Item Total</span>
              <span>₹{itemTotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Delivery Fee</span>
              <span>₹{deliveryFee}</span>
            </div>

            <div className="flex justify-between">
              <span>Platform Fee</span>
              <span>₹{platformFee}</span>
            </div>

            <hr />

            <div className="flex justify-between text-lg font-bold text-black">
              <span>TO PAY</span>
              <span>₹{toPay.toFixed(2)}</span>
            </div>
          </div>

          <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
}
