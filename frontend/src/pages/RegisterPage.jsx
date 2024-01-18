import { Button, Input, Card } from "../components/ui";
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
      withCredentials: true
    });
    console.log(res);
  });

  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <div className="text-2xl font-bold">Register</div>

        <form onSubmit={onSubmit}>
          <Input
            type="text"
            placeholder="enter your first name"
            {...register("name", { required: true })}
          />

          {errors.name && <p className="text-red-500"> Name is required </p>}
          <Input
            type="email"
            placeholder="email@example.com"
            {...register("email", { required: true })}
          />

          {errors.email && <p className="text-red-500"> Email is required </p>}

          <Input
            type="password"
            placeholder="enter your password here"
            {...register("password", { required: true })}
          />

          {errors.password && (
            <p className="text-red-500"> Password is required </p>
          )}
          <Button>Register</Button>
        </form>
      </Card>
    </div>
  );
};
