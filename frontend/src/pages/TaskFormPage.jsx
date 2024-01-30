import { Card, Input, Label, Textarea, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTasks } from "../context/TaskContext";

export const TaskFormPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [postError, setPostError] = useState([]);
  const navigate = useNavigate();
  const { createTask } = useTasks();

  const onSubmit = handleSubmit(async (data) => {
    const task = await createTask(data);
    if (task) {
      navigate("/tasks");
    }
  });

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
        {postError.map((error, i) => (
          <p className="text-red-500" key={i}>
            {error}
          </p>
        ))}
        <h2 className="text-3xl font-bold my-4">Create Task</h2>
        <form onSubmit={onSubmit}>
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

          <Label htmlFor="description"> Description </Label>
          <Textarea
            placeholder="Description"
            rows={3}
            {...register("description")}
          ></Textarea>
          <Button>Create</Button>
        </form>
      </Card>
    </div>
  );
};
