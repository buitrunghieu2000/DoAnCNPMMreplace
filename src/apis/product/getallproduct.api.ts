import { loginModel } from '../../models/auth.model';
import { ApiMethods, ApiRoutes } from '../defineApi';
import Repository from '../RepositoryApi';
import { ReturnListResponse } from '../Response';

interface payloadGetAllProduct {
	limit: number;
	skip: number;
}

const route: ApiRoutes = {
	method: ApiMethods.GET, //GET,DELETE su dung param
	// POST, PUT, PATCH su dung payload
	url: 'product/findAllProduct',
};
export const getAllProductAsync = async (
	payload: payloadGetAllProduct
): Promise<ReturnListResponse<any>> => {
	return Repository(route, payload);
};
