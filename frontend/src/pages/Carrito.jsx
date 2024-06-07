import "../assets/styles/Carrito.css";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import { useCart } from "../hooks/useCart";

function CartItem({
  image_url,
  title,
  quantity,
  price,
  addToCart,
  decreaseQuantity,
}) {
  return (
    <li>
      <img src={image_url} alt={`Imagen de ${title}`} />
      <div>
        <strong>{title}</strong> -<p>${price}</p>
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={decreaseQuantity}>-</button>
        <button onClick={addToCart}>+</button>
      </footer>
    </li>
  );
}

export const Carrito = () => {
  const { cart, clearCart, addToCart, decreaseQuantity, totalPrice } = useCart();

  return (
    <div className="cart">
      <div className="cart-content">
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              decreaseQuantity={() => decreaseQuantity(product)}
              {...product}
            />
          ))}
        </ul>
        <button onClick={clearCart}>
          <MdOutlineRemoveShoppingCart />
        </button>

        <p>Total: {totalPrice}</p>
      </div>
    </div>
  );
};
