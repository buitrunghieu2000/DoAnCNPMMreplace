import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnResponse } from "../Response";

interface payloadDeleteVoucher {
  id: string;
}
const route: ApiRoutes = {
  method: ApiMethods.DELETE, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "discount/deleteDiscount",
};
export const DeleteVoucherApi = async (
  payload: payloadDeleteVoucher
): Promise<ReturnResponse<any>> => {
  return Repository(route, payload);
};
