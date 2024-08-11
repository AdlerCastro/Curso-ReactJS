import { Check, Trash } from "lucide-react";
import { Tasks } from "../../../../../App";
import Input from "../../../../atoms/Input";
import Button from "../../../../atoms/Button";

interface ItemProps {
  data: Tasks;
  removeTask: (id: number) => void;
  toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void;
}

export function Item({ data, removeTask, toggleTaskStatus }: ItemProps) {
  function taskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.checked });
  }

  function Remove() {
    removeTask(data.id);
  }

  return (
    <div className="w-full h-[72px] border border-zinc-700 rounded-lg mb-3">
      <div className="w-full h-full flex items-center justify-between bg-zinc-800 p-3 rounded-lg">
        <label
          htmlFor="checkbox"
          onClick={taskToggle}
          className="w-full h-full flex items-center cursor-pointer"
        >
          <Input
            type="checkbox"
            readOnly
            checked={data.checked}
            className="hidden"
          />
          <span
            className={`flex items-center justify-center border-2 border-solid size-5 rounded-full ${data.checked ? "border-[#5E60CE] bg-[#5E60CE] hover:border-[#8284FA] hover:bg-[#8284FA]" : "border-blue-500 bg-transparent hover:bg-blue-500/20"}`}
          >
            {data.checked && <Check size={12} />}
          </span>
          <p className="text-zinc-50 text-base w-full text-center">
            {data.text}
          </p>
        </label>

        <Button onClick={Remove}>
          <Trash size={16} color="#808080" />
        </Button>
      </div>
    </div>
  );
}
