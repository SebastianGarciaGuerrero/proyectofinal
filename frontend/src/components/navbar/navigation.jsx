import { BiTask } from "react-icons/bi";
import { MdTaskAlt } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

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
    name: "Tasks",
    path: "/tasks",
    icon: <BiTask className="w-5 h-5" />
  },
  {
    name: "Agregar",
    path: "/tasks/new",
    icon: <MdTaskAlt className="w-5 h-5" />
  },
  {
    name: "Profile",
    path: "/profile",
    icon: <CgProfile className="w-5 h-5" />
  },
];
