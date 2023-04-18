import heroCSS from '@@/hero.module.css';

const Hero = () => {
	return (
		<div className={heroCSS.hero_wrapper}>
			<h2 className={heroCSS.hero_header}>
				Welcome in The <br /> <span>GymBuddy4U</span> <br /> App
			</h2>
			<p className={heroCSS.hero_text}>
				Gym, Nutrition and much more in one place.
				<br /> This App will help you to achieve your goals to be a better
				version of yourself.
			</p>
		</div>
	);
};

export default Hero;
