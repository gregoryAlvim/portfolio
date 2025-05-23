import { en } from "./en";
import { ptBR } from "./pt-br";
import type { Dictionarie } from "./type";

export const getDictionarie = (locale: string): Dictionarie => {
  let dictionarie: Dictionarie;

  if (locale === 'en') {
    dictionarie = en;
  } else { // Fallback to pt-br for any other locale
    dictionarie = ptBR;
  }
  return dictionarie;
};
