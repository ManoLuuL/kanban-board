import { Button } from "@/components/ui/button";
import { InternalModalFooterProps } from "./types";
import { twMerge } from "tailwind-merge";

export const ModalFooter = (props: InternalModalFooterProps) => {
  const {
    onConfirm,
    onClose,
    isSubmitting,
    isAllButtonsDisabled,
    formId,
    hasConfirmFunction,
    hasCloseFunction,
    elementAttributes,
  } = props;

  const handleClick = () => !hasForm && onConfirm();
  const handleClose = () => onClose?.();

  const hasForm = !!formId;

  const saveButtonText = hasForm ? "Salvar" : "Confirmar";
  const saveButtonType = hasForm ? "submit" : "button";
  const isButtonDisabled = isAllButtonsDisabled || isSubmitting;

  return (
    <div
      {...elementAttributes}
      className={twMerge(
        "w-full",
        "pt-2 mt-1 gap-2",
        "flex justify-end items-center",
        "border-t border-solid border-surface-300/70",
        elementAttributes?.className
      )}
    >
      {hasCloseFunction && (
        <Button
          id={"cancel_button"}
          disabled={isButtonDisabled}
          variant={"destructive"}
          onClick={handleClose}
          title="Cancelar"
        >
          Cancelar
        </Button>
      )}
      {hasConfirmFunction && (
        <Button
          id={"save_button"}
          variant={"outline"}
          disabled={isButtonDisabled}
          type={saveButtonType}
          className="px-7"
          onClick={handleClick}
        >
          {saveButtonText}
        </Button>
      )}
    </div>
  );
};
