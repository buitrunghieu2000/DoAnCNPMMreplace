import { loginModel } from "../../models/auth.model";
import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnResponse } from "../Response";

export interface payloadCreateProduct {
  name: string;
  detail: string;
  price: string;
  groupProduct: string;
  weight: string;
  quantity: string;
  image: Array<File>;
}
const route: ApiRoutes = {
  method: ApiMethods.POST, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "product/createProduct",
};
export const createProductApi = async (
  payload: payloadCreateProduct
): Promise<ReturnResponse<any>> => {
  return Repository(route, payload);
};
