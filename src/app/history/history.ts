import migrations from "../../migrations";
import produce from "immer";
import { DataType } from "../types";

interface History {
  [date: string]: DataType;
}
const history: History = {};

const executeMigrations = (history: History) => {
  for (let migration of migrations) {
    const dbKeys = Object.keys(history);
    const prevState = { ...history[dbKeys[dbKeys.length - 1]] };

    const newState = produce(prevState, migration.operation);
    history[migration.date] = { ...newState };
  }
};

executeMigrations(history);

export default history;
