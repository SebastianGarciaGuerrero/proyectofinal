import { createContext, useState} from "react";
import {
  getAllProductsRequest,
  deleteProductRequest,
  createProductRequest,
  getProductRequest,
  updateProductRequest,
} from "../api/products.api";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState([]);

  const loadProducts = async () => {
    const res = await getAllProductsRequest();
    setProducts(res.data);
  };

  const loadProduct = async (id) => {
    const res = await getProductRequest(id);
    return res.data;
  };

  const createProduct = async (product) => {
    try {
      const res = await createProductRequest(product);
      setProducts([...products, res.data]);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  const deleteProduct = async (id) => {
    const res = await deleteProductRequest(id);
    if (res.status === 204) {
      setProducts(products.filter((product) => product.id != id));
    }
  };

  const updateProduct = async (id, product) => {
    try {
      const res = await updateProductRequest(id, product);
      return res.data;
    } catch (error) {
      if (error.response) {
        setErrors([error.response.data.message]);
      }
    }
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        loadProducts,
        loadProduct,
        deleteProduct,
        createProduct,
        errors,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
