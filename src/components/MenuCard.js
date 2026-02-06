import { useState } from "react";
import RestInfo from "./RestInfo";
import CommonHeader from "./commonHeader";

export default function MenuCard({ menuItems,foodselected }) {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle accordion
  function toggleMenu() {
    setIsOpen(!isOpen);
  }

    if(foodselected==='veg'){
     if (menuItems?.itemCards) {
    return (
      <>
      <div className="border-b py-4 ml-25 w-[80%]">
        {/* Accordion Header */}
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleMenu}>
          <p className="font-bold text-xl">
            {menuItems.title} ({menuItems.itemCards.length})
          </p>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>

        {/* Accordion Body */}
        {isOpen &&
          menuItems.itemCards.filter((food)=>"isVeg" in food?.card?.info).map((item) => (
            <RestInfo key={item.card.info.id} items={item.card.info} />

          ))}
      </div>
      </>
    );
  }
   if (menuItems?.categories) {
    return (
      <>
        {menuItems.categories.map((cat) => (

          <div key={cat.title} className="border-b py-4 ml-25 w-[80%]">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleMenu}>
              <p className="font-bold text-xl">
                {cat.title} ({cat.itemCards.length})
              </p>
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen &&
              cat.itemCards.filter((food)=>"isVeg" in food?.card?.info).map((item) => (
                <RestInfo
                  key={item.card.info.id}
                  items={item.card.info}
                />
              ))}
          </div>
        ))}
      </>
    );
  }

  }
   if(foodselected==='nonveg'){
     if (menuItems?.itemCards) {
    return (
      <>
      <div className="border-b py-4 ml-25 w-[80%]">
        {/* Accordion Header */}
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleMenu}>
          <p className="font-bold text-xl">
            {menuItems.title} ({menuItems.itemCards.length})
          </p>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>

        {/* Accordion Body */}
        {isOpen &&
          menuItems.itemCards.filter((food)=>!("isVeg" in food?.card?.info)).map((item) => (
            <RestInfo key={item.card.info.id} items={item.card.info} />

          ))}
      </div>
      </>
    );
  }
   if (menuItems?.categories) {
    return (
      <>
        {menuItems.categories.map((cat) => (

          <div key={cat.title} className="border-b py-4 ml-25 w-[80%]">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleMenu}>
              <p className="font-bold text-xl">
                {cat.title} ({cat.itemCards.length})
              </p>
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen &&
              cat.itemCards.filter((food)=>!("isVeg" in food?.card?.info)).map((item) => (
                <RestInfo
                  key={item.card.info.id}
                  items={item.card.info}
                />
              ))}
          </div>
        ))}
      </>
    );
  }

  }
  // CASE 1: Direct items
  if (menuItems?.itemCards) {
    return (
      <>
      <div className="border-b py-4 ml-25 w-[80%]">
        {/* Accordion Header */}
        <div className="flex justify-between items-center cursor-pointer" onClick={toggleMenu}>
          <p className="font-bold text-xl">
            {menuItems.title} ({menuItems.itemCards.length})
          </p>
          <span>{isOpen ? "▲" : "▼"}</span>
        </div>

        {/* Accordion Body */}
        {isOpen &&
          menuItems.itemCards.map((item) => (

            <RestInfo key={item.card.info.id} items={item.card.info} />

          ))}
      </div>
      </>
    );
  }
  // CASE 2: Nested categories
  if (menuItems?.categories) {
    return (
      <>
        {menuItems.categories.map((cat) => (

          <div key={cat.title} className="border-b py-4 ml-25 w-[80%]">
            <div className="flex justify-between items-center cursor-pointer" onClick={toggleMenu}>
              <p className="font-bold text-xl">
                {cat.title} ({cat.itemCards.length})
              </p>
              <span>{isOpen ? "▲" : "▼"}</span>
            </div>
            {isOpen &&
              cat.itemCards.map((item) => (
                <RestInfo
                  key={item.card.info.id}
                  items={item.card.info}
                />
              ))}
          </div>
        ))}
      </>
    );
  }



  return null;
}

