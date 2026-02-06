import Header from "./Header"
import FoodOption from "./FoodOption"
import GroceryOption from "./GroceryOption"
import RestaurantOption from "./RestaurantOption"
import Download from "./download";
import Footer from "./Footer";

export default function Home(){
    return(
        <>
                 <Header></Header>
                 <FoodOption></FoodOption>
                 <GroceryOption></GroceryOption>
                 <RestaurantOption></RestaurantOption>
                 <Download></Download>
                 <Footer></Footer>
        </>
    )
}