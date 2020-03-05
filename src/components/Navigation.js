import React, { useState } from 'react';

import { DelayLink } from './DelayLink';

const handleIsActive = e => {
	var currentActive = document.querySelector('.isActive');
	var changeLink = e.target;

	if (!(currentActive.textContent === changeLink.textContent)) {
		currentActive.classList.remove('isActive');
		changeLink.parentElement.classList.add('isActive');
	}
};

const Navigation = ({ clickCallbackAnimation }) => {
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
							clickCallbackAnimation();
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
							clickCallbackAnimation();
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
							clickCallbackAnimation();
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
							clickCallbackAnimation();
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
