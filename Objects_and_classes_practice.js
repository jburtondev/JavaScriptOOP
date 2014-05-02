
//Defining the food classvar Human = function (nationality, eyeColor, height, weight, favSport, favFood, religion) {
    this.nationality = nationality; 
    this.eyeColor = eyeColor;
    this.height = height; 
    this.weight = weight; 
    this.favSport = favSport;
    this.favFood = favFood; 
    this.religion = religion; 
}

//Defining the prototype methods for the class 'Human'
Human.prototype = {
    //The speak method = 'Hi I am a "nationality" and I am a "religion".'
    speak: function() {
    //The speak method = 'Hi I am a "nationality" and I am a "religion".'
        alert("Hi I am " + this.nationality + " and I am a " + this.religion + ".");
    },
    walk: function() {
        //The walk method = 'I am walking.'
        alert("I am walking" + ".");
    },
    sayWeight: function() {
        //The sayWeight method = 'I weight approximately "weight".'
        alert("I weight approximately " + this.weight + ".");
   }
}




//Array for ethncity
var nationality = [
    "british",
    "german", 
    "french", 
    "irish"   
];

//Array for eyeColor
var eyeColor = [
    "black",
    "brown",
    "blue",
    "green",
    "gray"
]

//Array for favSport
var favSport = [
    "american Football",
    "basketball",
    "cricket",
    "rugby",
    "gray"
]

//Array for favFood
var favFood = [
    "Fish and Chips",
    "BBQ Beef Sandwiches",
    "Beef and Bean Tostadas",
    "Beef Enchiladas",
    "Chili (Award Winning)",
    "Chipotle Beef Taquitos",
    "Enchilada Casserole",
    "French Dip Sandwiches in the Slow Cooker",
    "Indian Style Steak Kebabs with Cilantro Sauce",
    "Meatball Curry Soup",
    "Meatloaf Cupcakes with Mashed Potato Frosting",
    "Nacho Mama's Mac & Cheese",
    "Ox tail with rice and peas"
]

//Array for religion
var religion = [
    "Christian",
    "Hindu",
    "Jews",
    "Muslim",
    "Sikh"
]

//Instantiation of new Human = Jamie 
Jamie = new Human(nationality[0], eyeColor[0], 189 + "cm" , 90 + "kg" ,favSport[1], favFood[12],religion[0]);

Jamie.prototype = {
    jump: function() {
		console.log("Prototype method 'jump' works");
    }
},
//Calling functions
Jamie.speak();
Jamie.walk();
Jamie.sayWeight();

//Conditional logic to check if all function have ran successfully
if (Jamie.speak && Jamie.walk && Jamie.sayWeight){
    alert("All of our prototype methods ran smoothly.");
}
