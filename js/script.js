'use strict'

const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

if (isMobile.any()) {
	document.body.classList.add('_touch');
} else {
	document.body.classList.add('_pc');
}


// Меню бургер
const iconMenu = document.querySelector('.header__menu-icon');
const menuBody = document.querySelector('.header__list');
if (iconMenu) {
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock')
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Прокрутка при клике
const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock')
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();
		}
	}
}

// аккодион 

const accordion = document.querySelector('.accordion-body__accordion');
const accordianLabel = document.querySelector('.accordion-body__accordion-label');
const accordionContent = document.querySelector('.accordion-body__accordion-content');
if (accordion) {
	accordion.addEventListener("click", function (e) {
		accordion.classList.toggle('active');
		accordianLabel.classList.toggle('active');
		accordionContent.classList.toggle('active');
	});
}

const accordion1 = document.querySelector('.accordion-body__accordion1');
const accordianLabel1 = document.querySelector('.accordion-body__accordion-label1');
const accordionContent1 = document.querySelector('.accordion-body__accordion-content1');
if (accordion1) {
	accordion1.addEventListener("click", function (e) {
		accordion1.classList.toggle('active');
		accordianLabel1.classList.toggle('active');
		accordionContent1.classList.toggle('active');
	});
}

const accordion2 = document.querySelector('.accordion-body__accordion2');
const accordianLabel2 = document.querySelector('.accordion-body__accordion-label2');
const accordionContent2 = document.querySelector('.accordion-body__accordion-content2');
if (accordion2) {
	accordion2.addEventListener("click", function (e) {
		accordion2.classList.toggle('active');
		accordianLabel2.classList.toggle('active');
		accordionContent2.classList.toggle('active');
	});
}

/* const accordion = document.getElementsByClassName('accordion-body__accordion');

for (i = 0; i < accordion.length; i++) {
	accordion[i].addEventListener('click', function () {
		this.classList.toggle('active')
	})
}; */

//--------SWIPER----------//

const swiperWorks = new Swiper('.works-slider', {
	navigation: {
		nextEl: '.works-slider__next',
		prevEl: '.works-slider__prev'
	},
	slidesPerView: 1,
	spaceBetween: 10,
	autoHeight: true,
	autoplay: {
		delay: 3000,
	},
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
	},
	speed: 1000,
})