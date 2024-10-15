import { BiTask } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";

export const publicRoutes = [
  {
    name: "Nosotros",
    path: "/about",
  },
  {
    name: "Catálogo",
    path: "/products",
    icon: <BiTask className="w-5 h-5" />,
  },
  {
    name: "Iniciar sesión",
    path: "/login",
  },
  {
    name: "Registrarse",
    path: "/register",
  },
];

export const privateRoutes = [
  {
    name: "Nosotros",
    path: "/about",
  },
  {
    name: "Productos",
    path: "/products",
    icon: <BiTask className="w-5 h-5" />,
  },
  {
    name: "Carrito",
    path: "/carrito",
    icon: <MdOutlineShoppingCart className="w-5 h-5" />,
  },
  {
    name: "Agregar",
    path: "/products/new",
    icon: <MdTaskAlt className="w-5 h-5" />,
  },
];
