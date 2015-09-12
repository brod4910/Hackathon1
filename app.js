var app = angular.module('FoodJournal', ['firebase']);

// <<<<<<< HEAD
// app.controller('MainController', 'Filters',['$scope', function($scope) {

// =======
app.controller('MainController', ['$scope', '$firebaseArray', function($scope, $firebaseArray) {

var ref = new Firebase("https://greenbean.firebaseio.com/");

$scope.inputs = $firebaseArray(ref);

$scope.mealTypes = [{name: "Breakfast"}, {name: "Lunch"},  {name: "Dinner"},  {name: "Snack"}];

$scope.feels = [{name: "Great"}, {name: "Good"}, {name: "Bad"}, {name: "Horrible"}, {name: "Not sure"}];

$scope.forms = function()
{
	var newForms = {};
console.log("function works");
	newForms.user 	= $scope.team.name;
	newForms.meal 	= $scope.meal.name;
	newForms.about 	= $scope.about;
	newForms.feel 	= $scope.feel.name;
	newForms.date 	= Date.now();

	var JSONnewForms = JSON.stringify(newForms);

	console.log(JSONnewForms);
	$scope.inputs.$add(JSONnewForms);

$scope.user = "";
$scope.meal = $scope.mealTypes[0];
$scope.about = "";
$scope.feel = $scope.feels[0];
Date.now() = "";
}
	
// >>>>>>> 4167d4d320c0fa531bed66a2d1ef3e83f46ab333
$scope.team = [
{
	name: 'Ryan Hall',
	hometown: 'Park City',
	avatar: 'images/ryan.jpg'
},
{
	name: 'Daniel Breen',
	hometown: 'Taylorsville',
	avatar: 'images/daniel.jpg'
},
{
// <<<<<<< HEAD
// 	name: 'Brian Rod',
// =======
	name: 'Brian Rodriguez',
// >>>>>>> 4167d4d320c0fa531bed66a2d1ef3e83f46ab333
	hometown: 'Salt Lake City',
	avatar: 'images/brian.jpg'

}];

// <<<<<<< HEAD
// $scope.inputs = [
// {
// 	user: "Ryan",
// 	meal: "Breakfast",
// 	about: "Egg sandwhich, coffee",
// 	feel: "Good",
// 	date: "9/12/2015",
// 	img: "food.img"
// },
// {
// 	user: "Ryan",
// 	meal: "Lunch",
// 	about: "Pizza, beer",
// 	feel: "Bad",
// 	date: "9/12/2015",
// 	img: "food.img"
// },
// {
// 	user: "Ryan",
// 	meal: "Dinner",
// 	about: "Burger, soda",
// 	feel: "Unsure",
// 	date: "9/12/2015",
// 	img: "food.img"
// }];

// =======
$scope.activeUserFn = function(user) {
	$scope.activeUser = user;
	console.log($scope.activeUser);
	};


$scope.articles = [
{
	title: "Green Beans",
	sub: "What's Beneficial About Green Beans?",
	sections: [
	{
		header: "Nutritional breakdown of green beans",
		content: "According to the USDA National Nutrient Database, one cup of fresh green beans (about 100 grams) contains 31 calories, 0 grams of fat, 7 grams of carbohydrate, 3 grams of fiber, 3 grams of sugar and 2 grams of protein. Green beans are a rich source of vitamins A, C and K and also contain folate, thiamin, riboflavin, iron, magnesium and potassium."
	},
	{
		header: "Possible health benefits of consuming green beans",
		content: "Consuming fruits and vegetables of all kinds has long been associated with a reduced risk of many adverse health conditions. Many studies have suggested that increasing consumption of plant foods like green beans decreases the risk of obesity, diabetes, heart disease and overall mortality while promoting a healthy complexion, increased energy and overall lower weight."
	}]
}];
// >>>>>>> 4167d4d320c0fa531bed66a2d1ef3e83f46ab333

}]);