import "../assets/styles/Carrito.css";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../hooks/useCart";

function CartItem({ image_url, title, quantity, price, addToCart }) {
  return (
    <li>
      <img src={image_url} alt={`Imagen de ${title}`} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>

      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export const Carrito = () => {
  const { cart, clearCart, addToCart} = useCart();

  return (
    <div className="cart">
      <ul>
        {cart.map((product) => (
          <CartItem
            key={product.id}
            addToCart={() => addToCart(product)}
            {...product}
          />
        ))}
      </ul>

      <button onClick={clearCart}>
        <MdOutlineRemoveShoppingCart />
      </button>
    </div>
  );
};
