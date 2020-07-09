import { ResponseModel } from "./types";

export interface OutputBoundary {
  execute(res: ResponseModel): Promise<any>;
}
