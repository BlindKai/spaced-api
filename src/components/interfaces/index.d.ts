export type RequestModel = {
  params?: any;
  query?: any;
  body?: any;
};

export type ResponseModel = {
  status: "success" | "error";
  statusCode: number;
  message: string;
  data?: object;
  error?: object;
};
