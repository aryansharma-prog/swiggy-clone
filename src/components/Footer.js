export default function Footer() {
  return (
    <footer className="bg-[#f6f6f6] text-gray-700 pt-12">
      
      {/* TOP FOOTER */}
      <div className="w-[80%] mx-auto grid grid-cols-5 gap-8">

        {/* LOGO */}
        <div className="space-y-4">
          <img
            className="w-36"
            src="https://media-assets.swiggy.com/portal/testing/seo-home/Group.svg"
            alt="Swiggy"
          />
          <p className="text-sm text-gray-500">© 2025 Swiggy Limited</p>
        </div>

        {/* COMPANY */}
        <div className="space-y-3">
          <h3 className="font-semibold text-black">Company</h3>
          <a href="https://www.swiggy.com/about" className="block hover:text-black">About Us</a>
          <a href="https://www.swiggy.com/corporate/" className="block hover:text-black">Swiggy Corporate</a>
          <a href="https://careers.swiggy.com/" className="block hover:text-black">Careers</a>
          <a href="https://www.swiggy.com/team" className="block hover:text-black">Team</a>
          <a href="https://www.swiggy.com/swiggy-one" className="block hover:text-black">Swiggy One</a>
          <a href="https://www.swiggy.com/instamart" className="block hover:text-black">Swiggy Instamart</a>
          <a href="https://www.swiggy.com/dineout" className="block hover:text-black">Swiggy Dineout</a>
          <a href="https://www.swiggy.com/minis" className="block hover:text-black">Minis</a>
          <a href="https://www.swiggy.com/pyng" className="block hover:text-black">Pyng</a>
        </div>

        {/* CONTACT */}
        <div className="space-y-3">
          <h3 className="font-semibold text-black">Contact us</h3>
          <a href="https://www.swiggy.com/support" className="block hover:text-black">Help & Support</a>
          <a href="https://partner.swiggy.com/login" className="block hover:text-black">Partner With Us</a>
          <a href="https://www.swiggy.com/ride-with-us" className="block hover:text-black">Ride With Us</a>

          <h3 className="font-semibold text-black mt-6">Legal</h3>
          <a href="https://www.swiggy.com/terms-and-conditions" className="block hover:text-black">Terms & Conditions</a>
          <a href="https://www.swiggy.com/cookie-policy" className="block hover:text-black">Cookie Policy</a>
          <a href="https://www.swiggy.com/privacy-policy" className="block hover:text-black">Privacy Policy</a>
        </div>

        {/* AVAILABLE IN */}
        <div className="space-y-3">
          <h3 className="font-semibold text-black">Available in:</h3>
          <p>Bangalore</p>
          <p>Gurgaon</p>
          <p>Hyderabad</p>
          <p>Delhi</p>
          <p>Mumbai</p>
          <p>Pune</p>

          <select className="mt-2 px-3 py-2 border rounded-lg text-sm bg-white">
            <option>685 cities</option>
          </select>
        </div>

        {/* LIFE AT SWIGGY */}
        <div className="space-y-3">
          <h3 className="font-semibold text-black">Life at Swiggy</h3>
          <a href="https://blog.swiggy.com/" className="block hover:text-black">Explore With Swiggy</a>
          <a href="https://blog.swiggy.com/category/news/" className="block hover:text-black">Swiggy News</a>
          <a href="https://www.swiggy.com/snackables" className="block hover:text-black">Snackables</a>

          <h3 className="font-semibold text-black mt-6">Social Links</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://www.linkedin.com/company/swiggy" target="_blank">in</a>
            <a href="https://www.instagram.com/swiggyindia/" target="_blank">ig</a>
            <a href="https://www.facebook.com/swiggy.in" target="_blank">fb</a>
            <a href="https://twitter.com/swiggy" target="_blank">x</a>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t mt-10"></div>

      {/* BOTTOM CTA */}
      <div className="w-[80%] mx-auto flex items-center justify-between py-8">
        <h2 className="text-xl font-semibold text-gray-800">
          For better experience, download the Swiggy app now
        </h2>

        <div className="flex gap-4">
          <a href="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv" target="_blank">
            <img
              className="h-12"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv"
              alt="App Store"
            />
          </a>

          <a href="https://play.google.com/store/apps/details?id=in.swiggy.android" target="_blank">
            <img
              className="h-12"
              src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl"
              alt="Google Play"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}