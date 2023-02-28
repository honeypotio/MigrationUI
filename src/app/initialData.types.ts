import { DataType } from "./types";
import initialData from "../initialData";

// This is a internal check
initialData as DataType;

export type InitialDataType = typeof initialData;
