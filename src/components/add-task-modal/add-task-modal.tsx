import "./styles.css";

import {
  AddTaskModalForm,
  AddTaskModalProps,
  InitialValueDTO,
  Tag,
} from "./types";
import {
  DAFAULT_WIDTH_INPUTS,
  DEFAULT_ERROR_INPUT_STYLE,
  DEFAULT_INPUT_STYLE,
  INITIAL_DATA,
} from "./consts";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { SubmitHandler, useForm } from "react-hook-form";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Modal } from "../modal";
import { Textarea } from "../ui/textarea";
import { format } from "date-fns";
import { getRandomColors } from "@/globals";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export const AddTaskModal = (props: AddTaskModalProps) => {
  const { onClose, handleAddTask } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddTaskModalForm>();

  const [data, setData] = useState(INITIAL_DATA);
  const [tagTitle, setTagTitle] = useState("");

  const handleAddTag = () => {
    if (tagTitle.trim() !== "") {
      const { bg, text } = getRandomColors();
      const newTag: Tag = { title: tagTitle.trim(), bg, text };
      setData({ ...data, tags: [...data.tags, newTag] });
      setTagTitle("");
    }
  };

  const onSubmit: SubmitHandler<AddTaskModalForm> = (formData) => {
    console.log(formData);
    const newData: InitialValueDTO = {
      id: data.id,
      tags: data.tags,
      endTask: data.endTask,
      ...formData,
    };

    handleAddTask(newData);
    onClose();
  };

  return (
    <>
      <Modal
        onConfirm={handleSubmit(onSubmit)}
        onHide={onClose}
        size="md"
        title="Adicionar Tarefa"
        hasForm
      >
        <div className="w-full flex flex-col items-center gap-3 px-5 py-6">
          <div className={DAFAULT_WIDTH_INPUTS}>
            <Input
              type="text"
              placeholder="* Título"
              className={twMerge(
                DEFAULT_INPUT_STYLE,
                errors.title && DEFAULT_ERROR_INPUT_STYLE
              )}
              {...register("title", { required: true })}
            />
            {errors.title && (
              <span className="text-red-500">O campo é obrigatorio</span>
            )}
          </div>
          <div className={DAFAULT_WIDTH_INPUTS}>
            <Input
              type="text"
              placeholder="* Breve Descrição"
              className={DEFAULT_INPUT_STYLE}
              {...register("briefDescription", { required: true })}
            />
            {errors.briefDescription && (
              <span className="text-red-500">O campo é obrigatorio</span>
            )}
          </div>
          <div className={DAFAULT_WIDTH_INPUTS}>
            <Textarea
              placeholder="* Descrição Completa"
              className={DEFAULT_INPUT_STYLE}
              {...register("description", { required: true })}
            />
            {errors.description && (
              <span className="text-red-500">O campo é obrigatorio</span>
            )}
          </div>

          <div className={DAFAULT_WIDTH_INPUTS}>
            <select
              {...register("priority", { required: true })}
              className={twMerge(
                DEFAULT_INPUT_STYLE,
                "focus-visible:ring-2 focus-visible:ring-white"
              )}
            >
              <option value="low">Baixa</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
            {errors.priority && (
              <span className="text-red-500">O campo é obrigatorio</span>
            )}
          </div>

          <div className={DAFAULT_WIDTH_INPUTS}>
            <Input
              type="number"
              placeholder="* Tempo de execução"
              className={DEFAULT_INPUT_STYLE}
              {...register("deadline", { required: true })}
            />
            {errors.deadline && (
              <span className="text-red-500">O campo é obrigatorio</span>
            )}
          </div>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"default"} className={DEFAULT_INPUT_STYLE}>
                <div className="flex justify-between w-full items-center">
                  {data.endTask ? (
                    format(data.endTask, "dd/MM/yyyy")
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
                selected={data.endTask}
                onSelect={(value) => {
                  if (value) setData({ ...data, ["endTask"]: value });
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>

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
        </div>
      </Modal>
    </>
  );
};
