import { Card, Input, Label, Textarea, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";

export const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();
  const navigate = useNavigate();
  const { createTask, updateTask, loadTask, errors: tasksErrors } = useTasks();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    let task;

    if (!params.id) {
      task = await createTask(data);
    } else {
      task = await updateTask(params.id, data);
    }
    if (task) {
      navigate("/tasks");
    }
  });

  useEffect(() => {
    if (params.id) {
      loadTask(params.id).then((task) => {
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("image_url", task.image_url || "");
        setValue("price", task.price || "");
      });
    }
  }, []);

  return (
    <div className="flex h-[85vh] justify-center items-center">
      <Card>
        {tasksErrors.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">
          {params.id ? "Edit task" : "Crear task"}
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

          <Button>{params.id ? "Edit task" : "Crear task"}</Button>
        </form>
      </Card>
    </div>
  );
};
