import { Interactor } from "../components/interfaces/Interactor";
import { RequestModel } from "../components/interfaces";
import { Request, Response } from "express";

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

    const responseModel = await useCase.execute(requestModel);

    res.json(responseModel);
  };
}
