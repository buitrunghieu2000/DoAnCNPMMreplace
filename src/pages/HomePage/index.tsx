import React from 'react';
import ServiceHome from './components/serviceHome';
import HeroHome from './components/heroHome';
import OurProduct from './components/ourProduct';
import { getInfoAsync } from '../../apis/auths/getInfo.api';

const HomePage = () => {
	const getUser = async () => {
		const result = await getInfoAsync();
		console.log(result);
	};
	React.useEffect(() => {
		getUser();
	}, []);

	return (
		<main className='goto-here' style={{ overflow: 'hidden' }}>
			<HeroHome />
			<ServiceHome />
			<OurProduct />
		</main>
	);
};
export default HomePage;
