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

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
var search = document.querySelector('#search');
var all = document.querySelector('#roast-selection');

var addingCoffee = document.querySelector('#addCoffee');

tbody.innerHTML = renderCoffees(coffees);


function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<h1>' + coffee.id + '</h1>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}
function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html; // filters the list
}

//Coffee Search
function updateCoffees() {
    //e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedCoffee = search.value;
    var selectedRoast = roastSelection.value;
    var selectedAll = all.value;
    var filteredCoffees = [];

    coffees.forEach(function(coffee) {
        if (coffee.all == selectedAll && coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
            filteredCoffees.push(coffee)
        }
        if (coffee.roast === selectedRoast && coffee.name.toLowerCase().includes(selectedCoffee.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

//Add Coffee
var addCoffee = addNewCoffee(coffee,roast,) {

}


//Event Handlers
submitButton.addEventListener('click', function(e) {
    e.preventDefault()
    updateCoffees();
});
search.addEventListener("keyup", function(){
    updateCoffees(search.value);
})