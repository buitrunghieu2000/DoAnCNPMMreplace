import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnListResponse, ReturnResponse } from "../Response";

interface payloadUpdateProduct {
  name: string;
  detail: string;
  price: string;
  groupProduct: string;
  weight: number;
  quantity: number;
  id: string;
}
const route: ApiRoutes = {
  method: ApiMethods.PUT, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "product/updateProduct",
};
export const updateProductApi = async (
  payload: Array<payloadUpdateProduct>
): Promise<ReturnResponse<any>> => {
  return Repository(route, payload);
};
