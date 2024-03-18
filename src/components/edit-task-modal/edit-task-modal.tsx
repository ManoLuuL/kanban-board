import { EditTaskModalProps } from "./types";
import { Modal } from "../modal";

export const EditTaskModal = (props: EditTaskModalProps) => {
  const { handleEditTask, onClose, task } = props;

  return (
    <>
      <Modal onConfirm={() => true} onHide={onClose} size="auto">
        <div>Edit</div>
      </Modal>
    </>
  );
};
