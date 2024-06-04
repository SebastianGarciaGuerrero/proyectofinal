import "../assets/styles/Carrito.css"
import { useId } from "react";
import { IoCartOutline } from "react-icons/io5";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

export const Carrito = () => {
  const cartCheckboxId = useId();

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <IoCartOutline />
      </label>
      <input id={cartCheckboxId} type="checkbox" hidden />
      <aside className="cart">
        <ul>
          <li>
            <img
              src="https://images.cdn1.buscalibre.com/fit-in/360x360/db/9c/db9c9e8b60aa7ef5bb02165dc4e6c875.jpg"
              alt="Libro"
            />
            <div>
              <strong>Libro</strong> - $4.990
            </div>

            <footer>
              <small>Cantidad: 1</small>
            </footer>
          </li>
        </ul>

        <button>
        <MdOutlineRemoveShoppingCart />
        </button>
      </aside>
    </>
  );
};
