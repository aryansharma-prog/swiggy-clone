export default function RestCard({ restData }) {
  const link = restData?.cta?.link;
  return (
    
    <div className="w-[360px] shrink-0 rounded-2xl overflow-hidden border bg-white">
      
      {/* IMAGE SECTION */}
      <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="relative">
        <img
          className="w-full h-52 object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            restData?.info?.mediaFiles?.[0]?.url
          }
          alt="Restaurant"
        />

        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none" />

        {/* Name */}
        <div className="absolute bottom-3 left-3 text-white text-xl font-bold">
          {restData?.info?.name}
        </div>

        {/* Rating */}
        <div className="absolute bottom-3 right-3 bg-green-600 text-white text-sm px-2 py-1 rounded-lg font-semibold">
          ⭐ {restData?.info?.rating?.value}
        </div>
      </div>

      {/* CONTENT BELOW IMAGE */}
      <div className="p-4 space-y-2">

        <div className="text-sm text-gray-600">
          North Indian • Fast Food
        </div>

        <div className="flex justify-between text-sm text-gray-700">
          <span>₹800 for two</span>
          <span>2.2 km</span>
        </div>

        {/* TAGS */}
        <div className="flex gap-2 flex-wrap text-xs">
          <span className="px-2 py-1 bg-gray-100 rounded-md">Table booking</span>
          <span className="px-2 py-1 bg-gray-100 rounded-md">Free Dessert</span>
        </div>

        {/* OFFER */}
        <div className="bg-green-600 text-white text-sm font-semibold px-3 py-2 rounded-lg">
          Flat 30% off on pre-booking
        </div>

        <div className="bg-green-100 text-green-700 text-sm px-3 py-2 rounded-lg">
          Up to 10% off with bank offers
        </div>

        <div className="text-blue-600 text-sm font-semibold">
          Get extra 10% off using TRYNEW
        </div>

      </div>
      </a>
    </div>
  );
}