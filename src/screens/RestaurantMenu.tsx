import * as React from "react";
import { Box, Flex, Row, Text } from "native-base";
import { ScrollView } from "react-native-gesture-handler";
import ItemCard from "../components/ItemCard";

export default function RestaurantMenu() {
  let data = [
    {
      name: "EVM McSpicy Paneer Double Patty Burger",
      cost: 169,
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/mhwn6s85lashabiwfmyn",
      count: 0,
    },

    {
      name: "Shake Shake Fries [Piri Piri]",
      cost: 110,
      src:
        "https://www.sunstar.com.ph/uploads/imported_images/files/field/image/article/mcdonalds-shake-shake-fries_0.jpg",

      count: 0,
    },
    {
      name:
        "2 McVeggie Double Patty Burger + 2 Pizza McPuff + 1 Medium French Fries + 2 Medium Coke",
      cost: 508,
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/uvr4hb1vzwfiex3ktgyw",

      count: 0,
    },
    {
      name: "EVM Schezwan Veg Double Patty Burger",
      cost: 134,
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/aimfe6vwuyntrmxibyjw",
      count: 0,
    },
    {
      name: "McSpicy Paneer",
      cost: 158,
      src:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/uvr4hb1vzwfiex3ktgyw",
      count: 0,
    },
    {
      name:
        "2 McSpicy Paneer Double Patty Burger + 2 Pizza McPuff + 1 Medium French Fries + 2 Medium Coke",
      cost: 766,
      src:
        "https://b.zmtcdn.com/data/pictures/chains/9/120179/1b26ec6910fd2fa0817d3bf26953a19f.png?fit=around|771.75:416.25&crop=771.75:416.25;*,*",
      count: 0,
    },
    {
      name: "Big Mac® Combo Meal",
      cost: 508,
      src:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/assets/meal/desktop/h-mcdonalds-Big-Mac-Extra-Value-Meals.jpg?$Product_Desktop$",
      count: 0,
    },
    {
      name: "Small Minute Maid® Fruit Punch Slushie",
      cost: 766,
      src:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-minute-maid-fruit-punch-slushie.jpg?$Product_Desktop$",

      count: 0,
    },
    {
      name: "Caramel Latte",
      cost: 508,
      src:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McCafe-Caramel-Latte-Medium.jpg?$Product_Desktop$",
      count: 0,
    },
    {
      name: "Iced Mocha",
      cost: 286,
      src:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-McCafe-Iced-Mocha-Medium.jpg?$Product_Desktop$",
      count: 0,
    },
    {
      name: "Double Cheeseburger",
      cost: 508,
      src:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Double-Cheeseburger.jpg?$Product_Desktop$",
      count: 0,
    },
    {
      name: "Sausage Burrito",
      cost: 766,
      src:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Sausage-Burrito.jpg?$Product_Desktop$",
      count: 0,
    },
    {
      name: "Big Mac",
      cost: 500,
      src:
        "https://www.mcdonalds.com/is/image/content/dam/usa/nfl/nutrition/items/hero/desktop/t-mcdonalds-Big-Mac.jpg?$Product_Desktop$",
      count: 0,
    },
    {
      name:
        " 2 Dosa Masala Double Patty Burger + 2 Pizza McPuff + 1 Medium French Fries + 2 Medium Coke",
      cost: 467,
      src:
        "https://b.zmtcdn.com/data/pictures/chains/1/171/5addf1f62ad51f18decd7516f563f30f.jpg",
      count: 0,
    },
  ];

  return (
    <>
      <ScrollView>
        <Flex bg="white">
          {data.map((item, key) => {
            if (key % 2 == 0)
              return (
                <Row mx={2}>
                  <Box width="50%">
                    <ItemCard item={data[key]} />
                  </Box>
                  {data[key + 1] ? (
                    <Box width="50%">
                      <ItemCard item={data[key + 1]} />
                    </Box>
                  ) : (
                    <></>
                  )}
                </Row>
              );
          })}
        </Flex>
      </ScrollView>
    </>
  );
}
