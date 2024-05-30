import { Link, useLocation } from "react-router-dom";
import { Container } from "../ui";
import { AuthContext } from "../../context/AuthProvider";
import { IoMdLogOut } from "react-icons/io";
import { useContext } from "react";

export const Footer = () => {
  const location = useLocation();
  const { isAuth, signout, user } = useContext(AuthContext);

  return (
    <nav className="bg-gray-100  border-t-2 mt-10">
      <Container className="flex justify-center py-3">
        <Link to="/">
          <ul className="text-center">
          <li className="font-bold text-2xl py-8 text-black">Z A L I S</li>
          <li className="font-light text-xs  text-gray-500">contacto@zalis.com </li>
          <li className="font-light text-xs  text-gray-500 pb-10">Desarrollo: Sebastián García - Andrés Restrepo - David Bravo </li>
          </ul>
        </Link>
      </Container>
    </nav>
  );
};
