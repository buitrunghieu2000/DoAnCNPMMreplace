import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnResponse } from "../Response";

interface payloadCreateVoucher {
  percentDiscount: number;
  quantity: number;
  duration: string;
  startTime: string;
  maxDiscount: number;
  minimumDiscount: number;
}
const route: ApiRoutes = {
  method: ApiMethods.POST, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "discount/createDiscount",
};
export const createVoucherApi = async (
  payload: payloadCreateVoucher
): Promise<ReturnResponse<any>> => {
  return Repository(route, payload);
};
