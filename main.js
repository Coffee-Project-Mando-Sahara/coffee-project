"use strict"

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var coffees = [
    {id: 1, name: 'Light City', roast: 'light', all: 'all'},
    {id: 2, name: 'Half City', roast: 'light', all: 'all'},
    {id: 3, name: 'Cinnamon', roast: 'light', all: 'all'},
    {id: 4, name: 'City', roast: 'medium', all: 'all'},
    {id: 5, name: 'American', roast: 'medium', all: 'all'},
    {id: 6, name: 'Breakfast', roast: 'medium', all: 'all'},
    {id: 7, name: 'High', roast: 'dark', all: 'all'},
    {id: 8, name: 'Continental', roast: 'dark', all: 'all'},
    {id: 9, name: 'New Orleans', roast: 'dark', all: 'all'},
    {id: 10, name: 'European', roast: 'dark', all: 'all'},
    {id: 11, name: 'Espresso', roast: 'dark', all: 'all'},
    {id: 12, name: 'Viennese', roast: 'dark', all: 'all'},
    {id: 13, name: 'Italian', roast: 'dark', all: 'all'},
    {id: 14, name: 'French', roast: 'dark', all: 'all'},
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

    html += '<h3 class="">' + coffee.name + '</h3>';

    if(coffee.roast === "light"){
      html += '<p class="light ">' + coffee.roast + '</p>';
        console.log("Light: ")
    }
    else if(coffee.roast === "medium"){
      html += '<p class="medium">' + coffee.roast + '</p>';
        console.log("Medium: ")
    }
    else{
      html += '<p class="dark">' + coffee.roast + '</p>';
      console.log("Dark: ")
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
    var addButton = addSubmit.value;

    var addCoffee = {id: coffees.length + 1, name: addingCoffeeName, roast: roastAdd, all: 'all'};
    if (addingCoffeeName === "") {
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