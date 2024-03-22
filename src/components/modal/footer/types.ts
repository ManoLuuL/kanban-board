import { ModalDefaultHeaderAndFooterProps } from "../types";

export type InternalModalFooterProps = ModalDefaultHeaderAndFooterProps & {
  onConfirm(): Promise<void>;
  formId?: string;
  hasConfirmFunction?: boolean;
  hasForm?: boolean;
};
