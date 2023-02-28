import { Config } from "./app/types";

export const config: Config = {
  title: "Ember to React migration",
  theme: {
    background: "#FFFFFF",
    color: "#000000",
    boxBorder: "#333",
    sectionHeaderBackground: "#333333",
    sectionHeaderColor: "#fff",
    sectionBodyBackground: "rgba(100, 100, 100, 0.6)",
  },
  elementProgress: {
    done: {
      legendLabel: "React",
      backgroundColor: "#02c39a",
      color: "#000000",
    },
    inProgress: {
      legendLabel: "In progress",
      backgroundColor: "#FFCB77",
      color: "#000000",
    },
    notDone: {
      legendLabel: "Ember",
      backgroundColor: "#FE6D73",
      color: "#000000",
    },
  },
};
