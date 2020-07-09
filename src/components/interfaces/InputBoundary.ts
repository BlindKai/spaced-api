import { ResponseModel, RequestModel } from ".";

export interface InputBoundary {
  execute(req: RequestModel): Promise<ResponseModel>;
}
