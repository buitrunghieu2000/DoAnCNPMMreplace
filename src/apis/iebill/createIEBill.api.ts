import { ApiMethods, ApiRoutes } from "../defineApi";
import Repository from "../RepositoryApi";
import { ReturnResponse } from "../Response";

export interface payloadCreatIEBill {
  name: string;
  id: string;
  quantity: number;
  price: number;
  priceDiscount: number;
}
const route: ApiRoutes = {
  method: ApiMethods.POST, //GET,DELETE su dung param
  // POST, PUT, PATCH su dung payload
  url: "iventoryHistory/createIventoryHistory",
};
export const createIEBillApi = async (
  payload: payloadCreatIEBill
): Promise<ReturnResponse<any>> => {
  return Repository(route, payload);
};
