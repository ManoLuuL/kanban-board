import { Editor, EditorTextChangeEvent } from "primereact/editor";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  useToast,
} from "../ui";
import { InitialValueDTO, TaskModalForm, TaskModalProps } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE,
  TASK_MODAL_DEFAULT_INPUT_STYLE,
  TASK_MODAL_DEFAULT_LABEL_STYLE,
  TASK_MODAL_INITIAL_DATA,
  TASK_MODAL_PRIORITY,
  TASK_MODAL_RESPONSIBLE,
  TASK_MODAL_SCHEMA,
  TASK_MODAL_TAG_OPTION,
} from "./consts";

import { Calendar as CalendarPrime } from "primereact/calendar";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { Modal } from "../modal";
import { MultiSelect } from "primereact/multiselect";
import { TOAST_TIME_DURATION } from "@/globals";
import { twMerge } from "tailwind-merge";
import { v4 as uuidV4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";

export const TaskModal = (props: TaskModalProps) => {
  const { onHide, handleAddTask, taskEdit } = props;
  const formId = uuidV4();
  const { toast } = useToast();

  const form = useForm<TaskModalForm>({
    resolver: zodResolver(TASK_MODAL_SCHEMA),
    defaultValues: taskEdit?.isEdit ? taskEdit.task : TASK_MODAL_INITIAL_DATA,
  });

  const onSubmit: SubmitHandler<TaskModalForm> = (formData) => {
    const newData: InitialValueDTO = {
      ...formData,
      id: taskEdit?.task?.id || uuidV4(),
    };

    if (taskEdit && taskEdit.task) {
      taskEdit.handleEditTask(taskEdit.task.id, newData);
      toast({
        title: `Modificada a Tarefa ${newData.title}`,
        description: `${newData.briefDescription}`,
        duration: TOAST_TIME_DURATION,
      });
    } else {
      handleAddTask(newData);
      toast({
        title: `Criada a Tarefa ${newData.title}`,
        description: `${newData.briefDescription}`,
        duration: TOAST_TIME_DURATION,
      });
    }
    onHide();
  };

  return (
    <>
      <Modal
        onConfirm={form.handleSubmit(onSubmit)}
        onHide={onHide}
        title={
          taskEdit?.isEdit
            ? `Editando Tarefa: ${taskEdit.task?.title}`
            : "Adicionar Tarefa"
        }
        hasForm={true}
      >
        <Form {...form}>
          <form id={formId} className="w-full grid grid-cols-12 gap-3 p-3 ">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem
                  className={twMerge(
                    "col-span-12",
                    TASK_MODAL_DEFAULT_LABEL_STYLE
                  )}
                >
                  <FormLabel className="text-gray-50">* Titulo</FormLabel>
                  <FormControl>
                    <InputText
                      {...field}
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.title &&
                          TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="briefDescription"
              render={({ field }) => (
                <FormItem
                  className={twMerge(
                    "col-span-6 md:col-span-7",
                    TASK_MODAL_DEFAULT_LABEL_STYLE
                  )}
                >
                  <FormLabel className="text-gray-50">
                    * Breve Descrição
                  </FormLabel>
                  <FormControl>
                    <InputText
                      {...field}
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.briefDescription &&
                          TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem
                  className={twMerge(
                    "col-span-6 md:col-span-3",
                    TASK_MODAL_DEFAULT_LABEL_STYLE
                  )}
                >
                  <FormLabel className="text-gray-50">* Prioridade</FormLabel>
                  <FormControl>
                    <Dropdown
                      {...field}
                      optionLabel="title"
                      options={TASK_MODAL_PRIORITY}
                      onChange={(e) => field.onChange(e.value)}
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.priority &&
                          TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE
                      )}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem
                  className={twMerge(
                    "col-span-6 md:col-span-2",
                    TASK_MODAL_DEFAULT_LABEL_STYLE
                  )}
                >
                  <FormLabel className="text-gray-50">* Tempo</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="time"
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.deadline &&
                          TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem
                  className={twMerge(
                    "col-span-6 ",
                    TASK_MODAL_DEFAULT_LABEL_STYLE
                  )}
                >
                  <FormLabel className="text-gray-50">* Tags</FormLabel>
                  <FormControl>
                    <MultiSelect
                      {...field}
                      options={TASK_MODAL_TAG_OPTION}
                      optionLabel="title"
                      showSelectAll={false}
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.tags &&
                          TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="responsible"
              render={({ field }) => (
                <FormItem
                  className={twMerge(
                    "col-span-6",
                    TASK_MODAL_DEFAULT_LABEL_STYLE
                  )}
                >
                  <FormLabel className="text-gray-50">* Responsavel</FormLabel>
                  <FormControl>
                    <Dropdown
                      {...field}
                      optionLabel="title"
                      options={TASK_MODAL_RESPONSIBLE}
                      onChange={(e) => field.onChange(e.value)}
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.responsible &&
                          TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="endTask"
              render={({ field }) => (
                <FormItem
                  className={twMerge(
                    "col-span-6 md:col-span-6",
                    TASK_MODAL_DEFAULT_LABEL_STYLE
                  )}
                >
                  <FormLabel className="text-gray-50">
                    Data de Finalização
                  </FormLabel>
                  <FormControl>
                    <CalendarPrime
                      {...field}
                      dateFormat="dd/mm/yy"
                      showIcon
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.responsible &&
                          TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE
                      )}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mb-11 col-span-12">
                  <FormLabel className="text-gray-50">
                    * Descrição Completa
                  </FormLabel>
                  <FormControl>
                    <Editor
                      id={field.name}
                      className={twMerge("max-h-96 h-40")}
                      onTextChange={(e: EditorTextChangeEvent) => {
                        field.onChange(e.htmlValue);
                      }}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </Modal>
    </>
  );
};
