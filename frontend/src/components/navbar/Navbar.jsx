import { Link, useLocation } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./navigation";
import { Container } from "../ui";
import { AuthContext } from "../../context/AuthProvider";
import { twMerge } from "tailwind-merge";
import { IoMdLogOut } from "react-icons/io";
import { useContext } from "react";

export const Navbar = () => {
  const location = useLocation();

  const { isAuth, signout, user } = useContext(AuthContext);

  return (
    <nav className="bg-zinc-950">
      <Container className="flex justify-between py-3">
        <Link to="/">
          <h1 className="font-bold text-2xl py-8 text-white">Z A L I S</h1>
        </Link>
        <ul className="flex items-center justify-center md:gap-x-2">
          {isAuth ? (
            <>
              {privateRoutes.map(({ path, name, icon }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className={twMerge(
                      "text-slate-300 flex items-center px-3 py-1 gap-x-1",
                      location.pathname === path && "bg-sky-500 px-3 py-1"
                    )}
                  >
                    {icon}
                    <span className="hidden sm:block">{name}</span>
                  </Link>
                </li>
              ))}
              <li
                className="text-slate-300 flex items-center px-3 py-1 hover:cursor-pointer"
                onClick={() => {
                  signout();
                }}
              >
                <IoMdLogOut className="w-5 h-5" />
                <span className="hidden sm:block"> Logout</span>
              </li>
              <li className="flex gap-x-1 items-center justify-center font-medium">
                <img
                  src={user.gravatar}
                  alt=""
                  className="h-8 w-8 rounded-full"
                />
                <span>{user.name}</span>
              </li>
            </>
          ) : (
            publicRoutes.map(({ path, name }) => (
              <li
                className={twMerge(
                  "text-slate-300 flex items-center px-3 py-1",
                  location.pathname === path && "text-sky-500 px-3 py-1"
                )}
                key={path}
              >
                <Link to={path}>{name}</Link>
              </li>
            ))
          )}
        </ul>
      </Container>
    </nav>
  );
};
