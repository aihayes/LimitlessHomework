/*
Session 10 notes
 */
(function matchNumbers() {
	'use strict';

	var m1 = {
		cache: {
			'onclicksavebtn': [],
			'onclickcancelbtn': []
		},

		subscribe: function(topic, fn, scope) {
			var act = this.cache[topic];
			if(!act) return;
			act.push({
				fn: fn, scope: scope
			});
		},

		trigger: function(topic, arg) {
			var actions = this.cache[topic];
			if(!actions) return;
			for(var i = 0, ln = actions.length; i < ln; i++) {
				actions[i].fn.apply(actions[i].scope, arg || []);
			}
		},

		off: function(topic, handler) {
			var actions = this.cache[topic];
			if(!actions) return;
			for(var i = 0, ln = actions.length; i < ln; i++) {
				if(actions[i].fn === handler) {
					actions.splice(i, 1);
					break;
				}
			}
		},

		onClickSaveBtn: function() {
			this.trigger('onclicksavebtn');
		},

		onClickCancelBtn: function() {
			this.trigger('onclickcancelbtn');
		}

		/*onClickSaveBtn: function() {
			var actions = this.cache.onclicksavebtn;
			for(var i = 0, ln = actions.length; i < ln; i++) {
				actions[i].fn.apply(actions[i].scope);
			}
		},

		onClickCancelBtn: function() {
			var actions = this.cache.onclickcancelbtn;
			for(var i = 0, ln = actions.length; i < ln; i++) {
				actions[i].fn.apply(actions[i].scope);
			}
		}*/
	};

	var m2 = {
		fly: function() {
			console.log('m2 fly');
		}
	};

	var m3 = {
		walk: function() {
			console.log('m3 walk');
		}
	};

	m1.subscribe('onclicksavebtn', m2.fly, m2);
	m1.subscribe('onclicksavebtn', m3.walk, m3);

	m1.subscribe('onclickcancelbtn', m3.walk, m3);

	/*m1.cache.onclicksavebtn.push({
		fn: m2.fly,
		scope: m2
	});

	m1.cache.oncclicksavebtn.push({
		fn: m3.walk,
		scope: m3
	});

	m1.cache.onclickcancelbtn.push({
		fn: m2.fly,
		scope: m2
	});*/

	setTimeout(function() {
		m1.onClickSaveBtn();
	}, 2000);

	setTimeout(function() {
		m1.off('onclicksavebtn', m3.walk);
	}, 3000);

	setTimeout(function() {
		m1.onClickSaveBtn();
	}, 4000);

})();