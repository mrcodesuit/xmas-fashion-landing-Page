import React, { useEffect } from 'react';
import anime from 'animejs';

import woman from '../assets/img/woman.jpg';
import bag from '../assets/img/bag.jpg';
import pullover from '../assets/img/pullover.jpg';

const Hero = () => {
	// autoplay:false ausprobieren!!!
	useEffect(() => {
		var tl = anime.timeline({
			easing: 'easeOutExpo',
			duration: 750
		});
		tl.add({
			targets: '.hero-right',
			translateX: ['100%', 0],
			opacity: [0, 1],
			duration: 750,
			easing: 'easeInOutQuad'
		})
			.add(
				{
					targets: '.newCollection',
					translateX: ['100%', 0],
					opacity: [0, 1],
					duration: 750,
					easing: 'easeInOutQuad'
				},
				'-=500'
			)
			.add(
				{
					targets: '.main-heading div',
					translateX: ['-100%', 0],
					opacity: [0, 1],
					duration: 1000,
					easing: 'easeInOutQuad'
				},
				'-=750'
			)
			.add(
				{
					targets: '.bag, .main-text',
					translateY: ['-100%', 0],
					opacity: [0, 1],
					duration: 750,
					easing: 'easeInOutQuad'
				},
				'-=500'
			)
			.add(
				{
					targets: '.pullover, .bigFW20, .loader',
					translateY: ['100%', 0],
					opacity: [0, 1],
					duration: 750,
					easing: 'easeInOutQuad'
				},
				'-=500'
			);
	}, []);

	var tl = anime.timeline({
		easing: 'easeOutExpo',
		duration: 750,
		autoplay: false
	});
	tl.add({
		targets: '.hero-right',
		translateX: ['100%', 0],
		opacity: [0, 1],
		duration: 750,
		easing: 'easeInOutQuad'
	})
		.add(
			{
				targets: '.newCollection',
				translateX: ['100%', 0],
				opacity: [0, 1],
				duration: 750,
				easing: 'easeInOutQuad'
			},
			'-=500'
		)
		.add(
			{
				targets: '.main-heading div',
				translateX: ['-100%', 0],
				opacity: [0, 1],
				duration: 1000,
				easing: 'easeInOutQuad'
			},
			'-=750'
		)
		.add(
			{
				targets: '.bag, .main-text',
				translateY: ['-100%', 0],
				opacity: [0, 1],
				duration: 750,
				easing: 'easeInOutQuad'
			},
			'-=500'
		)
		.add(
			{
				targets: '.pullover, .bigFW20, .loader',
				translateY: ['100%', 0],
				opacity: [0, 1],
				duration: 750,
				easing: 'easeInOutQuad'
			},
			'-=500'
		);

	return (
		<>
			<div className='container'>
				<section className='hero'>
					<div className='hero-left'>
						<div className='content-wrapper'>
							<div className='img-wrapper bag'>
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
									<img src={pullover} alt='red pullover' />
								</div>
								<p className='newCollection'>new collection</p>
							</div>
						</div>
					</div>

					<div className='hero-right'>
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

export default Hero;
