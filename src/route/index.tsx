import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { FooterPage } from '../components/Footer';
import Navbar from '../components/Navbar';
import Subcribe from '../components/Subcribe';
import { Cart } from '../pages/Cart';
import CheckoutPage from '../pages/Checkout';
import { Contact } from '../pages/Contact';
import { ForgotPass } from '../pages/ForgotPass';
import HomePage from '../pages/HomePage';
import OrderPage from '../pages/Order';
import { ProfilePage } from '../pages/Profile';
import ShopPage from '../pages/Shop';
import { SignIn } from '../pages/SignIn';
import { SignUp } from '../pages/SignUp';
import SingleProductPage from '../pages/SingleProduct';
import WishListPage from '../pages/WishList';

import { defaultRoute } from './defaultroute';
interface IRoute {
	exact: Boolean;
	path: string;
	child: React.ReactChild | any;
}
const routes: Array<IRoute> = [
	{
		child: (
			<>
				<ShopPage></ShopPage>
			</>
		),
		path: defaultRoute.shoppage,
		exact: true,
	},
	{
		child: (
			<>
				<SingleProductPage></SingleProductPage>
			</>
		),
		path: defaultRoute.singleproduct,
		exact: true,
	},
	{
		child: (
			<>
				<HomePage></HomePage>
			</>
		),
		path: defaultRoute.homepage,
		exact: true,
	},
	{
		child: (
			<>
				<SignIn></SignIn>
			</>
		),
		path: defaultRoute.signin,
		exact: true,
	},
	{
		child: (
			<>
				<SignUp></SignUp>
			</>
		),
		path: defaultRoute.signup,
		exact: true,
	},
	{
		child: (
			<>
				<ForgotPass></ForgotPass>
			</>
		),
		path: defaultRoute.forgotpass,
		exact: true,
	},
	{
		child: (
			<>
				<Contact></Contact>
			</>
		),
		path: defaultRoute.contact,
		exact: true,
	},
	{
		child: (
			<>
				<Cart></Cart>
			</>
		),
		path: defaultRoute.cart,
		exact: true,
	},
	{
		child: (
			<>
				<CheckoutPage></CheckoutPage>
			</>
		),
		path: defaultRoute.checkout,
		exact: true,
	},
	{
		child: (
			<>
				<WishListPage></WishListPage>
			</>
		),
		path: defaultRoute.wishlist,
		exact: true,
	},
	{
		child: (
			<>
				<OrderPage />
			</>
		),
		path: defaultRoute.order,
		exact: true,
	},
	{
		child: (
			<>
				<ProfilePage />
			</>
		),
		path: defaultRoute.profile,
		exact: true,
	},
];

const renderRoute = (routes: Array<IRoute>) => {
	return routes.map((r, i) => {
		if (r.exact) {
			return (
				<Route path={r.path} exact key={i}>
					{r.child}
				</Route>
			);
		} else {
			return (
				<Route path={r.path} key={i}>
					{r.child}
				</Route>
			);
		}
	});
};

const Router = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>{renderRoute(routes)}</Switch>
			<Subcribe />
			<FooterPage />
		</BrowserRouter>
	);
};

export default Router;
