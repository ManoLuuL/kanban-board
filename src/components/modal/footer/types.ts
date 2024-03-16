import { ModalDefaultHeaderAndFooterProps } from "../types";

export type InternalModalFooterProps = ModalDefaultHeaderAndFooterProps & {
  onConfirm(): Promise<void>;
  /**
   * Caso hasForm seja "true", o formId deverá ser informado para o botão.
   */
  formId?: string;

  /**
   * Proprieade que siniliza "true" caso haja uma função atribuída ao onConfirm
   */
  hasConfirmFunction?: boolean;
};
