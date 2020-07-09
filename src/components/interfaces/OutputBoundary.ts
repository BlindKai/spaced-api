import { ResponseModel } from ".";

export interface OutputBoundary {
  execute(res: ResponseModel): Promise<any>;
}
