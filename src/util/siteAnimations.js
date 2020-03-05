import anime from 'animejs';

const homeAnimation = () => {
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
};

export { homeAnimation };
