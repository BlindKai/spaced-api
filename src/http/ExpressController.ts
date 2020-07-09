import { Request, Response } from "express";
import { RequestModel, ResponseModel } from "../components/interfaces";
import { Interactor } from "../components/interfaces/Interactor";

/**
 * Example of Delivery mechanism implementation with `Express` framework.
 * @param useCase instance of `UseCase` that perform some actions and returns `ResponseModel`
 */
export function ExpressController(useCase: Interactor) {
  return async function (req: Request, res: Response) {
    const requestModel: RequestModel = {
      params: req.params,
      query: req.query,
      body: req.body,
    };

    const responseModel: ResponseModel = await useCase.execute(requestModel);

    res.json(responseModel);
  };
}
