import { loginModel } from '../../models/auth.model';
import { ApiMethods, ApiRoutes } from '../defineApi';
import Repository from '../RepositoryApi';
import { ReturnResponse } from '../Response';

const route: ApiRoutes = {
	method: ApiMethods.GET, //GET,DELETE su dung param
	// POST, PUT, PATCH su dung payload
	url: 'user/getInformation',
};
export const getInfoAsync = async (): Promise<ReturnResponse<loginModel>> => {
	return Repository(route);
};
