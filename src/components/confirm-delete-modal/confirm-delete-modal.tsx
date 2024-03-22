import { ConfirmDeleteModalProps } from "./types";
import { Modal } from "../modal";

export const ConfirmDeleteModal = (props: ConfirmDeleteModalProps) => {
  const { onHide, onConfirm } = props;

  return (
    <Modal title={"Excluindo Tarefa"} onConfirm={onConfirm} onHide={onHide}>
      <p className="font-semibold text-lg select-none">
        A exclusão desta tarefa é irreversível. Tem certeza de que deseja
        continuar?
      </p>
    </Modal>
  );
};
