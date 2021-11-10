import React from 'react';
import './style.scss';
import empty from '../../images/empty.png';

interface OrderProps {}

const OrderPage = (props: OrderProps) => {
	const onClickMyNhan = (e: any) => {
		const order = document.querySelector('.list.active');
		if (!order) return;
		order.className = 'list';
		e.target.className = 'list active';
	};
	return (
		<div className='orderPage container'>
			<div className='orderPage-wrapper'>
				<span onClick={onClickMyNhan} className='list active'>
					Wait to confirm
				</span>
				<span onClick={onClickMyNhan} className='list'>
					Wait to take
				</span>
				<span onClick={onClickMyNhan} className='list'>
					Delivering
				</span>
				<span onClick={onClickMyNhan} className='list'>
					Delivered
				</span>
				<span onClick={onClickMyNhan} className='list'>
					Canceled
				</span>
				<span onClick={onClickMyNhan} className='list'>
					Order Status
				</span>
			</div>
			<div className='orderPage-bottom'>
				<div className='orderPage-bottom-empty'>
					<div className='orderPage-bottom-empty-image'>
						<img src={empty} alt='' />
					</div>
					<h3>Empty Orders</h3>
				</div>
			</div>
		</div>
	);
};

export default OrderPage;
