import { Button, Input, Card, Label } from "../components/ui";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("http://localhost:3000/api/signup", data, {
      withCredentials: true,
    });
    console.log(res);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <div className="text-2xl font-bold">Registro</div>

        <form onSubmit={onSubmit}>
          <Label htmlFor="nombre">Nombre</Label>
          <Input
            type="text"
            placeholder="Ingrese su primer nombre"
            {...register("name", { required: true })}
          />

          {errors.name && <p className="text-red-500"> Name is required </p>}

          <Label htmlFor="email">Correo</Label>
          <Input
            type="email"
            placeholder="Ingrese su correo eléctronico"
            {...register("email", { required: true })}
          />

          {errors.email && <p className="text-red-500"> Email is required </p>}

          <Label htmlFor="contraseña">Contraseña</Label>
          <Input
            type="password"
            placeholder="Crea una contraseña"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <p className="text-red-500"> Password is required </p>
          )}
          <Button>Register</Button>

          <div className="flex justify-between my-4">
            <p>¿Ya tienes una cuenta?</p>
            <Link to="/login" className="font-bold">
              ¡Inscríbete!
            </Link>
          </div>
        </form>
      </Card>
    </div>
  );
};
