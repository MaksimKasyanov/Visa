// !Expanding cards
const cards = document.querySelectorAll('.expander__card');
cards.forEach((el) => el.addEventListener('mouseenter', expandCard));
cards.forEach((el) => el.addEventListener('mouseleave', defaultCard));

function expandCard() {
	cards.forEach((el) => el.classList.remove('expander__card-active'));
	this.classList.add('expander__card-active');
}

function defaultCard(){
	cards.forEach((el) => el.classList.remove('expander__card-active'));
	cards[0].classList.add('expander__card-active');
}


// ! Scroll ainmated paragraphs
const accordionParagraphs = document.querySelectorAll('.accordion__paragraph');
const accordionImages = document.querySelectorAll('.accordion__img');
const accordionWrapper = document.querySelector('.accordion__wrapper');
window.addEventListener('scroll', checkParagraphs);

function checkParagraphs() {
	const scrollTrigger = window.innerHeight;
	accordionParagraphs.forEach(el => {
		const blockTop = accordionWrapper.getBoundingClientRect().top;
		if(blockTop < scrollTrigger / 10 * 8){
			accordionParagraphs.forEach(el => el.classList.remove('accordion__paragraph-active'));
			accordionParagraphs[0].classList.add('accordion__paragraph-active');
		}
		if(blockTop < scrollTrigger / 10 * 6){
			accordionParagraphs.forEach(el => el.classList.remove('accordion__paragraph-active'));
			accordionParagraphs[1].classList.add('accordion__paragraph-active');
		}
		if(blockTop < scrollTrigger / 10 * 4){
			accordionParagraphs.forEach(el => el.classList.remove('accordion__paragraph-active'));
			accordionParagraphs[2].classList.add('accordion__paragraph-active');
		}
	})
	accordionImages.forEach(el => {
		const blockTop = accordionWrapper.getBoundingClientRect().top;
		if(blockTop < scrollTrigger / 10 * 8){
			accordionImages.forEach(el => el.classList.remove('accordion__img-active'));
			accordionImages[0].classList.add('accordion__img-active');
		}
		if(blockTop < scrollTrigger / 10 * 6){
			accordionImages.forEach(el => el.classList.remove('accordion__img-active'));
			accordionImages[1].classList.add('accordion__img-active');
		}
		if(blockTop < scrollTrigger / 10 * 4){
			accordionImages.forEach(el => el.classList.remove('accordion__img-active'));
			accordionImages[2].classList.add('accordion__img-active');
		}
	})
}

// ! Slider



	

// let mySlider = new Swiper(".carousel", {
// 	effect: "coverflow",
// 	grabCursor: true,
// 	centeredSlides: true,
// 	slidesPerView: "auto",
// 	spaceBetween: 20,
// 	speed: 800,
// 	loop: true,

// 	navigation: {
// 		nextEl: '.swiper-button-next',
// 		prevEl: '.swiper-button-prev',
// 	 },

// 	autoplay: {
// 		delay: 2000,
// 		disableOnInteraction: false,
// 		pauseOnMouseEnter:true,
// 	},

// 	coverflowEffect: {
// 		rotate: 0,
// 		stretch: 0,
// 		depth: 0,
// 		modifier: 1,
// 		slideShadows: false,
// 	},

// 	pagination: {
// 		el: ".swiper-pagination",
// 	},
// });



window.addEventListener('resize', windowResize);

function windowResize(){
	if(window.innerWidth < 1000){
		let carousel = new Swiper(".carousel", {
			effect: "cards",
			grabCursor: true,
		});
	}
	
	if(window.innerWidth > 1000){
		let carousel = new Swiper(".carousel", {
			wrapperClass: 'carousel__wrapper',
			slideClass: 'carousel__slide',
			slidePrevClass: 'carousel__slide-prev',
			slideNextClass: 'carousel__slide-next',
			slideActiveClass: 'carousel__slide-active',

			effect: "coverflow",
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			spaceBetween: 10,
			speed: 800,
			loop: true,

			// breakpoints: {
			// 	// when window width is >= 320px

			// 	1000: {
			// 	  slidesPerView: 2,
			// 	  spaceBetween: 10,
			// 	},
			// 	// when window width is >= 480px
			// 	1100: {
			// 	  slidesPerView: 3,
			// 	  spaceBetween: 10,
			// 	},
			// 	// when window width is >= 640px
			// 	1200: {
			// 	  slidesPerView: 4,
			// 	  spaceBetween: 10,
			// 	},
			// 	1300: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 10,
			// 	 },
			// 	 1400: {
			// 		slidesPerView: 4,
			// 		spaceBetween: 10,
			// 	 },
			// 	 1500: {
			// 		slidesPerView: 5,
			// 		spaceBetween: 10,
			// 	 },
			// 	 1600: {
			// 		slidesPerView: 5,
			// 		spaceBetween: 10,
			// 	 }
			//  },


			navigation: {
				nextEl: '.carousel__next',
				prevEl: '.carousel__prev',
			},

			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
				pauseOnMouseEnter:true,
			},

			coverflowEffect: {
				rotate: 0,
				stretch: 0,
				depth: 0,
				modifier: 1,
				slideShadows: false,
			},

			pagination: {
				el: ".carousel__pagination",
				clickable: true,
				bulletClass: 'carousel__bullet',
				bulletActiveClass: 'carousel__bullet-active'
			},

		});
	}
}
windowResize()

