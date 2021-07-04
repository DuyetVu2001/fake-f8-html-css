var headerElement = document.querySelector('.navBar');
window.onscroll = () => {
	if (document.body.scrollTop > 56 || document.documentElement.scrollTop > 56) {
		headerElement.classList.remove('navBar--transparent');
	} else {
		headerElement.classList.add('navBar--transparent');
	}
};
