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
