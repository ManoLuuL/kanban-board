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
} from "../ui";
import {
  DEFAULT_ERROR_INPUT_STYLE,
  DEFAULT_INPUT_STYLE,
  INITIAL_DATA,
} from "./consts";
import { InitialValueDTO, TaskModalForm, TaskModalProps } from "./types";
import { SubmitHandler, useForm } from "react-hook-form";

import { CalendarIcon } from "lucide-react";
import { Modal } from "../modal";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";
import { v4 as uuidV4 } from "uuid";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export const TaskModal = (props: TaskModalProps) => {
  const { onClose, handleAddTask, taskEdit } = props;
  const formId = uuidV4();

  const taskSchema = z.object({
    title: z.string().min(5, {
      message: "Mínimo de 5 caracteres.",
    }),
    briefDescription: z
      .string()
      .min(5, {
        message: "Mínimo de 5 caracteres.",
      })
      .max(10, {
        message: "Máximo de 10 caracteres.",
      }),
    description: z
      .string()
      .min(10, {
        message: "Mínimo de 10 caracteres.",
      })
      .max(160, {
        message: "Maximo de caracteres atingido.",
      }),
    priority: z.string().min(1, {
      message: "Mínimo de 1 caracteres.",
    }),
    endTask: z.date().optional(),
    deadline: z.number().min(2, {
      message: "Mínimo de 2 caracteres.",
    }),
    tags: z.array(
      z.object({
        title: z.string(),
        bg: z.string(),
        text: z.string(),
      })
    ),
  });

  const form = useForm<z.infer<typeof taskSchema>>({
    resolver: zodResolver(taskSchema),
    defaultValues: taskEdit?.isEdit ? taskEdit.task : INITIAL_DATA,
  });

  // const [data, setData] = useState(INITIAL_DATA);
  // const [tagTitle, setTagTitle] = useState("");

  // const handleAddTag = () => {
  //   if (tagTitle.trim() !== "") {
  //     const { bg, text } = getRandomColors();
  //     const newTag: Tag = { title: tagTitle.trim(), bg, text };
  //     setData({ ...data, tags: [...data.tags, newTag] });
  //     setTagTitle("");
  //   }
  // };

  const onSubmit: SubmitHandler<TaskModalForm> = (formData) => {
    if (taskEdit && taskEdit.task) {
      const newData: InitialValueDTO = {
        ...formData,
        id: taskEdit.task.id,
        // tags: data.tags.length ? data.tags : taskEdit.task.tags,
      };

      taskEdit.handleEditTask(taskEdit.task.id, newData);
    } else {
      const newData: InitialValueDTO = {
        ...formData,
        id: uuidV4(),
        // tags: data.tags,
      };

      handleAddTask(newData);
    }

    onClose();
  };

  return (
    <>
      <Modal
        onConfirm={form.handleSubmit(onSubmit)}
        onHide={onClose}
        size="md"
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
              rules={{
                required: true,
              }}
              render={({ field }) => (
                <FormItem className="mb-2">
                  <FormLabel className="text-gray-50">* Titulo</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className={twMerge(
                        DEFAULT_INPUT_STYLE,
                        form.formState.errors.title && DEFAULT_ERROR_INPUT_STYLE
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
                        DEFAULT_INPUT_STYLE,
                        form.formState.errors.briefDescription &&
                          DEFAULT_ERROR_INPUT_STYLE
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
                        DEFAULT_INPUT_STYLE,
                        form.formState.errors.description &&
                          DEFAULT_ERROR_INPUT_STYLE
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
                        DEFAULT_INPUT_STYLE,
                        form.formState.errors.deadline &&
                          DEFAULT_ERROR_INPUT_STYLE
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
                        className={DEFAULT_INPUT_STYLE}
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

        {/*

          <Input
            type="text"
            value={tagTitle}
            onChange={(e) => setTagTitle(e.target.value)}
            placeholder="Título Tag"
            className={DEFAULT_INPUT_STYLE}
          />
          <Button
            variant={"default"}
            className="w-full rounded-md h-9 bg-gray-800 !text-white font-medium"
            onClick={handleAddTag}
            type="button"
          >
            Adicionar Tag
          </Button>
          <div className="w-full">
            {data.tags.length && <span className="text-gray-50">Tags:</span>}
            {data.tags.map((tag, index) => (
              <div
                key={index}
                className="inline-block mx-1 px-2 py-1 text-xs font-medium rounded-md"
                style={{ backgroundColor: tag.bg, color: tag.text }}
              >
                {tag.title}
              </div>
            ))}
          </div>
        </div> */}
      </Modal>
    </>
  );
};
