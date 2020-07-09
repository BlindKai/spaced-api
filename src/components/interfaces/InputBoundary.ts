import { ResponseModel, RequestModel } from "./types";

export interface InputBoundary {
  execute(req: RequestModel): Promise<ResponseModel>;
}
