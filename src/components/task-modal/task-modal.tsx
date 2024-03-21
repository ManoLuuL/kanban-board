import {
  Button,
  Calendar,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  useToast,
} from "../ui";
import { InitialValueDTO, TaskModalForm, TaskModalProps } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  TASK_MODAL_DEFAULT_ERROR_INPUT_STYLE,
  TASK_MODAL_DEFAULT_INPUT_STYLE,
  TASK_MODAL_INITIAL_DATA,
  TASK_MODAL_SCHEMA,
  TASK_MODAL_TAG_OPTION,
} from "./consts";

import { CalendarIcon } from "lucide-react";
import { Modal } from "../modal";
import { MultiSelect } from "primereact/multiselect";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { v4 as uuidV4 } from "uuid";
import { zodResolver } from "@hookform/resolvers/zod";

export const TaskModal = (props: TaskModalProps) => {
  const { onClose, handleAddTask, taskEdit } = props;
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
      });
    } else {
      handleAddTask(newData);
      toast({
        title: `Criada a Tarefa ${newData.title}`,
        description: `${newData.briefDescription}`,
      });
    }
    onClose();
  };

  return (
    <>
      <Modal
        onConfirm={form.handleSubmit(onSubmit)}
        onHide={onClose}
        title={
          taskEdit?.isEdit
            ? `Editando Tarefa: ${taskEdit.task?.title}`
            : "Adicionar Tarefa"
        }
      >
        <Form {...form}>
          <form id={formId} className="w-full gap-3">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-gray-50">* Titulo</FormLabel>
                  <FormControl>
                    <Input
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
                <FormItem className="mb-2">
                  <FormLabel className="text-gray-50">
                    * Breve Descrição
                  </FormLabel>
                  <FormControl>
                    <Input
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
              name="description"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-gray-50">
                    * Descrição Completa
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      className={twMerge(
                        TASK_MODAL_DEFAULT_INPUT_STYLE,
                        form.formState.errors.description &&
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
                <FormItem className="mb-2">
                  <FormLabel className="text-gray-50">* Prioridade</FormLabel>
                  <FormControl>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma prioridade" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="low">Baixa</SelectItem>
                        <SelectItem value="medium">Média</SelectItem>
                        <SelectItem value="high">Alta</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-gray-50">
                    * Tempo de execução
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      type="number"
                      min={0}
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
                <FormItem className="mb-2">
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
              name="endTask"
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-gray-50">
                    Data de Finalização
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant={"default"}
                        className={TASK_MODAL_DEFAULT_INPUT_STYLE}
                      >
                        <div className="flex justify-between w-full items-center">
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Data de Finalização</span>
                          )}
                          <CalendarIcon className="ml-2 h-4 w-4" />
                        </div>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                      />
                    </PopoverContent>
                  </Popover>
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
