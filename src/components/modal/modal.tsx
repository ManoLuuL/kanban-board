import * as Dialog from "@radix-ui/react-dialog";

import { MODAL_CLOSE_ANIMATION_MODAL_TIME, MODAL_HEADER_ID } from "./consts";
import { useRef, useState } from "react";

import { ModalFooter } from "./footer";
import { ModalHeader } from "./header";
import { ModalProps } from "./types";
import { twMerge } from "tailwind-merge";

export const Modal = (props: ModalProps) => {
  const {
    children,
    onHide,
    title,
    onConfirm,
    customFooter,
    customHeader,
    showFooter = true,
    showHeader = true,
    hasPadding = true,
    allowCloseOnEscapeAndOutsideClick = true,
    hasForm,
    formId,
  } = props;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const elementRef = useRef<HTMLDivElement>(null);

  const handleClose = () => {
    if (!onHide) return;
    setIsOpen(false);

    setTimeout(() => {
      onHide();
    }, MODAL_CLOSE_ANIMATION_MODAL_TIME);
  };

  const handleConfirm = async () => {
    if (!onConfirm) return;

    setIsSubmitting(true);

    try {
      onConfirm();
    } catch (e) {
      console.error({ e, originFunction: "handleConfirm" });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleFooterConfirm = async () => await handleConfirm();

  const handleCloseOnEscapeAndOutsideClick = () => {
    if (!allowCloseOnEscapeAndOutsideClick) return;
    handleClose();
  };

  const defaultHeaderAndFooterPadding = hasPadding && "p-4 pb-2";
  const hasCloseFunction = !!onHide;
  const hasConfirmFunction = !!onConfirm;

  return (
    <>
      <div
        onClick={handleCloseOnEscapeAndOutsideClick}
        className={twMerge(
          "h-full w-full",
          "top-0 left-0",
          "bg-gray-900/80",
          "absolute",
          "z-40"
        )}
      />
      <Dialog.Root modal={false} open={true} defaultOpen>
        <Dialog.Portal>
          <Dialog.Content
            autoFocus={false}
            ref={elementRef}
            onEscapeKeyDown={handleCloseOnEscapeAndOutsideClick}
            className={twMerge(
              "h-fit w-fit",
              "right-0 left-0 m-auto top-0 bottom-0",
              "fixed z-50 rounded-md overflow-y-auto",
              "bg-gray-950",
              "outline-none",
              "shadow-lg",
              isOpen
                ? "animate-in zoom-in-[.25] fade-in-0"
                : "animate-out zoom-out-[.25] fade-out-0"
            )}
          >
            {showHeader &&
              (customHeader ?? (
                <ModalHeader
                  elementAttributes={{
                    className: twMerge(
                      "select-none",
                      defaultHeaderAndFooterPadding,
                      "border-none"
                    ),
                    id: MODAL_HEADER_ID,
                  }}
                  onClose={handleClose}
                  isSubmitting={isSubmitting}
                  title={title}
                  hasCloseFunction={hasCloseFunction}
                />
              ))}
            {
              <div
                className={twMerge(
                  hasPadding && "p-3",
                  "flex flex-col sm:w-auto md:w-[50rem]"
                )}
              >
                <div className="px-2">{children}</div>
              </div>
            }
            {showFooter &&
              (customFooter ?? (
                <ModalFooter
                  elementAttributes={{
                    className: twMerge(defaultHeaderAndFooterPadding),
                  }}
                  formId={formId}
                  onClose={handleClose}
                  onConfirm={handleFooterConfirm}
                  isSubmitting={isSubmitting}
                  hasConfirmFunction={hasConfirmFunction}
                  hasCloseFunction={hasCloseFunction}
                  hasForm={hasForm}
                />
              ))}
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
