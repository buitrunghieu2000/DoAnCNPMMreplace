import React from 'react';
import './style.scss';

interface LoadingProps {
	loading: boolean
}

export const LoadingLMS = (props: LoadingProps) => {
	if (props.loading)
		return (
			<div className='loadingContainer'>
				<span className='loader'>
					<span className='loader-text'>N</span><span className='loader-inner'></span>
				</span>
				<span className='loader'>
					<span className='loader-text'>A</span><span className='loader-inner'></span>
				</span>
				<span className='loader'>
					<span className='loader-text'>T</span><span className='loader-inner'></span>
				</span>
				<span className='loader'>
					<span className='loader-text'>H</span><span className='loader-inner'></span>
				</span>
				<span className='loader'>
					<span className='loader-text'>A</span><span className='loader-inner'></span>
				</span>
			</div>
		);
	return <></>
};
