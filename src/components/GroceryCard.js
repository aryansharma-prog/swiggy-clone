export default function GroceryCard({foodData}){
    return (
        <>
        <div className="flex flex-col">
             <a href={foodData?.action?.link}>
                <img className="w-40 h-50 object-cover" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/"+foodData.imageId}></img>
            </a>
            <div className="w-40 h-16 p-4 text-xl items-center justify center text-[rgba(2, 6, 12, 0.75)]">
                {foodData?.action?.text}
            </div>
        </div>
        </>
    )
}

