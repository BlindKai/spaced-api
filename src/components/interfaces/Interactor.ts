import { InputBoundary } from "./InputBoundary";
import { RequestModel, ResponseModel } from ".";

/**
 * Interactor class is a basic Use Case abstraction that provide static methods and options
 * to easily retrieve `ResponseModel`.
 * According to Clean Architecture - Use cases are components that perform actions on Entities
 * using data provided from Request Model, to change the state of Entities and show them by
 * returning Response Model to the user.
 */
export abstract class Interactor implements InputBoundary {
  protected abstract executeImpl(req: RequestModel): Promise<ResponseModel>;

  async execute(req: RequestModel): Promise<ResponseModel> {
    try {
      return await this.executeImpl(req);
    } catch (error) {
      console.error("[AbstractUseCase Error]: ", error);
      return this.internalServerError();
    }
  }

  protected ok(data?: object | object[], message: string = "OK"): ResponseModel {
    return { status: "success", statusCode: 200, message, data };
  }

  protected created(message: string = "Created"): ResponseModel {
    return { status: "success", statusCode: 201, message };
  }

  protected noContent(message: string = "No Content"): ResponseModel {
    return { status: "success", statusCode: 204, message };
  }

  protected badRequest(message: string = "Bad Request", error?: object): ResponseModel {
    return { status: "error", statusCode: 204, message, error };
  }

  protected unauthorized(message: string = "Unauthorized", error?: object): ResponseModel {
    return { status: "error", statusCode: 401, message, error };
  }

  protected forbidden(message: string = "Forbidden", error?: object): ResponseModel {
    return { status: "error", statusCode: 403, message, error };
  }

  protected notFound(message: string = "Not Found", error?: object): ResponseModel {
    return { status: "error", statusCode: 404, message, error };
  }

  protected conflict(message: string = "Conflict", error?: object): ResponseModel {
    return { status: "error", statusCode: 409, message, error };
  }

  protected unprocessableEntity(message: string = "Unprocessable Entity", error?: object): ResponseModel {
    return { status: "error", statusCode: 422, message, error };
  }

  protected tooManyRequests(message: string = "Too Many Requests", error?: object): ResponseModel {
    return { status: "error", statusCode: 429, message, error };
  }

  protected internalServerError(message: string = "Internal Server Error"): ResponseModel {
    return { status: "error", statusCode: 500, message };
  }
}
