import { Button } from "@/components/ui/button";
import { InternalModalFooterProps } from "./types";
import { twMerge } from "tailwind-merge";

export const ModalFooter = (props: InternalModalFooterProps) => {
  const {
    onConfirm,
    onClose,
    isSubmitting,
    isAllButtonsDisabled,
    hasConfirmFunction,
    hasCloseFunction,
    elementAttributes,
    hasForm,
  } = props;

  const handleClick = () => onConfirm();
  const handleClose = () => onClose?.();

  const isButtonDisabled = isAllButtonsDisabled || isSubmitting;
  const confirmButtonTitle = hasForm ? "Salvar" : "Confirmar";

  return (
    <div
      {...elementAttributes}
      className={twMerge(
        "w-full",
        "pt-2 mt-1 gap-2",
        "flex justify-end items-center",
        "border-t border-solid border-gray-100/70",
        elementAttributes?.className
      )}
    >
      {hasCloseFunction && (
        <Button
          id={"cancel_button"}
          disabled={isButtonDisabled}
          variant={"outline"}
          onClick={handleClose}
          title="Cancelar"
          className="bg-transparent text-gray-50"
        >
          Cancelar
        </Button>
      )}
      {hasConfirmFunction && (
        <Button
          id={"save_button"}
          variant={"default"}
          disabled={isButtonDisabled}
          type={"submit"}
          className="px-7 bg-cyan-500 hover:bg-cyan-600"
          onClick={handleClick}
        >
          {confirmButtonTitle}
        </Button>
      )}
    </div>
  );
};
