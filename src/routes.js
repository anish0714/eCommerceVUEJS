import Dashboard from "./components/Dashboard";
import ItemDetails from "./components/ItemDetails";
import Cart from "./components/Cart";
import AboutUs from "./components/AboutUs";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default [
  { path: "/", component: Dashboard },
  { path: "/item-details", name: "item-details", component: ItemDetails },
  { path: "/cart", component: Cart },
  { path: "/about-us", component: AboutUs },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];
