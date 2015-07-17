var ViewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('http://www.flicker.com/photos/');
	this.level = ko.observable('Newborn');
	this.incrementCounter = function() {
		this.clickCount(this.clickCount()+1);
		if (this.clickCount()>10) {
			this.level('Infant');
		} 
		if (this.clickCount()>30) {
			this.level('Teen');
		}
	};
}

ko.applyBindings(new ViewModel())