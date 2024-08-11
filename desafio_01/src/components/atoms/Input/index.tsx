import { Slot } from "@radix-ui/react-slot";
import { ForwardedRef, forwardRef, Ref } from "react";
import { cn } from "../../../services/utils/className.utils";
import { InputProps } from "./type";

const Input = forwardRef((props: InputProps, ref: Ref<HTMLInputElement>) => {
  const { aschild, className, children, ...rest } = props;
  const Component = aschild ? Slot : "input";

  return (
    <Component
      className={
        (cn(
          "bg-zinc-200 text-zinc-950 dark:bg-zinc-900 dark:text-zinc-50 p-1 rounded-md"
        ),
        className)
      }
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

Input.displayName = "Input";

export default Input;
