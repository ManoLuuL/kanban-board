import { HTMLAttributes, ReactNode } from "react";

export type ModalSizes = "xs" | "sm" | "md" | "lg" | "full" | "auto";

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
  onHide?(): void;
  isAllButtonsDisabled?: boolean;

  /**
   * Fecha o modal ao pressionar ESC ou ao clicar fora
   *
   * @default true
   */
  allowCloseOnEscapeAndOutsideClick?: boolean;
};

export type ModalProps = ModalDefaultProps &
  ModalHeaderProps & {
    onConfirm?(): boolean | Promise<boolean>;
    customHeader?: ReactNode;
    customFooter?: ReactNode;
    children?: ReactNode;

    /**
     * Esconde o rodapé do modal.
     * @default true
     * */
    showFooter?: boolean;

    /**
     * Esconde o cabeçalho dao modal
     * @default true
     */
    showHeader?: boolean;

    /**
     * Caso "true", todo o conteúdo do modal sera envolvido por um form e o botão se tornará do tipo "submit"
     */
    hasForm?: boolean;

    /**
     * Remove padding do conteúdo do modal
     * @default true
     */
    hasPadding?: boolean;

    /**
     * Ativa ou desativa o drag do modal
     * @default true
     */
    isDragabble?: boolean;

    /**
     * @default "sm"
     */
    size?: ModalSizes;
  };
