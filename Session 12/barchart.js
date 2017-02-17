(function() {
    'use strict';

    var data = [
        { 
        	value: 10,
        	ratio: null
        },
        { 
        	value: 30,
        	ratio: null
        },
        { 
        	value: 80,
        	ratio: null
        },
        { 
        	value: 100,
        	ratio: null
        },
        { 
        	value: 5,
        	ratio: null
        },
        { 
        	value: 16,
        	ratio: null
        },
        { 
        	value: 100,
        	ratio: null
        },
        { 
        	value: 5,
        	ratio: null
        },
        { 
        	value: 16,
        	ratio: null
        },
        { 
        	value: 2,
        	ratio: null
        }
    ];

    var barChartModel = {
        data: null,
        total: null,
        init: function() {},
        setData: function(data) {
            this.data = data;
            this.updateData(data);
        },
        updateData: function(newData) {
            this.calculateTotal(newData);
            this.calculateRatio(newData);
        },
        calculateRatio: function(data) {
            var sum = 0;
            for (var i = 0, ln = this.data.length; i < ln; i += 1) {
                this.data[i].ratio = data[i].value / this.total;
            }
        },
        calculateTotal: function(data) {
            var sum = 0;
            for (var i = 0, ln = this.data.length; i < ln; i += 1) {
                sum += this.data[i].value;
            }
            return this.total = sum;
        },
        getTotal: function() {
            return this.total;
        }
    };

    var barChartView = {
    	config: null,
    	dimension: {
    		width: 400,
    		height: 250
    	},
    	mainEle: null,
    	barEles: [],
    	model: null,
    	init: function(config) {
    		if(!config) return;
    		this.config = config;
    		this.dimension.width = this.config.width || 400;
    		this.dimension.height = this.config.height || 400;
    		this.initEle();
    	},
    	initEle: function() {
    		this.parent = document.querySelector('[barchart]');
    		if(!this.parent) {
    			return console.log('Please specify a parent element.');
    		}
    		this.mainEle = document.createElement('div');
    		this.mainEle.className = 'chart';
    		this.mainEle.style.width = this.dimension.width + 'px';
    		this.mainEle.style.height = this.dimension.height + 'px';
    		this.parent.appendChild(this.mainEle);
    	},
    	setModel: function(model) {
    		this.model = model;
    		this.updateModel(model);
    	},
    	updateModel: function(newModel) {
    		var data = newModel.data;
    		var bar;
    		var frag = document.createDocumentFragment();
    		
    		// clear to make sure you dont have too many bars on repeat update of the model
    		this.mainEle.innerHTML = '';
    		this.barEles = [];

    		for (var i = 0, ln = data.length; i < ln; i += 1) {
    			if(!this.barEles[i]) {
    				bar = makeBar();
    				this.barEles.push(bar);
    			};
    			this.barEles[i].setData(data[i].ratio);
    			frag.appendChild(bar.mainEle);
    		}
    		this.mainEle.appendChild(frag);
    	}
    };

    function makeBar() {
	    var bar = {
	    	mainEle: null,
	    	data: null,    	
	    	init: function() {
	    		this.mainEle = document.createElement('div');
	    		this.mainEle.className = 'chart__bar';
	    	},
	    	setData: function(data) {
	    		var me = this;
	    		this.data = data;
	    		this.mainEle.innerText = data;
	    		setTimeout(function() {
	    			me.mainEle.style.width = (data * 100) + '%';
	    		});
	    	}
	    };
	    bar.init();
	    return bar;
    }

    barChartModel.setData(data);
    barChartView.init({
    	width: 500,
    	height: 300
    });
    barChartView.setModel(barChartModel);
    console.log(barChartModel.getTotal());

})();