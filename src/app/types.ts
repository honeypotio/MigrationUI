import { InitialDataType } from "./initialData.types";

export enum Progress {
  done = "done",
  notDone = "notDone",
  inProgress = "inProgress",
}

export interface ElementType {
  label: string;
  progress: Progress;
  elements?: {
    [k: string]: ElementType;
  };
}

export interface SectionType {
  label: string;
  elements: {
    [k: string]: ElementType;
  };
}

export interface DataType {
  sections: {
    [k: string]: SectionType;
  };
}

type OperationType = (draft: InitialDataType) => void;
export type MigrationType = { date: string; operation: OperationType };

export interface Config {
  title: string;
  theme: {
    background: string;
    color: string;
    boxBorder: string;
    sectionHeaderBackground: string;
    sectionHeaderColor: string;
    sectionBodyBackground: string;
  };
  elementProgress: {
    [k in Progress]: {
      legendLabel: string;
      backgroundColor: string;
      color: string;
    };
  };
}
