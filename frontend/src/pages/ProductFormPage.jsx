import { Card, Input, Label, Textarea, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useProducts } from "../context/ProductContext";

export const ProductFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createProduct, updateProduct, loadProduct, errors: productsErrors } = useProducts();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let product;

    if (!params.id) {
      product = await createProduct(data);
    } else {
      product = await updateProduct(params.id, data);
    }
    if (product) {
      navigate("/products");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadProduct(params.id).then((product) => {
        setValue("title", product.title);
        setValue("description", product.description);
        setValue("image_url", product.image_url || "");
        setValue("price", product.price || "");
      });
    }
  }, []);

  return (
    <div className="flex h-[85vh] justify-center items-center">
      <Card>
        {productsErrors.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Edit product" : "Crear product"}
        </h2>
        <form onSubmit={onSubmit} encType="multipart/form-data">
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="Title"
            autoFocus
            {...register("title", {
              required: true,
            })}
          />
          {errors.title && (
            <span className="text-red-500">Título es requerido</span>
          )}

          <Label htmlFor="image_url">Imagen</Label>
          <Input
            type="text"
            placeholder="Inserte imagen"
            {...register("image_url")}
          />

          <Label htmlFor="description"> Description </Label>
          <Textarea
            placeholder="Description"
            rows={3}
            {...register("description")}
          ></Textarea>

          <Label htmlFor="price">Precio</Label>
          <Input
            type="text"
            placeholder="Precio"
            {...register("price")}
          />

          <Button>{params.id ? "Edit product" : "Crear product"}</Button>
        </form>
      </Card>
    </div>
  );
};
