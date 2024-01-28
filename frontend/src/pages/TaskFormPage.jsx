import { Card, Input, Label, Textarea, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import { createTaskRequest } from "../api/tasks.api";

export const TaskFormPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await createTaskRequest(data);
    console.log(res);
  });

  return (
    <div className="flex h-[80vh] justify-center items-center">
      <Card>
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

          <Label htmlFor="description">Description</Label>
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
