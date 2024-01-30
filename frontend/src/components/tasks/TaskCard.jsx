import { Card, Button } from "../ui";
import { useTasks } from "../../context/TaskContext";

export const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  return (
    <Card key={task.id} className={"px-7 py-4"}>
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button>Editar</Button>
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={async () => {
            if (
              window.confirm("¿Estás seguro que quieres eliminar esta tarea?")
            ) {
              deleteTask(task.id);
            }
          }}
        >
          Eliminar
        </Button>
      </div>
    </Card>
  );
};
