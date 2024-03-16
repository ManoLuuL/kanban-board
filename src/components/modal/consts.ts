import { ModalSizes } from "./types";

export const MODAL_CLOSE_ANIMATION_MODAL_TIME = 100;
export const MODAL_HEADER_ID = "base__modal__header";

export const MODAL_SIZES: { [key in ModalSizes]: string | undefined } = {
  xs: "15rem",
  sm: "20rem",
  md: "30rem",
  lg: "50rem",
  full: "95vw",
  auto: undefined,
};
