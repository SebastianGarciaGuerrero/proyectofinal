import { BiTask } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';



export const publicRoutes = [
  {
    name: "Libros",
    path: "/products",
    icon: <BiTask className="w-5 h-5" />,
  },
  {
    name: "Nosotros",
    path: "/about",
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
    name: "Libros",
    path: "/products",
    icon: <BiTask className="w-5 h-5" />,
  },
  {
    name: "Nosotros",
    path: "/about",
  },
  {
    name: "Carrito",
    path: "/carrito",
    icon: <MdOutlineShoppingCart className="w-5 h-5" />,
  },
];

{/*{
  name: "Agregar",
  path: "/products/new",
  icon: <MdTaskAlt className="w-5 h-5" />,
},*/},