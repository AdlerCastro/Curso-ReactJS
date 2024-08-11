import Header from "./components/organisms/Header";
import Input from "./components/atoms/Input";
import Button from "./components/atoms/Button";
import { FilePlus } from "lucide-react";
import { useState } from "react";
import { Empty } from "./components/organisms/Lista/components/Empty";
import { ListHeader } from "./components/organisms/Lista/components/Header";
import { Item } from "./components/organisms/Lista/components/Item";

export interface Tasks {
  id: number;
  text: string;
  checked: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Tasks[]>([]);
  const [inputValue, setInputValue] = useState("");

  const checkedTasksCounter = tasks.reduce((prevValue, currentTasks) => {
    if (currentTasks.checked) {
      return prevValue + 1;
    }
    return prevValue;
  }, 0);

  function addTask() {
    if (!inputValue) {
      return;
    }

    const newTask: Tasks = {
      id: new Date().getTime(),
      text: inputValue,
      checked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");
  }

  function removeTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Apagar tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function toggleTask({ id, value }: { id: number; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, checked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center gap bg-zinc-200 text-zinc-950 dark:bg-[#1E1E1E] dark:text-zinc-50">
      <Header />

      <section className="flex flex-col h-full gap-10">
        <div className="-mt-7 flex flex-row gap-2 items-center justify-center">
          <Input
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="w-[638px] h-14 rounded-lg bg-zinc-800 border border-black placeholder:text-zinc-500 pl-4"
            placeholder="Adicione uma tarefa"
          />
          <Button
            className=" flex flex-row w-20 h-12 gap-2 items-center justify-center bg-blue-700 text-zinc-50 hover:bg-blue-600 hover:scale-105 transition-all duration-200 p-3 rounded-md font-bold text-sm"
            onClick={addTask}
          >
            Criar
            <FilePlus className="w-4 h-4 font-bold" />
          </Button>
        </div>

        <div className="flex flex-col gap-6 border-solids">
          <ListHeader
            tasksCounter={tasks.length}
            checkedTasksCounter={checkedTasksCounter}
          />
          {tasks.length > 0 ? (
            <div>
              {tasks.map((task) => (
                <Item
                  key={task.id}
                  data={task}
                  removeTask={removeTask}
                  toggleTaskStatus={toggleTask}
                />
              ))}
            </div>
          ) : (
            <Empty />
          )}
        </div>
      </section>
    </div>
  );
}

export default App;
