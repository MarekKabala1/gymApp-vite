import navCss from '@@/mobileFooterNav.module.css';
const MobileFooterNav = () => {
	return (
		<nav className={navCss.nav_wrapper}>
			<div className={navCss.nav_icon}></div>
			<div className={navCss.nav_icon}></div>
			<div className={navCss.nav_icon}></div>
			<div className={navCss.nav_icon}></div>
		</nav>
	);
};

export default MobileFooterNav;
