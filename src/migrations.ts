import { Progress, MigrationType } from "./app/types";

import initialData from "./initialData";

const migrations: MigrationType[] = [
  // This is the date when your team started the migration process
  { date: "2022-06-14", operation: () => initialData },
  // ↓↓↓↓ Here below will go your progress ↓↓↓↓
  {
    date: "2022-06-23",
    operation: (prevData) => {
      prevData.sections.catalog.elements.product.progress = Progress.inProgress;
    },
  },
  {
    date: "2022-07-02",
    operation: (prevData) => {
      prevData.sections.catalog.elements.product.progress = Progress.inProgress;
    },
  },
  {
    date: "2022-07-02",
    operation: (prevData) => {
      prevData.sections.catalog.elements.product.progress = Progress.done;
      prevData.sections.dashboard.elements.products.elements.edit.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-07-19",
    operation: (prevData) => {
      prevData.sections.dashboard.elements.products.elements.edit.progress =
        Progress.done;
      prevData.sections.dashboard.elements.products.progress = Progress.done;
    },
  },
  {
    date: "2022-07-21",
    operation: (prevData) => {
      prevData.sections.dashboard.elements.insights.progress =
        Progress.inProgress;
    },
  },
  {
    date: "2022-08-10",
    operation: (prevData) => {
      prevData.sections.dashboard.elements.insights.progress = Progress.done;
    },
  },
];

export default migrations;
