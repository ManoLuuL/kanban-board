import { HTMLAttributes, ReactNode } from "react";

export type ModalHeaderProps = {
  title?: ReactNode;
};

export type ModalDefaultHeaderAndFooterProps = {
  onClose?(): void;
  isSubmitting: boolean;
  isAllButtonsDisabled?: boolean;
  elementAttributes?: HTMLAttributes<HTMLDivElement>;
  hasCloseFunction?: boolean;
};

export type ModalDefaultProps = {
  onHide(): void;
  allowCloseOnEscapeAndOutsideClick?: boolean;
};

export type ModalProps = ModalDefaultProps &
  ModalHeaderProps & {
    onConfirm?(): void;
    customHeader?: ReactNode;
    customFooter?: ReactNode;
    children?: ReactNode;
    showFooter?: boolean;
    showHeader?: boolean;
    hasPadding?: boolean;
    hasForm?: boolean;
  };
