import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnResponse } from "../Response";

interface payloadUpdateVoucher {
  id: string;
  quantity: number;
  duration: string;
  startTime: string;
}
const route: ApiRoutes = {
  method: ApiMethods.PUT, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "discount/updateDiscount",
};
export const updateVoucherApi = async (
  payload: payloadUpdateVoucher
): Promise<ReturnResponse<any>> => {
  return Repository(route, payload);
};
