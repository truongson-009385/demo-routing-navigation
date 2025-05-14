export interface CustomError {
  name: string;
  message: string;
  statusCode: number;
}

export class AuthRequiredError extends Error implements CustomError {
  statusCode: number;
  constructor(message = "Yêu cầu đăng nhập để truy cập.") {
    super(message);
    this.name = "AuthRequiredError";
    this.statusCode = 401;
  }
}

export class ForbiddenError extends Error implements CustomError {
  statusCode: number;
  constructor(message = "Bạn không có quyền truy cập tài nguyên này.") {
    super(message);
    this.name = "ForbiddenError";
    this.statusCode = 403;
  }
}

export class ServerError extends Error implements CustomError {
  statusCode: number;
  constructor(message = "Lỗi hệ thống, vui lòng thử lại sau.") {
    super(message);
    this.name = "ServerError";
    this.statusCode = 500;
  }
}