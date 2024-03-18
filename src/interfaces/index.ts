import { VariantType, CharCaseType } from "../types";

export interface IOption {
  separator: string;
  sectionLength: number;
  totalSection: number;
  prefix: string;
  variant: VariantType;
  charCase: CharCaseType;
}
