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
    // getting the h3 title of the category so when you click on it, it shows everything else
    portfolioCategoryElements.push(getById('portfolio-category-' + category));
});

//console.log(portfolioCategoryElements);

///////////////////////////////
//let portfolioRig = getById('portfolio-category-rigging');
//portfolioRig.addEventListener('click', e => { console.log("clickity click click"); });
//console.log(portfolioRig);
//console.log(portfolioCategoryElements[0] === portfolioRig);


// for (let i = 0; i < portfolioCategoryElements.length; i++){
//     console.log(`in the for loop i = ${i}`);
//     console.log(portfolioCategoryElements[i]);
    
//     portfolioCategoryElements[i].addEventListener('click', e => { console.log('clickity click click'); });
// }

// // the event listener for the click
// const portfolioCategoryDropDown = () => {
//     console.log("CLICKITY CLICK CLICK");
// }

// attach the same event listener to all of the elements
for (element in portfolioCategoryElements) {
    currentElement = portfolioCategoryElements[element];
    
    portfolioCategoryElements[element].addEventListener('click', e => {
        
        switch (e.target.id){
            case 'portfolio-category-rigging':
                console.log('rigging category pressed');
                break;

            case 'portfolio-category-characterDesign':
                console.log('character Design category pressed');
                break;

            case 'portfolio-category-animation':
                console.log('animation category pressed');
                break;

            case 'portfolio-category-code':
                console.log('code category pressed');
                break;

            case 'portfolio-category-graphicDesign':
                console.log('graphic Design category pressed');
                break;
        }
    
    });
}