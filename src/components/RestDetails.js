import { Link } from "react-router-dom";

export default function RestDetails({ dinedata }) {
  return (
    <Link to={"/city/ghaziabad/"+dinedata?.info?.id}>
    <div> 

    <div className="w-[280px] rounded-2xl overflow-hidden hover:scale-[0.95] transition-transform duration-200 cursor-pointer">
      
      {/* Image section */}
      <div className="relative">
        <img
          className="w-full h-[180px] object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            dinedata?.info?.cloudinaryImageId
          }
          alt={dinedata?.info?.name}
        />

        {/* Rating badge */}
        <div className="absolute bottom-2 left-2 bg-white px-2 py-1 rounded-lg flex items-center gap-1 shadow-md">
          <svg
            className="w-4 h-4 text-green-600"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.286 3.97c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.97a1 1 0 00-.364-1.118L2.049 9.397c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.97z" />
          </svg>
          <span className="text-sm font-semibold">
            {dinedata?.info?.avgRating}
          </span>
        </div>
      </div>

      {/* Details section */}
      <div className="px-2 pt-3 space-y-1">
        <div className="font-bold text-lg truncate">
          {dinedata?.info?.name}
        </div>

        <div className="text-sm font-semibold">
          {dinedata?.info?.sla?.slaString}
        </div>

        <div className="text-sm text-gray-600 truncate font-semibold">
          {dinedata?.info?.cuisines?.join(", ")}
        </div>

        <div className="text-sm text-gray-500 font-semibold">
          {dinedata?.info?.locality}
        </div>
      </div>
    </div>
    </div>
    </Link>
  );
}



