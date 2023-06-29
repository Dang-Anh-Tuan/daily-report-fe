import AuthenMiddleware from "@middleware/AuthenMiddleware"
import UserMiddleware from "@middleware/UserMiddleware";

interface MiddlewareListModel {
  [key: string]: any;
}

export const MIDDLEWARE_LIST:MiddlewareListModel = {
  AuthenMiddleware: AuthenMiddleware,
  UserMiddleware: UserMiddleware
}