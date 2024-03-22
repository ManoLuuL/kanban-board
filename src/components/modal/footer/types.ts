import { ModalDefaultHeaderAndFooterProps } from "../types";

export type InternalModalFooterProps = ModalDefaultHeaderAndFooterProps & {
  onConfirm(): Promise<void>;
  hasConfirmFunction?: boolean;
  hasForm?: boolean;
};
