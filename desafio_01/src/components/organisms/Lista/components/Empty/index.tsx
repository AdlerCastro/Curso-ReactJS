import { ClipboardList } from "lucide-react";

export function Empty() {
  return (
    <div className="flex h-60 flex-col items-center justify-center text-zinc-600 gap-4 border-t border-zinc-700 rounded-lg">
      <ClipboardList className="w-14 h-14" />
      <p className="text-zinc-500 w-80 text-center text-base">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  );
}
