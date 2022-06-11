import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnListResponse, ReturnResponse } from "../Response";

const route: ApiRoutes = {
  method: ApiMethods.GET, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "discount/getAllDiscount",
};
export const getAllDiscountApi = async (): Promise<ReturnListResponse<any>> => {
  return Repository(route);
};
