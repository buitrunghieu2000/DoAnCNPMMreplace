import React from 'react';

interface Props {}

const ShopFilter = (props: Props) => {
	return (
		<div className='row justify-content-center'>
			<div className='col-md-10 mb-5 text-center'>
				<ul className='product-category'>
					<li>
						<a href='#' className='active'>
							All
						</a>
					</li>
					<li>
						<a href='#'>Vegetables</a>
					</li>
					<li>
						<a href='#'>Fruits</a>
					</li>
					<li>
						<a href='#'>Juice</a>
					</li>
					<li>
						<a href='#'>Dried</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default ShopFilter;
