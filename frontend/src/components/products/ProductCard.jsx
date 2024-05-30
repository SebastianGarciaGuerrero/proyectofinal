import { Card, Button } from "../ui";
import { useNavigate } from "react-router-dom";
import { PiTrashSimpleLight } from "react-icons/pi";
import { BiPencil } from "react-icons/bi";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductProvider";


export const ProductCard = ({ product }) => {
  const { deleteProduct } = useContext(ProductContext);
  const navigate = useNavigate();

  return (
    <Card key={product.id} className="px-7 py-4 flex flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        {product.image_url && (
          <img
            src={product.image_url}
            alt={`Imagen de ${product.title}`}
            className="my-4"
          />
        )}
        <p>{product.description}</p>
        <p className="text-2xl font-bold">$ {product.price}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/products/${product.id}/edit`)}>
          <BiPencil className="text-white" />
          Editar
        </Button>
        <Button
          className="bg-red-700 hover:bg-red-600"
          onClick={async () => {
            if (
              window.confirm("¿Estás seguro que quieres eliminar este producto?")
            ) {
              deleteProduct(product.id);
            }
          }}
        >
          <PiTrashSimpleLight className="text-white" />
          Eliminar
        </Button>
      </div>
    </Card>
  );
};
