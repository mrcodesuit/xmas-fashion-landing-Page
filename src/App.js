import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import anime from 'animejs';

import './App.scss';

import Hero from './components/Hero';
import Collection from './pages/Collection';
import People from './pages/People';
import Contact from './pages/Contact';

import Navigation from './components/Navigation';

function clickCallback() {
	console.log('foo');

	var tl = anime.timeline({
		easing: 'easeOutExpo',
		duration: 750
	});
	tl.add({
		targets: '.hero-right',
		translateX: [0, '100%'],
		opacity: [1, 0],
		duration: 750,
		easing: 'easeInOutQuad'
	})
		.add(
			{
				targets: '.newCollection',
				translateX: [0, '100%'],
				opacity: [1, 0],
				duration: 750,
				easing: 'easeInOutQuad'
			},
			'-=500'
		)
		.add(
			{
				targets: '.main-heading div',
				translateX: [0, '-100%'],
				opacity: [1, 0],
				duration: 1000,
				easing: 'easeInOutQuad'
			},
			'-=750'
		)
		.add(
			{
				targets: '.bag, .main-text',
				translateY: [0, '-100%'],
				opacity: [1, 0],
				duration: 750,
				easing: 'easeInOutQuad'
			},
			'-=500'
		)
		.add(
			{
				targets: '.pullover, .bigFW20, .loader',
				translateY: [0, '100%'],
				opacity: [1, 0],
				duration: 750,
				easing: 'easeInOutQuad'
			},
			'-=500'
		);
}

function App() {
	return (
		<div className='App'>
			<Router>
				<Navigation clickCallback={clickCallback} />
				<Switch>
					<Route path='/collection'>
						<Collection />
					</Route>
					<Route path='/people'>
						<People />
					</Route>
					<Route path='/contact'>
						<Contact />
					</Route>
					<Route path='/'>
						<Hero />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
