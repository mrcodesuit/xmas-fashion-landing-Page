import React, { useEffect } from 'react';
import anime from 'animejs';

import woman from '../assets/img/woman.jpg';
import bag from '../assets/img/bag.jpg';
import pullover from '../assets/img/pullover.jpg';
import { cleanup } from '@testing-library/react';

const Home = () => {
	useEffect(() => {
		var tl = anime.timeline({
			easing: 'easeOutCubic',
			duration: 750
		});
		tl.add({
			targets: '.hero-right img',
			translateY: [250, 0],
			duration: 1500
		})
			.add(
				{
					targets: '.hero-right-img-overlay',
					left: [0, '100%'],
					duration: 1500
				},
				'-=1500'
			)
			.add(
				{
					targets: '.newCollection',
					translateY: ['100%', 0],
					opacity: [0, 1],
					duration: 750
				},
				'-=1500'
			)
			.add(
				{
					targets: '.main-heading div',
					translateX: ['-100%', 0],
					opacity: [0, 1],
					duration: 1000
				},
				'-=1500'
			)
			.add(
				{
					targets: '.main-text',
					translateX: ['10%', 0],
					opacity: [0, 1],
					duration: 750
				},
				'-=1500'
			)
			.add(
				{
					targets: '.bigFW20, .loader',
					translateY: ['100%', 0],
					opacity: [0, 1],
					duration: 750
				},
				'-=1500'
			)
			.add(
				{
					targets: '.hero-left-img-pullover-overlay',
					bottom: [0, '100%'],
					duration: 750
				},
				'-=1500'
			)
			.add(
				{
					targets: '.bag img',
					translateX: ['-20%', 0],
					duration: 750
				},
				'-=1500'
			)
			.add(
				{
					targets: '.hero-left-img-bag-overlay',
					top: [0, '100%'],
					duration: 750
				},
				'-=1500'
			);
	}, []);

	return (
		<>
			<div className='container'>
				<section className='hero'>
					<div className='hero-left'>
						<div className='content-wrapper'>
							<div className='img-wrapper bag'>
								<div className='hero-left-img-bag-overlay'></div>
								<img src={bag} alt='bag in hand' />
							</div>
							<p className='main-text'>
								Happy friday, Glad to share with you my new shot on the fashion
								e-commerce Birdie project. Today, this is a blog page. Check out
								the attachment for the high resolution version. My general…
							</p>
							<div className='main-heading'>
								<div>Let the Good</div>
								<div>Times Roll</div>
							</div>
							<div className='bottom-content'>
								<p className='loader'>fw20</p>
								<p className='bigFW20'>fw20</p>
								<div className='img-wrapper pullover'>
									<div className='hero-left-img-pullover-overlay'></div>
									<img src={pullover} alt='red pullover' />
								</div>
								<p className='newCollection'>new collection</p>
							</div>
						</div>
					</div>

					<div className='hero-right'>
						<div className='hero-right-img-overlay'></div>
						<div className='img-wrapper woman'>
							<img src={woman} alt='woman with a book' />
						</div>
					</div>
				</section>
				<section className='more-stuff'>More stuff ...</section>
			</div>
		</>
	);
};

export default Home;
