import { cva } from "class-variance-authority";
import classNames from "classnames";
import { SwitchProps } from "./Switch";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ variant, enabled, disabled }: SwitchProps) => {
  const containerVariant = cva(
    classNames(
      "h-[32px] w-[60px] flex outline-none relative inline-flex py-[4px] pl-[4px] pr-[32px] items-center rounded-full disabled:bg-disabled",
      { "pointer-events-none": disabled }
    ),
    {
      variants: {
        variant: {
          common: classNames(
            { "bg-primary": enabled },
            { "bg-primary hover:bg-primaryHover": !enabled }
          ),
          contract: classNames(
            { "bg-success": enabled },
            { "bg-error": !enabled }
          ),
        },
      },
      defaultVariants: {
        variant: "common",
      },
    }
  );
  const containerClasses = containerVariant({ variant });

  const switchClasses = classNames(
    "inline-block bg-white h-[24px] w-[24px] rounded-full transform transition-transform duration-200 ease-in-out .gap-2",
    enabled ? "translate-x-[1.8rem]" : "translate-x-0.5"
  );

  const iconClasses = classNames(
    "aria-disabled: text-font-disabled",
    { "text-success": enabled && !disabled },
    { "text-error": !enabled && !disabled },
    { "text-disabled": disabled }
  );

  return {
    Icon: iconClasses,
    Switch: switchClasses,
    Container: containerClasses,
  };
};