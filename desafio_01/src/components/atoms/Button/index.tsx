import { forwardRef, Ref } from "react";
import { ButtonProps } from "./type";
import { cn } from "../../../services/utils/className.utils";
import { Slot } from "@radix-ui/react-slot";

const Button = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { asChild, className, children, ...rest } = props;
  const Component = asChild ? Slot : "button";

  return (
    <Component
      className={
        (cn(
          "bg-zinc-200 text-zinc-950 hover:bg-zinc-400 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-950 p-1 rounded-md"
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

Button.displayName = "Button";

export default Button;
