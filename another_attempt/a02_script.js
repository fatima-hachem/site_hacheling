//returns element with the ID specified
const getById = id => {
    return document.getElementById(id);
}

// returns array of elements with the same class 
const getByClass = htmlClass => {
    return document.getElementsByClassName(htmlClass);
}

//////////////////////////////////////////////////
let portfolioCategoryNames = ['rigging', 'characterDesign', 'animation', 'code', 'graphicDesign'];

let portfolioCategoryElements = [];

// collect all into a single array
portfolioCategoryNames.forEach((category)=>{
    portfolioCategoryElements.push(getById('portfolio-category-gallery-' + category));
});

//console.log(portfolioCategoryElements);

// the event listener for the click
const portfolioCategoryDropDown = () => {
    console.log("CLICKITY CLICK CLICK");
}

// attach the same event listener to all of the elements
for (element in portfolioCategoryElements) {
    (portfolioCategoryElements[element]).addEventListener('setPointerCapture', portfolioCategoryDropDown);
}


