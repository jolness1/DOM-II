// Your code goes here
//Setting Variables
const navButton1 = document.querySelector(".nav-link1");
console.log(navButton1);

const navButton2 = document.querySelector(".nav-link2");
console.log(navButton2);

const navButton3 = document.querySelector(".nav-link3");
console.log(navButton3);

const navButton4 = document.querySelector(".nav-link4");
console.log(navButton4);

const busLogo = document.querySelector(".logo-heading");

navButton1.addEventListener ('mouseover',(event) => {
    navButton1.style.fontSize = '6pt';
} );

navButton1.addEventListener ('mouseout',event => {
    navButton1.style.fontSize = '12pt';
} );

navButton2.addEventListener ('mouseover',(event) => {
    navButton2.style.fontSize = '6pt';
} );

navButton2.addEventListener ('mouseout',event => {
    navButton2.style.fontSize = '12pt';
} );

navButton3.addEventListener ('mouseover',(event) => {
    navButton3.style.fontSize = '6pt';
} );

navButton3.addEventListener ('mouseout',event => {
    navButton3.style.fontSize = '12pt';
} );

navButton4.addEventListener ('mouseover',(event) => {
    navButton4.style.fontSize = '6pt';
} );

navButton4.addEventListener ('mouseout',event => {
    navButton4.style.fontSize = '12pt';
} );
// navButton.addEventListener ('mouseover' , event => {
//     console.log("the better way to add Future functions if you are trash at JS");
// });

busLogo.addEventListener ('mouseover' , event => {
    busLogo.style.color = 'red';
});

busLogo.addEventListener ('mouseout' , event => {
    busLogo.style.color = 'black';
});
