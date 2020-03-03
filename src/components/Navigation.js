import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { DelayLink } from './DelayLink';

const handleIsActive = e => {
	e.preventDefault();
	var currentActive = document.querySelector('.isActive');
	var changeLink = e.target;
	console.log(currentActive.textContent);
	console.log(changeLink.textContent);

	if (!(currentActive.textContent === changeLink.textContent)) {
		console.log('ungleich');
		currentActive.classList.remove('isActive');
		changeLink.parentElement.classList.add('isActive');
	}
};

const Navigation = ({ clickCallback }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={`navigation ${isOpen ? 'isOpen' : ''}`}>
			<div className='navToggler' onClick={() => setIsOpen(!isOpen)}>
				<span></span>
				<span></span>
			</div>
			<nav className='nav-main'>
				<ul>
					<li
						className='isActive'
						onClick={e => {
							clickCallback();
							setIsOpen(!isOpen);
							handleIsActive(e);
						}}
					>
						<DelayLink to='/' delay={1500}>
							Home
						</DelayLink>
					</li>
					<li
						onClick={e => {
							clickCallback();
							setIsOpen(!isOpen);
							handleIsActive(e);
						}}
					>
						<DelayLink to='/collection' delay={1500}>
							Collection
						</DelayLink>
					</li>
					<li
						onClick={e => {
							clickCallback();
							setIsOpen(!isOpen);
							handleIsActive(e);
						}}
					>
						<DelayLink to='/people' delay={1500}>
							People
						</DelayLink>
					</li>
					<li
						onClick={e => {
							clickCallback();
							setIsOpen(!isOpen);
							handleIsActive(e);
						}}
					>
						<DelayLink to='/contact' delay={1500}>
							Contact
						</DelayLink>
					</li>
				</ul>
				<p className='madeby'>
					made with <span role='img'>❤️</span> by Mirko Roßbach
				</p>
			</nav>
		</div>
	);
};

export default Navigation;
