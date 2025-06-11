import new_1 from '../Assets/men_1.jpg';
import new_2 from '../Assets/men_2.jpg';
import new_3 from '../Assets/men_3.jpg';
import new_4 from '../Assets/men_4.jpg';
import new_5 from '../Assets/men5.jpg';
import new_6 from '../Assets/men6.jpg';
import new_7 from '../Assets/men7.jpg';
import new_8 from '../Assets/new_2.jpg';
import new_9 from '../Assets/men8.jpg';
import new_10 from '../Assets/new_5.jpg';
import new_11 from '../Assets/new_7.jpg';
import new_12 from '../Assets/men9.jpg';
import new_13 from '../Assets/women1.jpg';
import new_14 from '../Assets/women2.jpg';
import new_15 from '../Assets/product_1.jpg';
import new_16 from '../Assets/product_2.jpg';
import new_17 from '../Assets/new_1.jpg';
import new_18 from '../Assets/new_8.jpg';
import new_19 from '../Assets/women3.jpg';
import new_20 from '../Assets/women4.jpg';
import new_21 from '../Assets/product_3.jpg';
import new_22 from '../Assets/product_4.jpg';
import new_23 from '../Assets/new_3.jpg';
import new_24 from '../Assets/new_6.jpg';
import new_25 from '../Assets/new_4.jpg';
import new_26 from '../Assets/kid1.jpg';
import new_27 from '../Assets/kid2.jpg';
import new_28 from '../Assets/kid3.jpg';
import new_29 from '../Assets/kid4.jpg';
import new_30 from '../Assets/kid5.jpg';
import new_31 from '../Assets/kid6.jpg';
import new_32 from '../Assets/kid7.jpg';
import new_33 from '../Assets/kid8.jpg';
import new_34 from '../Assets/kid9.jpg';
import new_35 from '../Assets/kid10.jpg';
import new_36 from '../Assets/kid11.jpg';

