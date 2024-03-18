import "./styles.css";

import { AddTaskModalProps, Tag } from "./types";
import { ChangeEvent, useState } from "react";
import { DEFAULT_INPUT_STYLE, INITIAL_DATA } from "./consts";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Input } from "../ui/input";
import { Modal } from "../modal";
import { Textarea } from "../ui/textarea";
import { format } from "date-fns";
import { getRandomColors } from "@/globals";

export const AddTaskModal = (props: AddTaskModalProps) => {
  const { onClose, handleAddTask } = props;

  const [data, setData] = useState(INITIAL_DATA);
  const [tagTitle, setTagTitle] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleAddTag = () => {
    if (tagTitle.trim() !== "") {
      const { bg, text } = getRandomColors();
      const newTag: Tag = { title: tagTitle.trim(), bg, text };
      setData({ ...data, tags: [...data.tags, newTag] });
      setTagTitle("");
    }
  };

  const handleSubmit = () => {
    handleAddTask(data);
    onClose();
    return true;
  };

  return (
    <>
      <Modal
        onConfirm={handleSubmit}
        onHide={onClose}
        size="md"
        title="Adicionar Tarefa"
      >
        <div className="w-full flex flex-col items-center gap-3 px-5 py-6">
          <Input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            placeholder="Título"
            className={DEFAULT_INPUT_STYLE}
          />
          <Input
            type="text"
            name="briefDescription"
            value={data.briefDescription}
            onChange={handleChange}
            placeholder="Breve Descrição"
            className={DEFAULT_INPUT_STYLE}
          />
          <Textarea
            name="description"
            value={data.description}
            onChange={handleChange}
            placeholder="Descrição Completa"
            className={DEFAULT_INPUT_STYLE}
          />

          <Select
            name="priority"
            value={data.priority}
            onValueChange={(value) => setData({ ...data, ["priority"]: value })}
          >
            <SelectTrigger className={DEFAULT_INPUT_STYLE}>
              <SelectValue placeholder="Prioridade" />
            </SelectTrigger>
            <SelectContent className="bg-gray-700 text-gray-50">
              <SelectItem value="low">Baixa</SelectItem>
              <SelectItem value="medium">Média</SelectItem>
              <SelectItem value="high">Alta</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="number"
            name="deadline"
            value={data.deadline}
            onChange={handleChange}
            placeholder="Tempo de execução"
            className={DEFAULT_INPUT_STYLE}
          />
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
          >
            Adicionar Tag
          </Button>
          <div className="w-full">
            {data.tags && <span className="text-gray-50">Tags:</span>}
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
