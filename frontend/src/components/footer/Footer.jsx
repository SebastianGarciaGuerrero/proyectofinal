import { Link } from "react-router-dom";
import { Container } from "../ui";

export const Footer = () => {

  return (
    <nav className="bg-gray-100  border-t-2 mt-10">
      <Container className="flex justify-center py-3">
        <Link to="/">
          <ul className="text-center">
          <li className="font-bold text-3xl py-8 text-black">Z I L L A S</li>
          <li className="font-light text-2xs  text-gray-500">contacto@zillas.com </li>
          <li className="font-light text-2xs  text-gray-500 pb-10">Desarrollo: Sebastián García - Andrés Restrepo - David Bravo </li>
          </ul>
        </Link>
      </Container>
    </nav>
  );
};
