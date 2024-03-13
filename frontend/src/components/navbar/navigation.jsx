import { BiTask } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";

export const publicRoutes = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
];

export const privateRoutes = [
  {
    name: "Products",
    path: "/products",
    icon: <BiTask className="w-5 h-5" />
  },
  {
    name: "Agregar",
    path: "/products/new",
    icon: <MdTaskAlt className="w-5 h-5" />
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <CgProfile className="w-5 h-5" />
  },
  {
    name: "Carrito",
    path: "/carrito",
    icon: <MdOutlineShoppingCart className="w-5 h-5"/>
  }
];
