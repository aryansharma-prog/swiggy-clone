import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-[#ff5200] font-bold overflow-x-hidden">

      {/* Navbar */}
      <div className="flex items-center justify-between max-w-7xl mx-auto px-6 py-6 text-white">
        <img
          className="w-40 h-12 object-contain"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"
          alt="Swiggy"
        />

        <div className="flex gap-8 items-center">
          <a href="https://www.swiggy.com/corporate/">Swiggy Corporate</a>
          <a href="https://partner.swiggy.com/login#/swiggy">Partner With Us</a>
          <a className="border rounded px-4 py-2" href="#">Get the App</a>
          <a className="rounded-2xl px-5 py-2 bg-black w-36 text-center" href="#">Sign In</a>
        </div>
      </div>

      {/* HERO SECTION */}
      <div className="relative flex flex-col items-center justify-center min-h-[500px] overflow-hidden gap-6">

        <img
          className="absolute right-0 w-[250px] h-[450px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png"
          alt=""
        />

        <img
          className="absolute left-0 w-[250px] h-[450px]"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png"
          alt=""
        />

        <div className="relative z-10 max-w-4xl text-center px-6 text-[42px] sm:text-[48px] text-white font-bold">
          Order food & groceries. Discover best restaurants. Swiggy it!
        </div>

        <div className="relative z-10 mx-auto w-full flex justify-center">
          <div className="flex gap-6 p-4 rounded-xl w-full max-w-3xl flex-wrap">
            <input
              className="flex-1 min-w-[200px] px-4 py-4 bg-white text-black outline-none rounded-md"
              placeholder="Enter your delivery location"
            />
            <input
              className="flex-1 min-w-[200px] px-4 py-4 bg-white text-black outline-none rounded-md"
              placeholder="Search for restaurants, items or more"
            />
          </div>
        </div>
      </div>

      {/* ✅ BOTTOM BOXES — NOW REALLY OUTSIDE */}
      <div className="flex flex-wrap justify-center gap-6 w-full px-4 pb-10">
        <Link to="/restaurants">
          <img
            className="w-84 h-84 object-cover rounded-lg"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png"
            alt=""
          />
        </Link>

        <a href="https://www.swiggy.com/instamart">
          <img
            className="w-84 h-84 object-cover rounded-lg"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png"
            alt=""
          />
        </a>

        <a href="https://www.swiggy.com/dineout">
          <img
            className="w-84 h-84 object-cover rounded-lg"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png"
            alt=""
          />
        </a>
      </div>

    </div>
  );
}