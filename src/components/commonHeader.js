import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Checkout from "./Checkout";
import SwiggyIcon from "../data/swiggylogo";
export default function CommonHeader() {

  const counter = useSelector(state => state.cartslice.count);
  return (
    <header className="w-full shadow-sm ">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-20 px-4">

        {/* LEFT SECTION */}
        <div className="flex items-center gap-8">
          {/* LOGO */}
          <SwiggyIcon size={48} />

          {/* LOCATION */}
          <div className="flex items-center gap-1 cursor-pointer group">
            <span className="font-bold text-gray-800 border-b-2 border-black">
              Other
            </span>
            <span className="text-orange-500 text-sm ml-1">▼</span>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <nav className="flex items-center gap-10 text-gray-700 font-medium">

          <a className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
            <span>🏢</span>
            Swiggy Corporate
          </a>

          <a className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
            <span>🔍</span>
            Search
          </a>

          <a className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
            <span>🏷️</span>
            <span className="relative">
              Offers
              <span className="absolute -top-2 -right-4 text-[10px] text-orange-500 font-bold">
                NEW
              </span>
            </span>
          </a>

          <a className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
            <span>❓</span>
            Help
          </a>

          <a className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
            <span>👤</span>
            Sign In
          </a>

          <Link to="/checkout" className="flex items-center gap-2 hover:text-orange-500 cursor-pointer">
            <span>🛒</span>
            Cart
            <span className="font-bold">{counter}</span>
          </Link>

        </nav>
      </div>
    </header>
  );
}
