/* Model */
var initialCats = [
	{
		name : "Bubble",
		clickCount : 0,
		imgSrc : "img/bubble.jpg",
		imgURL : "https://lh3.googleusercontent.com/AS2uZx8tVOvFXlPqvtApZZy8MtLFJHKklzQ4v4Dsppk=w640-h426-no",
		nicknames : ['Bubbly','bubbling']
	},
	{
		name : "Echo",
		clickCount : 0,
		imgSrc : "img/echo.jpg",
		imgURL : "https://lh3.googleusercontent.com/7XMEBEfXw0oIRrDC082ZLX9rvS79df-RDlUkWGOQrC4=w640-h496-no",
		nicknames : ['Emm']
	},
	{
		name : "Berty",
		clickCount : 0,
		imgSrc : "img/berty.jpg",
		imgURL : "https://lh3.googleusercontent.com/c4dVlRhqHVP93RhnnKRnLgt6rxk4-OpHGSxUp9xuyQ4=w640-h454-no",
		nicknames : ['Miss. B', 'Barbie']
	},
	{
		name : "Snow",
		clickCount : 0,
		imgSrc : "img/snow.jpg",
		imgURL : "https://lh3.googleusercontent.com/01WZTh1hVkxm2RAgXTbNa-1e43T9-Fogh0z4-RPkSqo=w634-h400-no",
		nicknames : ['White']
	},
	{
		name : "Tigar",
		clickCount : 0,
		imgSrc : "img/tigar.jpg",
		imgURL : "https://lh3.googleusercontent.com/JyXjFxw_NjESy30ufuGTFjotIBAzz47GKimQejv-vZQ=w632-h475-no",
		nicknames : ['Tigger','Tabby','Mr. Angry']
	}		
];

var Cat = function(data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nicknames = ko.observable(data.nicknames);

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

// Make the cats show up in a list
// Make the currentCat change when you click on a cat in the list

/* ViewModel */
var ViewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	initialCats.forEach(function(catItem){
		self.catList.push( new Cat(catItem) );
	});

	this.currentCat = ko.observable(this.catList()[0]); // end this.currentCat

	this.incrementCounter = function() {
		//this.clickCount(this.clickCount()+1);
		self.currentCat().clickCount(self.currentCat().clickCount()+1);
	}; // end incrementCounter

} // end ViewModel

ko.applyBindings(new ViewModel())