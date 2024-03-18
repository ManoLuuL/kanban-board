import { Button } from "@/components/ui/button";
import { InternalModalHeaderProps } from "./types";
import { IoCloseOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

export const ModalHeader = (props: InternalModalHeaderProps) => {
  const {
    title,
    onClose,
    isSubmitting,
    isAllButtonsDisabled,
    hasCloseFunction,
    elementAttributes,
  } = props;

  const preventFunctions = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
  };

  const handleClose = (e: React.MouseEvent<Element, MouseEvent>) => {
    preventFunctions(e);
    onClose?.();
  };

  const isButtonDisabled = isAllButtonsDisabled || isSubmitting;
  const isStringTitle = typeof title === "string";

  return (
    <div
      {...elementAttributes}
      className={twMerge(
        "!select-none",
        "flex items-center",
        title ? "justify-between" : "justify-end",
        elementAttributes?.className
      )}
    >
      {isStringTitle ? (
        <span
          className={twMerge(
            "select-none pointer-events-none",
            "text-lg text-gray-100 dark:text-light-300 font-semibold"
          )}
        >
          {title}
        </span>
      ) : (
        title
      )}
      {hasCloseFunction && (
        <Button
          onClick={handleClose}
          variant={"ghost"}
          disabled={isButtonDisabled}
          size="icon"
          className={twMerge(
            "h-6",
            "select-none text-gray-50 hover:text-gray-700"
          )}
          onMouseDown={preventFunctions}
        >
          <IoCloseOutline size={25} />
        </Button>
      )}
    </div>
  );
};
