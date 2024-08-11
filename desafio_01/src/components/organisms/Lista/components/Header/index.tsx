interface HeaderListProps {
  tasksCounter: number;
  checkedTasksCounter: number;
}

export function ListHeader({
  tasksCounter,
  checkedTasksCounter,
}: HeaderListProps) {
  return (
    <header className="flex justify-between font-semibold">
      <aside className="flex gap-2 items-center justify-center">
        <p className="text-[#4EA8DE] ">Tarefas criadas</p>
        <span className="bg-zinc-700 rounded-full w-6 h-5 flex items-center justify-center">
          {tasksCounter}
        </span>
      </aside>

      <aside className="flex gap-2 items-center justify-center">
        <p className="text-[#8284FA]">Concluídas</p>
        <span className="bg-zinc-700 rounded-full px-3 flex items-center justify-center">
          {tasksCounter === 0
            ? tasksCounter
            : `${checkedTasksCounter} de ${tasksCounter}`}
        </span>
      </aside>
    </header>
  );
}
