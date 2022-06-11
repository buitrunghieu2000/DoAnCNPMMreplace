import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnListResponse } from "../Response";

const route: ApiRoutes = {
  method: ApiMethods.GET, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "iventoryHistory/getAllIventoryHistory",
};
export const getAllIEBILLApi = async (
  params: any
): Promise<ReturnListResponse<any>> => {
  return Repository(route, params);
};
