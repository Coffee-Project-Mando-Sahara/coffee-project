"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var coffees = [
    {id: 1, name: 'Space House Blend', roast: 'light', all: 'all'},
    {id: 2, name: 'Blue Falcon', roast: 'light', all: 'all'},
    {id: 3, name: '24k Magic', roast: 'light', all: 'all'},
    {id: 4, name: 'Alpa C.', roast: 'light', all: 'all'},
    {id: 5, name: 'Mars Treasure', roast: 'light', all: 'all'},
    {id: 6, name: "Musk's Favorite", roast: 'light', all: 'all'},
    {id: 7, name: 'Red Octane', roast: 'medium', all: 'all'},
    {id: 8, name: 'Wake Up Hop!', roast: 'medium', all: 'all'},
    {id: 9, name: 'Speedman Special', roast: 'medium', all: 'all'},
    {id: 10, name: 'Gorilla', roast: 'medium', all: 'all'},
    {id: 11, name: 'GI Joe', roast: 'medium', all: 'all'},
    {id: 12, name: 'Java Jarhead', roast: 'medium', all: 'all'},
    {id: 13, name: 'Lazarus Delight', roast: 'dark', all: 'all'},
    {id: 14, name: 'Shipmate', roast: 'dark', all: 'all'},
    {id: 15, name: 'Grenade', roast: 'dark', all: 'all'},
    {id: 16, name: 'Beyond Black', roast: 'dark', all: 'all'},
    {id: 17, name: 'Dos Veteranos', roast: 'dark', all: 'all'},
    {id: 18, name: 'Double Decafe-214, Taste of Freedom', roast: 'dark', all: 'all'},

];
//Coffee search declarations
var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#search');
var all = document.querySelector('#roast-selection');

//Create Coffee Declarations
var addingCoffee = document.querySelector('#addCoffee');
var addingRoast = document.querySelector('#addRoast-Selection')
var addSubmit = document.querySelector('#submit2');

tbody.innerHTML = renderCoffees(coffees);

//HTML tags around object
function renderCoffee(coffee) {
    var html = '<div class="coffee col-sm-2 col-md-2 col-lg-2">';
    html += '<h3>' + coffee.name + '</h3>';
    if(coffee.roast === "light"){
      html += '<p class="light ">' + coffee.roast + '</p>';
    }
    else if(coffee.roast === "medium"){
      html += '<p class="medium">' + coffee.roast + '</p>';
    }
    else{
      html += '<p class="dark">' + coffee.roast + '</p>';
    }

    html += '</div>';

    return html;
}

//Loops thru list to wrap HTML tags
function renderCoffees(coffees) {
    var html = '';
    for (var i = 0; i <= coffees.length - 1; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html; // filters the list
}

//Coffee Search Function
function updateCoffees() {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = search.value;
    var selectedRoast = roastSelection.value;
    var selectedAll = all.value;
    var filteredCoffees = [];

    coffees.forEach(function (coffee) {
        if (coffee.all === selectedAll && coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
            filteredCoffees.push(coffee)
        } else if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//Function for Adding Coffee
function createCoffee(inputNewCoffee, inputRoast) {
    var addingCoffeeName = addingCoffee.value;
    var roastAdd = addingRoast.value;


    var addCoffee = {id: coffees.length + 1, name: addingCoffeeName, roast: roastAdd, all: 'all'};

    if (addingCoffeeName === "" || roastAdd === "Select Roast") {
        updateCoffees();
    } else {
        coffees.push(addCoffee);
    }
}

//Event Handlers
submitButton.addEventListener('click', function (e) {
    e.preventDefault()
    updateCoffees();
});

search.addEventListener('keyup', function () {
    updateCoffees();
});

addSubmit.addEventListener('click', function (e) {
    e.preventDefault()
    createCoffee();
    updateCoffees();
});

roastSelection.addEventListener('change', function (){
    updateCoffees();
});