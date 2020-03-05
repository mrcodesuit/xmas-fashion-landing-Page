import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { homeAnimation } from './util/siteAnimations';

import './App.scss';

import Home from './pages/Home';
import Collection from './pages/Collection';
import People from './pages/People';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';

function clickCallbackAnimation() {
	var currentActive = document.querySelector('.isActive');

	switch (currentActive.textContent) {
		case 'Home':
			homeAnimation();
			break;

		default:
			break;
	}
}

function App() {
	return (
		<div className='App'>
			<div className='container'>
				<Router>
					<Navigation clickCallbackAnimation={clickCallbackAnimation} />
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
							<Home />
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default App;
