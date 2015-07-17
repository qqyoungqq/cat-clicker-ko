/* Model */
var Cat = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable('Tabby');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	this.imgAttribution = ko.observable('http://www.flicker.com/photos/');
	this.nicknames = ko.observable(['Tabtab','T-Bone','Mr. T','Tabitha Tab Tabby Catty Cat']);

	this.level = ko.computed(function(){
		var level;
		var click = this.clickCount();
		if (click < 10) {
			level = 'Newborn';
		} else if (click < 20) {
			level = 'Infant';
		} else if (click < 30) {
			level = 'Child';
		} else if (click < 40) {
			level = 'Teen';
		} else {
			level = 'Adult';
		}
		return level;
	}, this); // end level
} // end Cat

/* ViewModel */
var ViewModel = function() {

	this.currentCat = ko.observable( new Cat() );

	this.incrementCounter = function() {
		this.currentCat().clickCount(this.currentCat().clickCount()+1);
	}; // end incrementCounter

} // end ViewModel

ko.applyBindings(new ViewModel())