const all_products = [
  // MEN (1-12)
  {
    id: 1,
    name: "Men Navy Solid Sweatshirt",
    image: new_1,
    category: "men",
    new_price: 45.0,
    old_price: 70.0,
  },
  {
    id: 2,
    name: "Men Black Printed Round Neck T-Shirt",
    image: new_2,
    category: "men",
    new_price: 25.0,
    old_price: 40.0,
  },
  {
    id: 3,
    name: "Men Slim Fit Mid-Rise Jeans",
    image: new_3,
    category: "men",
    new_price: 55.0,
    old_price: 90.0,
  },
  {
    id: 4,
    name: "Men Solid Bomber Jacket",
    image: new_4,
    category: "men",
    new_price: 60.0,
    old_price: 100.0,
  },
  {
    id: 5,
    name: "Men Regular Fit Checked Casual Shirt",
    image: new_5,
    category: "men",
    new_price: 35.0,
    old_price: 60.0,
  },
  {
    id: 6,
    name: "Men White Solid Polo Collar T-shirt",
    image: new_6,
    category: "men",
    new_price: 30.0,
    old_price: 50.0,
  },
  {
    id: 7,
    name: "Men Cotton Regular Fit Casual Shirt",
    image: new_7,
    category: "men",
    new_price: 40.0,
    old_price: 65.0,
  },
  {
    id: 8,
    name: "Men Charcoal Grey Track Pants",
    image: new_8,
    category: "men",
    new_price: 28.0,
    old_price: 45.0,
  },
  {
    id: 9,
    name: "Men Blue Tapered Fit Jeans",
    image: new_9,
    category: "men",
    new_price: 42.0,
    old_price: 70.0,
  },
  {
    id: 10,
    name: "Men Olive Green Printed Hoodie",
    image: new_10,
    category: "men",
    new_price: 38.0,
    old_price: 65.0,
  },
  {
    id: 11,
    name: "Men Grey Melange Sweatshirt",
    image: new_11,
    category: "men",
    new_price: 50.0,
    old_price: 85.0,
  },
  {
    id: 12,
    name: "Men Khaki Chino Trousers",
    image: new_12,
    category: "men",
    new_price: 44.0,
    old_price: 75.0,
  },

  // WOMEN (13-24)
  {
    id: 13,
    name: "Women Black Fit & Flare Dress",
    image: new_13,
    category: "women",
    new_price: 55.0,
    old_price: 90.0,
  },
  {
    id: 14,
    name: "Women Floral Print Wrap Dress",
    image: new_14,
    category: "women",
    new_price: 48.0,
    old_price: 75.0,
  },
  {
    id: 15,
    name: "Women Blue Skinny Fit Jeans",
    image: new_15,
    category: "women",
    new_price: 38.0,
    old_price: 60.0,
  },
  {
    id: 16,
    name: "Women Solid Straight Kurta",
    image: new_16,
    category: "women",
    new_price: 35.0,
    old_price: 55.0,
  },
  {
    id: 17,
    name: "Women Pink Printed A-Line Dress",
    image: new_17,
    category: "women",
    new_price: 52.0,
    old_price: 85.0,
  },
  {
    id: 18,
    name: "Women Mustard Yellow Top",
    image: new_18,
    category: "women",
    new_price: 28.0,
    old_price: 50.0,
  },
  {
    id: 19,
    name: "Women Solid High Waist Trousers",
    image: new_19,
    category: "women",
    new_price: 40.0,
    old_price: 70.0,
  },
  {
    id: 20,
    name: "Women Maroon Kurta with Trousers",
    image: new_20,
    category: "women",
    new_price: 60.0,
    old_price: 100.0,
  },
  {
    id: 21,
    name: "Women Navy Blue Flared Jeans",
    image: new_21,
    category: "women",
    new_price: 42.0,
    old_price: 68.0,
  },
  {
    id: 22,
    name: "Women Solid Fit & Flare Dress",
    image: new_22,
    category: "women",
    new_price: 54.0,
    old_price: 88.0,
  },
  {
    id: 23,
    name: "Women Black Anarkali Kurta",
    image: new_23,
    category: "women",
    new_price: 45.0,
    old_price: 75.0,
  },
  {
    id: 24,
    name: "Women Green Solid Tunic",
    image: new_24,
    category: "women",
    new_price: 32.0,
    old_price: 58.0,
  },

  // KIDS (25-36)
  {
    id: 25,
    name: "Boys Orange Colorblocked Hooded Sweatshirt",
    image: new_25,
    category: "kids",
    new_price: 30.0,
    old_price: 50.0,
  },
  {
    id: 26,
    name: "Girls Printed Fit and Flare Dress",
    image: new_26,
    category: "kids",
    new_price: 28.0,
    old_price: 45.0,
  },
  {
    id: 27,
    name: "Boys White Printed T-shirt",
    image: new_27,
    category: "kids",
    new_price: 20.0,
    old_price: 35.0,
  },
  {
    id: 28,
    name: "Girls Pink Layered Dress",
    image: new_28,
    category: "kids",
    new_price: 32.0,
    old_price: 55.0,
  },
  {
    id: 29,
    name: "Boys Navy Blue Shorts",
    image: new_29,
    category: "kids",
    new_price: 22.0,
    old_price: 40.0,
  },
  {
    id: 30,
    name: "Girls Solid Leggings",
    image: new_30,
    category: "kids",
    new_price: 18.0,
    old_price: 30.0,
  },
  {
    id: 31,
    name: "Boys Checked Shirt",
    image: new_31,
    category: "kids",
    new_price: 26.0,
    old_price: 42.0,
  },
  {
    id: 32,
    name: "Girls Printed T-shirt",
    image: new_32,
    category: "kids",
    new_price: 19.0,
    old_price: 33.0,
  },
  {
    id: 33,
    name: "Boys Green Solid Hoodie",
    image: new_33,
    category: "kids",
    new_price: 34.0,
    old_price: 58.0,
  },
  {
    id: 34,
    name: "Girls Ruffled Top",
    image: new_34,
    category: "kids",
    new_price: 24.0,
    old_price: 40.0,
  },
  {
    id: 35,
    name: "Boys Grey Joggers",
    image: new_35,
    category: "kids",
    new_price: 29.0,
    old_price: 48.0,
  },
  {
    id: 36,
    name: "Girls Blue Dungaree Dress",
    image: new_36,
    category: "kids",
    new_price: 36.0,
    old_price: 60.0,
  }
];

export default all_products;
