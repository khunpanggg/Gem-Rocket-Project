/**
 * demo1.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{

	class TiltObj {
		constructor(el, options) {
			this.el = el;
			this.options = extend({}, this.options);
			extend(this.options, options);
			this.DOM = {};
			this.DOM.img = this.el.querySelector('.content__img');
			this.DOM.title = this.el.querySelector('.content__title');
			this._initEvents();
		}
		_initEvents() {
			this.mouseenterFn = (ev) => {
				anime.remove(this.DOM.img);
				anime.remove(this.DOM.title);
			};

			this.mousemoveFn = (ev) => {
				requestAnimationFrame(() => this._layout(ev));
			};

			this.mouseleaveFn = (ev) => {
				requestAnimationFrame(() => {
					anime({
						targets: [this.DOM.img, this.DOM.title],
						duration: 1500,
						easing: 'easeOutElastic',
						elasticity: 400,
						translateX: 0,
						translateY: 0
					});
				});
			};

			this.el.addEventListener('mousemove', this.mousemoveFn);
			this.el.addEventListener('mouseleave', this.mouseleaveFn);
			this.el.addEventListener('mouseenter', this.mouseenterFn);
		}
		_layout(ev) {
			// Mouse position relative to the document.
			const mousepos = getMousePos(ev);
			// Mouse position relative to the main element (this.DOM.el).
			const relmousepos = { x: mousepos.x - bounds.left - docScrolls.left, y: mousepos.y - bounds.top - docScrolls.top };

			// Movement settings for the animatable elements.
			const t = {
				img: this.options.movement.img.translation,
				title: this.options.movement.title.translation,
			};

			const transforms = {
				img: {
					x: (-1 * t.img.x - t.img.x) / bounds.width * relmousepos.x + t.img.x,
					y: (-1 * t.img.y - t.img.y) / bounds.height * relmousepos.y + t.img.y
				},
				title: {
					x: (-1 * t.title.x - t.title.x) / bounds.width * relmousepos.x + t.title.x,
					y: (-1 * t.title.y - t.title.y) / bounds.height * relmousepos.y + t.title.y
				}
			};
			this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
			this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
		}
	}

	TiltObj.prototype.options = {
		movement: {
			img : { translation : {x: -40, y: -40} },
			title : { translation : {x: 20, y: 20} },
		}
	};




	const init = function() {
		imagesLoaded(document.body, () => {
			initShapeEl();
			createScrollWatchers();
			Array.from(document.querySelectorAll('.content--layout')).forEach(el => new TiltObj(el));
			// Remove loading class from body
			document.body.classList.remove('loading');
		});
	}

	init();
};