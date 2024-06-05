import { Card, Button } from "../ui";
import { MdAddShoppingCart } from "react-icons/md";
import { useCart } from "../../hooks/useCart";

export const ProductCard = ({ product }) => {
  
  const formatPriceToCLP = (price) => {
    if (price == null) {
      return "Precio no disponible";
    }
    const roundedPrice = Math.floor(price);
    return `$${roundedPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  };

  const { addToCart, removeFromCart, cart } = useCart();

  return (
    <Card key={product.id} className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        {product.image_url && (
          <img
            src={product.image_url}
            alt={`Imagen de ${product.title}`}
            className="my-4 w-full h-auto object-cover"
          />
        )}
        <p>{product.description}</p>
        <p className="text-2xl font-bold">{formatPriceToCLP(product.price)}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button
          onClick={() =>
            cart.some((item) => item.id === product.id)
              ? removeFromCart(product)
              : addToCart(product)
          }
        >
          <MdAddShoppingCart />{" "}
          {cart.some((item) => item.id === product.id)
            ? "Quitar del Carrito"
            : "Agregar al Carrito"}
        </Button>
      </div>
    </Card>
  );
};
