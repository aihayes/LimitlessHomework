(function($) {
	'use strict';

	/*var bbEle = $('.bumblebee');

	console.log(bbEle);

	/*setTimeout(function() {
		//bbEle.hide();
		bbEle.fadeOut(4000, function() {
			bbEle.fadeIn(2000);
			console.log('fade out complete');
		});
	}, 2000);

	// chaining
	var object = {
		foo : function() {
			console.log('foo');
			return this;
		},

		bar : function() {
			console.log('bar');
			return this;
		}
	};

	object.foo().bar();

	setTimeout(function() {
		//bbEle.slideUp();
		bbEle.hide().slideDown();
	}, 1000);*/


	var mask = {
		ele: $('.mask'),
		container: $('.mask__container'),
		setContent: function(content) {
			this.container.html(content);
		}
	};

	var makeIcon = function(config) {
		var loading = {
			sizes: {
				tiny: {
					height: 20,
					width: 20
				},
				med: {
					height: 50,
					width: 50
				}
			}
			ele: $('<div>'),
			init: function() {
				this.ele.style.height = this.sizes[config.size].height;
				this.ele.style.width = this.sizes[config.size].width;
			}
			size: config.size || 'tiny',
			LIFE_SPAN: 10000,
			show: function() {
				var me = this;
				this.ele.fadeIn();
				setTimeout(function(){
					me.hide();
				},me.LIFE_SPAN);
			},
			hide: function() {
				this.ele.fadeOut();
			},
		};
		return loading;
	};


	var api = {
		fetchEvents: function(url, methodType, callback) {
			// talk to the server
			var data = []; 
			// return your data
			return callback(data);
		}
	};

	var datepicker = {
		mask: mask,
		loading: makeIcon({
			size: 'tiny',
			type: 'spinner'
		}),
		api: api,
		eventContent: {},
		onClickDates: function() {
			var me = this;
			this.loading.show();
			this.api.fetchEvents('url','post', me.onData);
		},
		onData: function(newData) {
			mask.setContent(this.eventContent).show();
			this.loading.hide();
		}
	};

	// create a new div in jquery
	//var bbele = $('<div>');



})(jQuery);