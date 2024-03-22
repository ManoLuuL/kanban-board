import { ModalDefaultProps } from "../modal";

export type ConfirmDeleteModalProps = ModalDefaultProps & {
  onConfirm(): void;
};
