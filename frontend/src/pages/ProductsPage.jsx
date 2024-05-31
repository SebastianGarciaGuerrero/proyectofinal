import { useEffect } from "react";
import { ProductCard } from "../components/products/ProductCard";
import { useProducts } from "../context/ProductContext";

export const ProductsPage = () => {
  const { products, loadProducts } = useProducts();

  useEffect(() => {
    loadProducts();
  }, []);

  if (products.length === 0)
    return (
      <div className="flex justify-center items-center h-[calc(100vh-10rem)]">
        <h1 className="text-3xl font-bold">¡No hay ningún producto disponible por el momento!</h1>
      </div>
    );

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2">
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};
