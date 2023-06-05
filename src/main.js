import mobileNav from './utilty/mobile-nav.js';
import darkMode from './utilty/dark-mode.js';
import lazyLoading from './utilty/lazy-loading.js';

mobileNav();
darkMode();
lazyLoading();

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

if (ScrollTrigger.isTouch !== 1) {

    ScrollSmoother.create({
        wrapper: '.wrapper1',
        content: '.content1',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero-section', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero-section',
            start: 'center',
            end: '820',
            scrub: true
        }
    })
}