export type RequestModel = {
  params: object;
  query: object;
  body: object;
};

export type ResponseModel = {
  status: "success" | "error";
  statusCode: number;
  message: string;
  data?: object;
  error?: object;
};

export type ValidationError = {
  message: string;
  field: string;
};

export type ValidationResult<DTO> = [null | ValidationError, DTO | null];
